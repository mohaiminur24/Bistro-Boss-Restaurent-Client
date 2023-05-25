import React from 'react';
import bg from '../../../assets/home/chef-service.jpg';

const BistroBossSection = () => {
    return (
        <div className='w-full h-[400px] my-10 relative'>
            <img className='w-full h-full' src={bg} alt="" />
            <div className='absolute w-full h-full top-0 flex justify-center items-center'>
                <div className='w-4/5 h-4/5 bg-white font-Cinzel flex justify-center items-center'>
                    <div className='w-4/5 mx-auto text-center space-y-2'>
                        <h1 className='text-3xl font-semibold'>Bistro Boss</h1>
                        <p className='text-sm font-Inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque quam voluptate rem harum excepturi, aspernatur necessitatibus quisquam natus quod impedit voluptas totam debitis soluta voluptatum, inventore illum vitae aperiam?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BistroBossSection;