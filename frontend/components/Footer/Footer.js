import React, { Component } from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
                <FaTwitter/>
              </li>
              <li className="footer-social-link">
                <FaGithub/>
              </li>
              <li className="footer-social-link">
                <FaLinkedinIn/>
              </li>
            </ul>
          </div>
          <div className="footer-panel">
            <div className="footer-title">Contact</div>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                kyle@kylemerfy.com
              </li>
              <li className="footer-contact-item">
                734 660 4026
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
