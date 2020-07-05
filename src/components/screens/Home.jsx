import React from 'react';
import Header from '../parts/Header';
import Slider from '../parts/home/Slider';
import TrendingPosts from '../parts/home/TrendingPosts';
import FreshStories from '../parts/home/FreshStories';
import Advertise from '../parts/home/Advertise';
import Articles from '../parts/home/Articles';
import Footer from '../parts/Footer';

const Home = () => {
    return (
        <>
            <Header />
                <Slider />
                <TrendingPosts />
                <FreshStories />
                <Advertise />
                <Articles />
            <Footer />
        </>
    );
}
 
export default Home;