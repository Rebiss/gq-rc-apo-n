import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

import {Main} from './view/Main'
import {URI} from './config/index.config.js'

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>,
  document.getElementById('rootik')
);
