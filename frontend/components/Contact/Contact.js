import React, { Component } from 'react';

import ContactStyleWrapper from './Contact.style';
import colors from '@styles/colors';

class Contact extends Component {

  render() {
    const { onIndexPage } = this.props;
    return (
      <ContactStyleWrapper className="contact">
        {onIndexPage && (
          <svg className="contact-svg-top" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="30, 100 100, 100, 100, 0" fill="#000" opacity="0.1" />
            <polygon points="0,0 100,0 100, 10" fill="#2a2d38" />
            <polygon points="0, 90 0, 100 100, 100" fill={colors.footer} />
          </svg>
        )}

        <h1 className="contact-title">
          Contact
        </h1>

        <h4 className="contact-sub-title">
          Send me an email
        </h4>

        <form className="contact-form">

        </form>

      </ContactStyleWrapper>
    );
  }
}

export default Contact;
