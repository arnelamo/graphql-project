import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Store  from './store/Store'

/* Components */
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import Console from './components/Console'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const  App = () => {
  return (
    <ApolloProvider client={client}>
      <Store>
        <div id="main">
          <h1>GraphQL Playground</h1>
          <BookList/>
          <AddBook/> 
        </div>
        <div id="console">
        <Console />
      </div>
      </Store>
    </ApolloProvider>
  );
}

export default App;
