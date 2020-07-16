import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Slider from '../parts/home/Slider';

const SinglePost = () => {
    return (
        <>
            <Header />
                <Slider />
                <h1>SINGLEPOST</h1>
            <Footer />
        </>
    );
}
 
export default SinglePost;