import React from 'react';

import { graphQl, useStaticQuery } from 'gatsby';

import Slide from './slide';

const Slider = () => {
    const { slides } = useStaticQuery(graphql`
        query SliderQuery {
            slides: allWordpressPost(
                filter: { tags: { elemMatch: { slug: { eq: "slider" } } } }
            ) {
                edges {
                    node {
                        title
                        featured_media {
                            alt_text
                            path
                        }
                        excerpt
                        categories {
                            name
                            slug
                            path
                        }
                    }
                }
            }
        }
    `);
    return (
        <div id="featured-slider" className="featured-slider">
            <Slide />
        </div>
    );
};

export default Slider;
