import React from "react"

const HeaderTop = () => {
  return (
    <div className="header-fixed clearfix">
      <nav className="menu-top">
        <ul className="menu menu-top-list">
          <li className="menu-item">
            <a href="index.html">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Trips</a>
          </li>
          <li className="menu-item">
            <a href="#">Travel</a>
          </li>
          <li className="menu-item">
            <a href="about.html">About</a>
          </li>
          <li className="menu-item">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-socials">
        <ul>
          <li className="social-item">
            <a href="https://www.behance.net/">
              <i className="fa fa-behance"></i>
              <span>Behance</span>
            </a>
          </li>
          <li className="social-item">
            <a href="http://dribbble.com/">
              <i className="fa fa-dribbble"></i>
              <span>Dribbble</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://plus.google.com/">
              <i className="fa fa-google-plus"></i>
              <span>Google Plus</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.pinterest.com/">
              <i className="fa fa-pinterest"></i>
              <span>Pinterest</span>
            </a>
          </li>
          <li className="social-item">
            <a href="http://twitter.com/">
              <i className="fa fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop
