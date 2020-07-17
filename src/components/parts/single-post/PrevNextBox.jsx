import React from 'react';

const PrevNextBox = () => {
    return (
        <div className="prev-next-box">
            <div className="prev-box">
                <a className="text-link" href="single-post.html"><i className="fa fa-angle-left"></i> Previous Post</a>
                <h2><a href="single-post.html">Sed adipiscing ornare risus.</a></h2>
            </div>
            <div className="next-box">
                <a className="text-link next-link" href="single-post.html">Next Post <i className="fa fa-angle-right"></i></a>
                <h2><a href="single-post.html">Quisque a lectus.</a></h2>
            </div>
        </div>
    );
}
 
export default PrevNextBox;