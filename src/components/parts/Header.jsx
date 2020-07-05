import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="clearfix header-style5">
			<div className="logo-place">
				<div className="container">
					<div className="inner-logo-place">
						<a className="navbar-brand" href="index.html">
							<img src="images/logo.png" alt="" />
						</a>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<a className="search-button" href="false"><i className="fa fa-search"></i></a>
						<form className="form-search">
							<input type="search" placeholder="Search:"/>
						</form>
						<ul className="navbar-nav m-auto">
							<li className="drop-link">
								<Link to="/" className="active">Home</Link>
							</li>
							<li className="drop-link">
								<Link to="/posts">Posts</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto social-list">
							<li><a href="false"><i className="fa fa-facebook"></i></a></li>
							<li><a href="false"><i className="fa fa-twitter"></i></a></li>
							<li><a href="false"><i className="fa fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
    );
}
 
export default Header;