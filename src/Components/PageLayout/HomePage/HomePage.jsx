import React from 'react';
import Navbar from '../../ShareAbleComponents/Navbar';
import Slider from '../../ShareAbleComponents/Slider';
import SectionTitle from '../../ShareAbleComponents/SectionTitle';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <SectionTitle heading="order online" subheading='From 11:00am to 10:00pm'/>
        </div>
    );
};

export default HomePage;