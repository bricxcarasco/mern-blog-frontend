import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import BreadCrumb from '../parts/posts/BreadCrumb';
import PostItem from '../parts/posts/PostItem';
import Sidebar from '../parts/posts/Sidebar';

const Posts = () => {
    return (
        <>
            <Header />
                <BreadCrumb />
                <section class="blog-section">
                    <div class="container">
                        <div class="row">
                            <PostItem />
                            <Sidebar />
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    );
}
 
export default Posts;