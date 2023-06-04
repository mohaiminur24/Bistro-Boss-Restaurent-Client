import React from 'react';
import { useAdmin } from '../CustomHooklayout/CustomHook';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContextLayout';

const AdminRouter = ({children}) => {
    const isAdmin = useAdmin();
    const navigate = useNavigate();
    const {loading} = useContext(AuthContext);

    if(loading){
        return <div>loading....</div>
    }
    
    if(isAdmin){
        return children;
    }else{
        navigate('/');
    };
};

export default AdminRouter;