import { UseQueryOptions, useQuery, useQueryClient } from 'react-query'
import { GET_ME } from 'components/src/graphql/queries'
import { GetMeQuery } from 'components/src/graphql/types'
import { fetcher } from '../../utils'

const useGetMe = ({ onSuccess }: UseQueryOptions) => {
  return useQuery<GetMeQuery, Error>('me', () => fetcher(GET_ME), {
    cacheTime: 86400000, // 24 hrs
    staleTime: 0,
    onSuccess,
  })
}

export default useGetMe
