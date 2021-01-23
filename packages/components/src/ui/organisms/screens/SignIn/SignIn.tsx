import React, { FC, useContext } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { RouteChildrenProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import {
  ITheme,
  MsqThemeContext,
} from '../../../../contexts/MsqThemeContext/MsqThemeContext'
import useResponsive, { TBreakpoint } from '../../../../hooks/useResponsive'
import { isEmailValid, isEmpty, setToStorage } from '../../../../utils'
import { Box, Button, DividerWithText, Page, Input, Text } from '../../../../..'
import { useSigninMutation, SigninMutation } from '../../../../graphql/types'
import BackgroundImage from '../../../../assets/images/signinBack.webp'
import useGetMe from '../../../../hooks/useGetMe'

interface SigninProps extends RouteChildrenProps<any, unknown> {
  fetchMe: () => any
}

const SignIn: FC<SigninProps> = ({ fetchMe }) => {
  const windowSize = useResponsive()
  const theme = useContext(MsqThemeContext)
  const styles = generateStyles(theme, windowSize)
  const { t } = useTranslation(['signin'])
  const { control, handleSubmit, errors } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      email: '',
    },
  })
  const { data, isLoading } = useGetMe({
    onSuccess: (getMeData: any) => {
      if (getMeData.me) {
        // redirect if signed in
        // router.replace('/')
      }
    },
  })
  // const [signinMutation] = useSigninMutation({
  //   onCompleted: async (data: SigninMutation) => {
  //     await setToStorage('token', data.signin.token)
  //     fetchMe()
  //   },
  // })

  const onSubmit = (data: FieldValues) => {
    // signinMutation({ variables: { input: { email: data.email } } })
  }

  return (
    <Page>
      <View style={styles.pageWrapper}>
        <ImageBackground
          source={{ uri: BackgroundImage }}
          style={styles.backgroundImage}
        >
          <View style={styles.section}>
            <View style={styles.sectionContainer}>
              <Text gutterBottom="md" variant="h2">
                {t('title')}
              </Text>
              <Text gutterBottom="lg" variant="body1">
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
                onPress={handleSubmit(onSubmit)}
                text={t('form.submitButton')}
                variant="primary"
              />
              <DividerWithText text={t('dividerText')} />
              <Button
                leftIcon="facebook"
                onPress={handleSubmit(onSubmit)}
                style={styles.googleButton}
                text={t('form.facebookButton')}
                variant="facebook"
              />
              <Button
                leftIcon="google"
                onPress={handleSubmit(onSubmit)}
                text={t('form.googleButton')}
                variant="google"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Page>
  )
}

export default SignIn

const generateStyles = (theme: ITheme, windowSize: TBreakpoint) =>
  StyleSheet.create({
    backgroundImage: {
      height: '100%',
      width: '100%',
    },
    googleButton: { marginBottom: 16 },
    pageWrapper: {
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    section: {
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: windowSize === 'lg' ? '50%' : '100%',
    },
    sectionContainer: {
      width: windowSize === 'sm' ? '80%' : '66%',
    },
  })
