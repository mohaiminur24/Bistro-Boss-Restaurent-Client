import React from 'react';
import PageTitle from '../../ShareAbleComponents/PageTitle';
import Navbar from '../../ShareAbleComponents/Navbar';
import Footer from '../../ShareAbleComponents/Footer';
import cover from '../../../assets/menu/banner3.jpg'

const OurMenuPage = () => {
    return (
        <div>
            <Navbar/>
            <PageTitle img={cover} heading="Our Menu" subheading="would you like to try a dish" />
            <div className='w-4/5 mx-auto'>

            </div>
            <Footer/>
        </div>
    );
};

export default OurMenuPage;