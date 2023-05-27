import React, { createContext, useEffect, useState } from 'react';
import app from '../FirebaseConfigPage/FirebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextLayout = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);





    const AuthValue ={
        user,
        loading
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