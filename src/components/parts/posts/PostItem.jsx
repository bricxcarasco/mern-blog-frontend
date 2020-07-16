import React from 'react';
import Pagination from './Pagination';

const PostItem = () => {
    return (
        <div className="col-lg-8">
            <div className="blog-box list-style">

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f1.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Nullam malesuada eratut turpis.</a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f2.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Vivamus vestibulum ntulla necante.</a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f3.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Morbi in sem quis duiplacerat ornare hendrerit. </a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <div className="advertise-box">
                    <a href="#">
                        <img src="upload/banners/ban3.jpg" />
                    </a>
                </div>

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f4.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Aliquam tincidunt mauris eurisus.</a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f5.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Nullam malesuada eratut turpis.</a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <div className="news-post article-post2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image-holder">
                                <img src="upload/blog/f6.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <a className="text-link" href="#">Food</a>
                            <h2><a href="single-post.html">Vivamus vestibulum ntulla necante.</a></h2>
                            <ul className="post-tags">
                                <li>3 days ago</li>
                                <li><a href="#">3 comments</a></li>
                                <li>by <a href="#">John Smith</a></li>
                            </ul>
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    );
}
 
export default PostItem;