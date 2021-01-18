import React from 'react'
import { AppRegistry } from 'react-native'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import localforage from 'localforage'
import { persistCache, LocalForageWrapper } from 'apollo3-cache-persist'
import { getFromStorage } from 'components/src/utils'
import App from './App'
import './index.css'

localforage.config({
  name: 'wedance',
  version: 1.0,
  size: 4980736,
  storeName: 'state',
})
const cache = new InMemoryCache()
const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL, fetch })
const authLink = setContext(async (_, { headers }) => {
  const token: unknown = await getFromStorage('token')
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }
})

export const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(link),
})

persistCache({
  cache,
  storage: new LocalForageWrapper(localforage),
})

const Index = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent('web-app', () => Index)
AppRegistry.runApplication('web-app', {
  rootTag: document.getElementById('root'),
})
