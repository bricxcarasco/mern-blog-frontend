import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from './PostItem';
import Pagination from './Pagination';

const Post = () => {

    const posts = useSelector((state) => state.posts);
    // eslint-disable-next-line 
    const dispatch = useDispatch();

    console.log(posts);

    return (
        <div className="col-lg-8">
            <div className="blog-box list-style">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                
                <Pagination />
            </div>
        </div>
    );
}
 
export default Post;