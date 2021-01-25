import { UseQueryOptions, useQuery } from 'react-query'
import { GET_ARTIST } from 'components/src/graphql/queries'
import { ArtistsQuery } from 'components/src/graphql/types'
import { fetcher } from '../../utils'

const useGetArtists = ({ onSuccess }: UseQueryOptions) => {
  return useQuery<ArtistsQuery, Error>(['artists'], () => fetcher(GET_ARTIST), {
    cacheTime: 86400000, // 24 hrs
    staleTime: 2400,
    onSuccess,
  })
}

export default useGetArtists
