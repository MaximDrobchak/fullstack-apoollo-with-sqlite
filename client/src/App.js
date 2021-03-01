import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from './components/Navigation/Routes';
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/grpaphql',
  cache: new InMemoryCache()
});

const App = () => (
      <Router>
          <ApolloProvider client={client}>
             <Routes />
          </ApolloProvider>
      </Router>
);

export default App;
