import React from 'react';
import PageTitle from '../../ShareAbleComponents/PageTitle';
import Navbar from '../../ShareAbleComponents/Navbar';
import Footer from '../../ShareAbleComponents/Footer';
import cover from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../ShareAbleComponents/SectionTitle';
import DaynamicMenu from '../../ShareAbleComponents/DaynamicMenu';
import chef from '../../../assets/home/chef-service.jpg';

const OurMenuPage = () => {
    return (
        <div>
            <Navbar/>
            <PageTitle img={cover} heading="Our Menu" subheading="would you like to try a dish" />
            <div className='w-4/5 mx-auto'>
                <SectionTitle heading="today's offer" subheading="Don't miss" />
                <DaynamicMenu catagory="offered"/>
            </div>

            <PageTitle img={chef} heading="desserts" subheading="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <div className='w-4/5 mx-auto'>
                <DaynamicMenu catagory="dessert"/>
            </div>

            <PageTitle img={chef} heading="Pizza" subheading="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <div className='w-4/5 mx-auto'>
                <DaynamicMenu catagory="pizza"/>
            </div>
            
            <PageTitle img={chef} heading="Salads" subheading="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <div className='w-4/5 mx-auto'>
                <DaynamicMenu catagory="salad"/>
            </div>

            <PageTitle img={chef} heading="Soups" subheading="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <div className='w-4/5 mx-auto'>
                <DaynamicMenu catagory="soup"/>
            </div>


            <Footer/>
        </div>
    );
};

export default OurMenuPage;