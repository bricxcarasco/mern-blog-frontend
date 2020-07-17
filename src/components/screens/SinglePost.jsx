import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Slider from '../parts/home/Slider';
import Title from '../parts/single-post/Title';
import Content from '../parts/single-post/Content';
import Comments from '../parts/single-post/Comments';
import ContactForm from '../parts/single-post/ContactForm';

const SinglePost = () => {
    return (
        <>
            <Header />
                <Slider />
                <section className="blog-section">
                    <div className="single-post no-sidebar">
                        <Title />
                        <Content />
                        <Comments />
                        <ContactForm />
                    </div>
                </section>
            <Footer />
        </>
    );
}
 
export default SinglePost;