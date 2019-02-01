import React from 'react';
import Link from 'next/link';

import NoNav from '../layouts/Main';

import PhonePage from '../components/PhonePage';

const IndexPage = () => (
  <NoNav>
    <PhonePage/>
  </NoNav>
);

export default IndexPage;
