import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseConfigPage/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

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



    const AuthValue ={
        user,
        loading,
        handlecreateuser,
        loggedoutuser,
        handleloginuser
    };

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
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