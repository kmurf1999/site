import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import GlobalStyles from '../styles/global-styles';

const NoNav = ({ children, title }) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
    </Head>

    <main>
      {children}
    </main>


    <GlobalStyles nav={false} />
  </div>
);

NoNav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string,
};

NoNav.defaultProps = {
  title: 'Kyle Murphy',
};

export default NoNav;

