import React from 'react';

const FeaturedBox = () => {
    return (
        <div className="featured-box-item">
            <div className="image">
                <a href="#">
                    <img />
                    <div className="box-border-line">
                        <div className="box-line box-line-top"></div>
                        <div className="box-line box-line-right"></div>
                        <div className="box-line box-line-bottom"></div>
                        <div className="box-line box-line-left"></div>
                    </div>
                </a>
                <h2 className="title">Lifestyle</h2>
            </div>
        </div>
    );
};

export default FeaturedBox;
