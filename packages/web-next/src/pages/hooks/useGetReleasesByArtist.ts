import { UseQueryOptions, useQueries, UseQueryResult } from 'react-query'
import { GET_RELEASES_BY_ARTIST } from 'components/src/graphql/queries'
import { GetReleasesByArtistQuery, Release } from 'components/src/graphql/types'
import { fetcher } from '../../utils'

const useGetReleasesByArtist = (
  releases: Release[] | null | undefined,
  options?: UseQueryOptions,
) => {
  return useQueries(
    releases!.map(({ _id }) => ({
      queryKey: ['release', _id],
      queryFn: () => fetcher(GET_RELEASES_BY_ARTIST, { input: { _id } }),
      options,
    })),
  ) as UseQueryResult<GetReleasesByArtistQuery, Error>[]
}

export default useGetReleasesByArtist
