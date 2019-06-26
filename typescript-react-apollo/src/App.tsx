import React, { useState } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import introspectionResult from './introspection-results'
import './App.css';
import BasicLayout from './components/BasicLayout';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GIA_API_URI,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GIA_API_KEY;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <ApolloProvider client={client}>
      <BasicLayout setSearchValue={setSearchValue} searchValue={searchValue} />
    </ApolloProvider>
  );
}

export default App;
