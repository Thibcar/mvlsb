import React from 'react';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-instagram">
                <ul class="instagram-pics clearfix">
                    <li class="instagram-item">
                        <a href="#">
                            <img
                                src="images/widgets/instagram/1.jpg"
                                alt="Flickr Feed"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div class="kd-container">
                <div class="kd-row">
                    <div class="logo-footer">
                        <a href="index.html">
                            <img
                                src="images/logo-footer.png"
                                alt="Logo Footer"
                            />
                        </a>
                    </div>

                    <nav class="menu-bottom">
                        <ul class="menu menu-top-list">
                            <li class="menu-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="menu-item">
                                <a href="#">Trips</a>
                            </li>
                            <li class="menu-item">
                                <a href="#">Travel</a>
                            </li>
                            <li class="menu-item">
                                <a href="about.html">About</a>
                            </li>
                            <li class="menu-item">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="header-socials">
                        <ul>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-behance"></i>
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-pinterest"></i>
                                </a>
                            </li>
                            <li class="social-item">
                                <a href="#">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="copyright">
                        <p>
                            All right reserved, designed & developed by{' '}
                            <a href="http://kendytheme.net">KendyTheme</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
