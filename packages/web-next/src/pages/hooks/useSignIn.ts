import { UseMutationOptions, useMutation } from 'react-query'
import { SIGNIN } from 'components'
import { SigninMutation } from 'components/src/graphql/types'
import { fetcher } from '../../utils'

const useSignin = ({ onSuccess }: UseMutationOptions) => {
  return useMutation<SigninMutation, Error>(
    (input) => fetcher(SIGNIN, { input }),
    {
      onSuccess,
    },
  )
}

export default useSignin
