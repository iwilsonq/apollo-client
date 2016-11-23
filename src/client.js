import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './app';

const Client = () => {
  const networkInterface = createNetworkInterface({
    uri: `http://localhost:8080/graphql`
  });
  const client = new ApolloClient({
    networkInterface
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default Client;
