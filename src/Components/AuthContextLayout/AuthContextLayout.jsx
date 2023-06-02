import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseConfigPage/FirebaseConfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthContextLayout = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new user function is here
    const handlecreateuser = (email, pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // logout user function is here
    const loggedoutuser = () =>{
        setLoading(true);
        return signOut(auth);
    };
    // Login user function is here
    const handleloginuser =(email, pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // google loin function is here
    const loginwithgoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    };

    const AuthValue ={
        user,
        loading,
        handlecreateuser,
        loggedoutuser,
        handleloginuser,
        loginwithgoogle
    };

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(res=>{
                    localStorage.setItem("access-token",res.data);
                })
            }else{
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });
        return ()=>{
            return unsuscribe;
        };
    },[]);

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextLayout;