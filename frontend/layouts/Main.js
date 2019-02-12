import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '@components/Footer';
import GlobalStyles from '../styles/global-styles';

const Main = ({ children, title }) => (
  <div>
    <Head>
      <title>
        {title}
      </title>
    </Head>

    <header>

    </header>

    <main>
      {children}
    </main>

    <footer>
      <Footer/>
    </footer>
    <GlobalStyles nav={true} />
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string,
};

Main.defaultProps = {
  title: 'Kyle Murphy',
};

export default Main;
