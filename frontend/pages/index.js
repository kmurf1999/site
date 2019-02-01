import React from 'react';
import Link from 'next/link';

import NoNav from '../layouts/Main';

import PhonePage from '../components/PhonePage';
import Contact from '../components/Contact';

const IndexPage = () => (
  <NoNav>
    <PhonePage/>
    <Contact onIndexPage />
  </NoNav>
);

export default IndexPage;
