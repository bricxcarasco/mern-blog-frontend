import React from 'react';
import ContentText from './ContentText';
import ContextSocial from './ContentSocial';
import PrevNextBox from './PrevNextBox';
import RelatedBox from './RelatedBox';

const Content = () => {
    return (
        <div className="single-post-content">
            <img src="upload/single/4.jpg" alt=""/>
            
            <div className="post-content">
                <ContextSocial />
                <ContentText />
            </div>

            <PrevNextBox />
            <RelatedBox />
        </div>
    );
}
 
export default Content;