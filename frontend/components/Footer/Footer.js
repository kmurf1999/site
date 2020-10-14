import React, { Component } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import FooterStyleWrapper from './Footer.style';

class Footer extends Component {
  render() {
    return (
      <FooterStyleWrapper>
        <div className="footer-panel-container">
          <div className="footer-panel">
            <div className="footer-title">Follow Me</div>
            <ul className="footer-social-bar">
              <li className="footer-social-link">
                <a href="https://github.com/kmurf1999/">
                  <FaGithub/>
                </a>
              </li>
              <li className="footer-social-link">
                <a href="https://www.linkedin.com/in/kyle-w-murphy/">
                  <FaLinkedinIn/>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-panel">
            <div className="footer-title">Contact</div>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                kmurf1999@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer-panel">
            <div className="footer-title">Site Map</div>
            <ul className="footer-sitemap">
              <li className="footer-sitemap-link">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="footer-sitemap-link">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="footer-sitemap-link">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-divider"/>
        </div>
      </FooterStyleWrapper>
    );
  }
}

export default Footer;
