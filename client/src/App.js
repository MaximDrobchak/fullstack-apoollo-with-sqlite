import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AllAuthors from './components/BookList/AllAuthors';
import Author from './components/BookList/Author';

const client = new ApolloClient({
  uri: 'http://localhost:4000/grpaphql',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <AllAuthors />
    <Author />
  </ApolloProvider>
);

export default App;
