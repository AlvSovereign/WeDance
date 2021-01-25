import { UseQueryOptions, useQuery } from 'react-query'
import { GET_ARTIST } from 'components/src/graphql/queries'
import { ArtistQuery } from 'components/src/graphql/types'
import { fetcher } from '../../utils'

const useGetArtist = (name: any, options?: UseQueryOptions) => {
  return useQuery<ArtistQuery, Error>(
    ['artist', name],
    () => fetcher(GET_ARTIST, { input: { url: name } }),
    {
      ...options,
      cacheTime: 86400000, // 24 hrs
      staleTime: 2400,
    },
  )
}

export default useGetArtist
