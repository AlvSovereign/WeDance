import { UseMutationOptions, useMutation } from 'react-query'
import { SIGNIN } from '../..'
import { SigninMutation } from '../graphql/types'
import { fetcher } from '../utils'

type Input = {
  email: string
}

const useSignin = (input: Input, { onSuccess }: UseMutationOptions) => {
  return useMutation<SigninMutation, Error>(() => fetcher(SIGNIN, { input }), {
    onSuccess,
  })
}

export default useSignin
