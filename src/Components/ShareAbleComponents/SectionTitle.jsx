import React from 'react';

const SectionTitle = ({subheading, heading}) => {
    return (
        <div className='mt-20 mb-10 text-center font-Inter'>
            <p className='text-sm text-yellow-500'>--- {subheading} ---</p>
            <h1 className='border-y block w-1/5 mx-auto my-2 text-2xl uppercase font-semibold'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;