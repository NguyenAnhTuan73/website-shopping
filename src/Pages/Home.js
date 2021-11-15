import React, {useEffect} from 'react';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';




const Home = () => {
    
    return (
    <>
        <Slider/>
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
    )
}

export default Home
