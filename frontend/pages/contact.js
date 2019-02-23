import React from 'react';
import styled from 'styled-components';

import Contact from '@components/Contact';
import Main from '../layouts/Main';

const ContactPageStyle = styled.div`
  margin: 0;
`;

const ContactPage = () => (
  <Main>
    <ContactPageStyle>
      <Contact/>
    </ContactPageStyle>
  </Main>
);

export default ContactPage;
