import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import colors from '@styles/colors';
import NoNav from '../layouts/Main';
import PhonePage from '@components/PhonePage';
import Contact from '@components/Contact';

const LinksWrapper = styled.div`
  width: 100%;
  padding: 50px;
  background: ${colors.red};
  color: white;
`;

class IndexPage extends Component {
  constructor() {
    super();
    this.contact = React.createRef();
  }

  render() {
    // y = -0.03 + (1.1) / (1 / (x/0.6)^6.665)

    return (
      <NoNav>
        <PhonePage/>
        {/**       <LinksWrapper className="links-wrapper">

        </LinksWrapper> **/}
        <div
          ref={this.contact}
          className="contact-form-wrapper"
        >
          <svg className="contact-svg-top" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="30, 100 100, 100, 100, 0" fill="#000" opacity="0.1" />
            <polygon points="0,0 100,0 100, 10" fill={colors.red} />
            <polygon points="0, 90 0, 100 100, 100" fill={colors.footer} />
          </svg>
          <Contact className="contact-form"/>
        </div>
      </NoNav>
    );
  }
}


export default IndexPage;
