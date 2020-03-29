import React from 'react';

import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import SliderCard from './slider-card';

export const Slide = ({ slide }) => {
    return (
        <div className="item">
            <BackgroundImage
                className="image"
                fluid={
                    slide.node.featured_media.localFile.childImageSharp.fluid
                }
            >
                <Img
                    fluid={
                        slide.node.featured_media.localFile.childImageSharp
                            .fluid
                    }
                />
            </BackgroundImage>
            <SliderCard />
        </div>
    );
};

export default Slide;
