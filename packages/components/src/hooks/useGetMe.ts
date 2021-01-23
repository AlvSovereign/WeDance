import { UseQueryOptions, useQuery } from 'react-query'
import { GET_ME } from '../..'
import { GetMeQuery } from '../graphql/types'
import fetcher from '../utils/fetcher'

const useGetMe = ({ onSuccess }: UseQueryOptions) => {
  return useQuery<GetMeQuery, Error>('me', () => fetcher(GET_ME), {
    cacheTime: 86400000, // 24 hrs
    staleTime: 0,
    onSuccess,
  })
}

export default useGetMe
