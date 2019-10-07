import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <div>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </div>
    );
  }
}

export default withApolloClient(MyApp);