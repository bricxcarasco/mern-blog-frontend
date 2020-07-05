import React from 'react';

const Articles = () => {
    return (
        <section className="blog-section">
			<div className="container">
				<div className="title-section">
					<h1>Latest Articles</h1>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="blog-box list-style">

							<div className="news-post article-post">
								<div className="image-holder">
									<img src="upload/blog/home5/a5.jpg" alt="" />
								</div>
								<a className="text-link" href={false}>Travel</a>
								<h2><a href="single-post.html">Vivamus vestibulum ntulla necante.</a></h2>
								<ul className="post-tags">
									<li>3 days ago</li>
									<li><a href={false}>3 comments</a></li>
									<li>by <a href={false}>John Smith</a></li>
								</ul>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra donec nec justo eget felis facilisis fermentum Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
								<a className="text-link" href="single-post.html">Read More</a>
							</div>

							<div className="news-post article-post2">
								<div className="row">
									<div className="col-md-6">
										<div className="image-holder">
											<img src="upload/blog/f1.jpg" alt="" />
										</div>
									</div>
									<div className="col-md-6">
										<a className="text-link" href={false}>Food</a>
										<h2><a href="single-post.html">Nullam malesuada eratut turpis.</a></h2>
										<ul className="post-tags">
											<li>3 days ago</li>
											<li><a href={false}>3 comments</a></li>
											<li>by <a href={false}>John Smith</a></li>
										</ul>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
										<a className="text-link" href="single-post.html">Read More</a>
									</div>
								</div>
							</div>

							<div className="news-post article-post2">
								<div className="row">
									<div className="col-md-6">
										<div className="image-holder">
											<img src="upload/blog/c11.jpg" alt="" />
										</div>
									</div>
									<div className="col-md-6">
										<a className="text-link" href={false}>Lifestyle</a>
										<h2><a href="single-post.html">Vivamus vestibulum ntulla necante.</a></h2>
										<ul className="post-tags">
											<li>3 days ago</li>
											<li><a href={false}>3 comments</a></li>
											<li>by <a href={false}>John Smith</a></li>
										</ul>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
										<a className="text-link" href="single-post.html">Read More</a>
									</div>
								</div>
							</div>

							<div className="advertise-box">
								<a href={false}>
                                    <img src="upload/banners/ban3.jpg" alt="" />
                                </a>
							</div>

							<div className="news-post article-post2">
								<div className="row">
									<div className="col-md-6">
										<div className="image-holder">
											<img src="upload/blog/c15.jpg" alt="" />
										</div>
									</div>
									<div className="col-md-6">
										<a className="text-link" href={false}>Lifestyle</a>
										<h2><a href="single-post.html">Morbi in sem quis duiplacerat ornare hendrerit. </a></h2>
										<ul className="post-tags">
											<li>3 days ago</li>
											<li><a href={false}>3 comments</a></li>
											<li>by <a href={false}>John Smith</a></li>
										</ul>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
										<a className="text-link" href="single-post.html">Read More</a>
									</div>
								</div>
							</div>

							<div className="news-post article-post2">
								<div className="row">
									<div className="col-md-6">
										<div className="image-holder">
											<img src="upload/blog/f4.jpg" alt="" />
										</div>
									</div>
									<div className="col-md-6">
										<a className="text-link" href={false}>Food</a>
										<h2><a href="single-post.html">Aliquam tincidunt mauris.</a></h2>
										<ul className="post-tags">
											<li>3 days ago</li>
											<li><a href={false}>3 comments</a></li>
											<li>by <a href={false}>John Smith</a></li>
										</ul>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt ...</p>
										<a className="text-link" href="single-post.html">Read More</a>
									</div>
								</div>
							</div>

							<div className="center-button">
								<a href={false} className="button-one">Load More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="sidebar">

							<div className="widget social-widget">
								<ul className="social-list">
									<li>
										<a href={false}>
											<i className="fa fa-facebook"></i>
											facebook
											<span>25k likes</span>
										</a>
									</li>
									<li>
										<a href={false}>
											<i className="fa fa-twitter"></i>
											twitter
											<span>31k followers</span>
										</a>
									</li>
									<li>
										<a href={false}>
											<i className="fa fa-instagram"></i>
											instagram
											<span>31k followers</span>
										</a>
									</li>
								</ul>
							</div>

							<div className="widget category-widget">
								<h2>Categories</h2>
								<ul className="category-list">
									<li>
										<a href={false}>
											Travel <span>24</span>
										</a>
									</li>
									<li>
										<a href={false}>
											Lifestyle <span>16</span>
										</a>
									</li>
									<li>
										<a href={false}>
											Food <span>8</span>
										</a>
									</li>
								</ul>
							</div>

							<div className="widget subscribe-widget2">
								<h2>Join Our Newsletter</h2>
								<p>Sign up for our free newsletters to receive the latest news. Don't worry we won't do spam.</p>
								<form className="subscibe-form">
									<input type="text" name="email" id="email" placeholder="Enter Your Email Address" />
									<input type="submit" id="submit" value="Subscribe" />
								</form>
							</div>

							<div className="widget instagram-widget">
								<h2>Our Latest Instagram Posts</h2>
								<ul className="insta-list">
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/1.jpg" alt="" />
                                        </a>
                                    </li>
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/2.jpg" alt="" />
                                        </a>
                                    </li>
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/3.jpg" alt="" />
                                        </a>
                                    </li>
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/4.jpg" alt="" />
                                        </a>
                                    </li>
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/5.jpg" alt="" />
                                        </a>
                                    </li>
									<li>
                                        <a href={false}>
                                            <img src="upload/instagram/6.jpg" alt="" />
                                        </a>
                                    </li>
								</ul>
							</div>

							<div className="widget list-widget">
								<h2>Latest Stories</h2>
								<ul className="list-posts">
									<li>
										<a className="text-link" href={false}>Lifestyle</a>
										<h2><a href="single-post.html">Fusce pellentesque suscipit.</a></h2>
										<ul className="post-tags">
											<li>2 days ago</li>
											<li><a href={false}>0 comments</a></li>
										</ul>
									</li>
									<li>
										<a className="text-link" href={false}>Food</a>
										<h2><a href="single-post.html">Integer vitae libero ac risus egestas placerat.</a></h2>
										<ul className="post-tags">
											<li>2 days ago</li>
											<li><a href={false}>3 comments</a></li>
										</ul>
									</li>
									<li>
										<a className="text-link" href={false}>Lifestyle</a>
										<h2><a href="single-post.html">Vestibulum commodo felisquis tortor.</a></h2>
										<ul className="post-tags">
											<li>4 days ago</li>
											<li><a href={false}>0 comments</a></li>
										</ul>
									</li>
									<li>
										<a className="text-link" href={false}>Travel</a>
										<h2><a href="single-post.html">Quisque a lectus. </a></h2>
										<ul className="post-tags">
											<li>4 days ago</li>
											<li><a href={false}>0 comments</a></li>
										</ul>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
    );
}
 
export default Articles;