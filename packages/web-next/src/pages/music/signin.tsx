import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query'
import { SigninBackgroundImage } from 'components/src/assets'
import { useResponsive } from 'components/src/hooks'
import { isEmailValid } from 'components/src/utils'
import { useGetMe, useSignIn } from '../hooks'
import {
  Box,
  Button,
  DividerWithText,
  Input,
  Page,
  Text,
} from '../../components'
import { routes } from '../../utils'

const SignInPage: FC = () => {
  const { data: getMeData, loading: getMeIsLoading } = useGetMe({
    onSuccess: (getMeData: any) => {
      if (getMeData.me) {
        //redirect if signed in
        router.replace(routes.MUSIC_HOME)
      }
    },
  })
  const { control, handleSubmit, errors } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      email: '',
    },
  })
  const { t } = useTranslation(['signin'])
  const windowSize = useResponsive()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate } = useSignIn({
    onSuccess: (signInData: any) => {
      // save JWT to cache
      localStorage.removeItem('token')
      localStorage.setItem('token', signInData.signin.token!)
      queryClient.setQueryData(['token'], signInData.signin.token)
      queryClient.setQueryData(['me'], signInData.signin)
      router.replace(routes.MUSIC_HOME)
    },
  })

  const onSubmit = (formData: FieldValues) => {
    mutate({ email: formData.email })
  }

  if (getMeIsLoading || getMeData?.me) {
    return null
  }

  return (
    <Page backgroundImage={SigninBackgroundImage}>
      <Box
        align="center"
        css={{ height: '100%' }}
        direction="row"
        justify="flex-start"
      >
        <Box
          align="center"
          css={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            height: '100%',
          }}
          direction="column"
          flex={windowSize === 'lg' ? 0.5 : 1}
          justify="center"
        >
          <div css={{ width: windowSize === 'sm' ? '80%' : '66%' }}>
            <Text as="h2" color="black" gutterBottom="md" variant="h2">
              {t('title')}
            </Text>
            <Text as="p" color="black" gutterBottom="md" variant="body1">
              {t('subtitle')}
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ onChange, ...rest }) => (
                <Input
                  {...rest}
                  invalidText={errors.email?.message}
                  isInvalid={!!errors.email}
                  onChangeText={(value: string) => onChange(value)}
                  placeholder={t('form.email.placeholder')}
                  type="email"
                />
              )}
              rules={{
                required: {
                  message: t('form.email.validation.isRequired'),
                  value: true,
                },
                validate: {
                  isValid: (value: string) =>
                    isEmailValid(value) ||
                    (t('form.email.validation.isValid') as any),
                },
              }}
            />
            <Button
              css={{ marginBottom: 16 }}
              onClick={handleSubmit(onSubmit)}
              text={t('form.submitButton')}
              variant="primary"
            />
            <DividerWithText
              css={{ marginBottom: 16 }}
              text={t('dividerText')}
            />
            <Button
              leftIcon="facebook"
              onClick={handleSubmit(onSubmit)}
              css={{ marginBottom: 16 }}
              text={t('form.facebookButton')}
              variant="facebook"
            />
            <Button
              leftIcon="google"
              onClick={handleSubmit(onSubmit)}
              text={t('form.googleButton')}
              variant="google"
            />
          </div>
        </Box>
      </Box>
    </Page>
  )
}

export default SignInPage
