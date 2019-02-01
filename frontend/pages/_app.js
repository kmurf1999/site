import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
  static getInitialProps({ router }) {
    return router;
  }

  render() {
    const { Component, pageProps, router, apolloClient} = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps}/>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
