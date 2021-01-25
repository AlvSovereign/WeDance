import { DocumentNode } from 'graphql'
import { GraphQLClient } from 'graphql-request'
import { Variables } from 'graphql-request/dist/types'

const getToken: () => string = () => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('token')
    if (token) {
      return `Bearer ${token}`
    }
  }

  return ''
}

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_WEDANCE_API_URL!,
  {
    headers: {
      authorization: getToken(),
    },
  },
)

const fetcher = async (docNode: DocumentNode, variables?: Variables) => {
  const data = await graphQLClient.request(docNode, variables)
  console.log('data: ', data)

  return data
}

export default fetcher
