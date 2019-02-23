import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '@components/Footer';
import GlobalStyles from '@styles/global-styles';
import NotificationProvider, { NotificationConsumer } from '../context/notification';

const Main = ({ children, title }) => (
  <div>
    <NotificationProvider>
      <Head>
        <title>
          {title}
        </title>
      </Head>

      <header>

      </header>

      <main>
        <NotificationConsumer/>
        {children}
      </main>

      <footer>
        <Footer/>
      </footer>
      <GlobalStyles nav={true} />
    </NotificationProvider>
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
