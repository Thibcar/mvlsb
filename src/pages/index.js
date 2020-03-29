import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header/header';
import Slider from '../components/homepage/slider';
import FeaturedBox from '../components/homepage/featured-box';
import Image from '../components/image';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar/sidebar';

const IndexPage = () => {
    const toto = [1, 2, 3];
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <Slider />
            <div id="featured-box" className="featured-box">
                {/* {toto.map(t => (
                    <FeaturedBox />
                ))} */}
                <FeaturedBox />
            </div>
            <div className="wrapper-content clearfix" data-sidebar="right">
                <div className="wrapper-posts">
                    <div className="blog-posts grid-layout clearfix">
                        <div className="post post-grid">
                            <div className="post-media">
                                <a href="#">
                                    <img src="images/posts/1.jpg" alt="Post" />
                                </a>
                            </div>
                            <div className="post-content">
                                <div className="post-cat">
                                    <ul>
                                        <li>
                                            <a href="#">Travel</a>
                                        </li>
                                        <li>
                                            <a href="#">Lifestyle</a>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="title">
                                    <a href="#">
                                        The basis of friendship is sharing
                                    </a>
                                </h2>
                                <div className="post-detail">
                                    <a href="#" className="date">
                                        September 14, 2016
                                    </a>
                                    <a href="#" className="comment-count">
                                        3 Comments
                                    </a>
                                </div>

                                <div className="the-excerpt">
                                    Morbi leo enim, laoreet eget urna id,
                                    ullamcorper condimentum urna. Curabitur
                                    accumsan sem et nisi ultricies porttitor.
                                    Aliquam sed nunc elit. Nunc faucibus
                                    interdum mauris at mattis.Phasellus congue
                                    volutpat porttitor. Vivamus fringilla
                                    iaculis ex, et condimentum magna pharetra
                                    id. Aliquam erat volutpat. Nam odio velit,
                                    egestas vel leo tempus, luctus dapibus
                                    mauris. Phasellus molestie, lectus
                                </div>

                                <div className="post-footer clearfix">
                                    <div className="wrap-read-more">
                                        <div className="read-more">
                                            <a href="#">Continue Reading</a>
                                        </div>
                                    </div>
                                    <div className="post-share">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </Layout>
    );
};

export default IndexPage;
