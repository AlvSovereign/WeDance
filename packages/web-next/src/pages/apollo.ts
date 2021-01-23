import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { persistCache, LocalForageWrapper } from 'apollo3-cache-persist'
// import { makeExecutableSchema } from 'graphql-tools'
import merge from 'deepmerge'
// import typeDefs from '../../server/src/typeDefs'
import resolvers from '../../../server/src/resolvers'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined
const isSSR = typeof window === 'undefined'
const cache = new InMemoryCache()

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext = {}, token?: string) {
  console.log('token: ', token)
  if (isSSR) {
    return undefined
    const { SchemaLink } = require('@apollo/client/link/schema')
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    })
    return new SchemaLink({ schema })
  }

  const localforage = require('localforage')

  localforage.config({
    name: 'wedance',
    version: 1.0,
    size: 4980736,
    storeName: 'state',
  })

  persistCache({
    cache,
    storage: new LocalForageWrapper(localforage),
  })

  // const { HttpLink } = require('@apollo/client/link/http')
  const httpLink = new HttpLink({
    credentials: 'include',
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    // fetch: fetch as any,
  })

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }
  })

  const link = authLink.concat(httpLink)

  return link
}

function createApolloClient(context?: ResolverContext, token?: string) {
  return new ApolloClient({
    cache,
    link: createIsomorphLink(context, token),
    ssrMode: isSSR,
  })
}

export function initializeApollo({
  initialState = null,
  context,
  token,
}: {
  initialState: any
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext
  token?: string
}) {
  const client = apolloClient ?? createApolloClient(context, token)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache)

    // Restore the cache with the merged data
    client.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (isSSR) return client
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = client

  return client
}

export function useApollo(initialState: any, token?: string) {
  const store = useMemo(
    () => initializeApollo({ initialState, context: undefined, token }),
    [initialState, token],
  )
  return store
}

// from https://github.com/vercel/next.js/blob/cfa9326c63d1c139eb25ca86ccadfb74a2c31cde/examples/with-typescript-graphql/lib/apollo.ts
