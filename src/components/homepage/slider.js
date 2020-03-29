import React, { useState } from 'react';

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
                            localFile {
                                childImageSharp {
                                    fluid(quality: 100, maxWidth: 2000) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
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

    const [state, setState] = useState({
        slides,
        activeIndex: 0,
        autoSlide: true,
        interval: 10000,
    });
    console.log('slides =>', slides);
    return (
        <div id="featured-slider" className="featured-slider">
            <Slide slide={slides.edges[state.activeIndex]} />
        </div>
    );
};

export default Slider;
