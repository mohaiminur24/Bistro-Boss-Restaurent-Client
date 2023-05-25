import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthContextLayout = ({children}) => {
    const [user, setUser] = useState("this is user");


    const AuthValue ={
        user
    };

    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextLayout;