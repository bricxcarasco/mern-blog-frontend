import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import BreadCrumb from '../parts/posts/BreadCrumb';
import Sidebar from '../parts/posts/Sidebar';
import Post from '../parts/posts/Post';

const Posts = () => {
    return (
        <>
            <Header />
                <BreadCrumb />
                <section class="blog-section">
                    <div class="container">
                        <div class="row">
                            <Post />
                            <Sidebar />
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    );
}
 
export default Posts;