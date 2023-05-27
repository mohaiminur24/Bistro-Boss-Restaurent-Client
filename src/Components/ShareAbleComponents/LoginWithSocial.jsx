import React from 'react';
import {BsFacebook, BsGoogle,BsGithub} from "react-icons/bs"

const LoginWithSocial = () => {
    return (
        <div className='my-5'>
            <h1 className='text-xs font-bold text-center'>Or Sign in With</h1>
            <div className='flex gap-3 text-sm justify-center mt-4'>
                <div className='p-2 border rounded-full'><BsFacebook/></div>
                <div className='p-2 border rounded-full'><BsGoogle/></div>
                <div className='p-2 border rounded-full'><BsGithub/></div>
            </div>
        </div>
    );
};

export default LoginWithSocial;