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

interface SigninProps extends RouteChildrenProps<any, unknown> {
  fetchMe: () => any
}

const ErrorText = ({ errors, t }: { errors: any; t: any }) => (
  <Text
    as="span"
    color={errors.password?.types?.required ? 'error' : 'lightGrey'}
    variant="body2"
  >
    {`${t('form.password.message')} `}
    <Text
      as="span"
      color={errors.password?.types?.required ? 'error' : 'lightGrey'}
      variant="body2"
    >
      {`${t('form.password.validation.isRequired')}, `}
    </Text>
    <Text
      as="span"
      color={
        errors.password?.types?.isAtLeastEightChars ? 'error' : 'lightGrey'
      }
      variant="body2"
    >
      {`${t('form.password.validation.isAtLeastEightChars')}, `}
    </Text>
    <Text
      as="span"
      color={
        errors.password?.types?.hasAtLeastOneNumber ? 'error' : 'lightGrey'
      }
      variant="body2"
    >
      {`${t('form.password.validation.hasAtLeastOneNumber')}, `}
    </Text>
    <Text
      as="span"
      color={
        errors.password?.types?.hasAtLeastOneLowerCaseChar
          ? 'error'
          : 'lightGrey'
      }
      variant="body2"
    >
      {`${t('form.password.validation.hasAtLeastOneLowerCaseChar')}, `}
    </Text>
    <Text
      as="span"
      color={
        errors.password?.types?.hasAtLeastOneUpperCaseChar
          ? 'error'
          : 'lightGrey'
      }
      variant="body2"
    >
      {`${t('form.password.validation.hasAtLeastOneUpperCaseChar')}, `}
    </Text>
    <Text
      as="span"
      color={
        errors.password?.types?.hasAtLeastOneSpecialChar ? 'error' : 'lightGrey'
      }
      variant="body2"
    >
      {t('form.password.validation.hasAtLeastOneSpecialChar')}
    </Text>
  </Text>
)

const SignIn: FC<SigninProps> = ({ fetchMe }) => {
  const windowSize = useResponsive()
  const theme = useContext(MsqThemeContext)
  const styles = generateStyles(theme, windowSize)
  const { t } = useTranslation(['signin'])
  const { control, handleSubmit, errors } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [signinMutation] = useSigninMutation({
    onCompleted: async (data: SigninMutation) => {
      await setToStorage('token', data.signin.token)
      fetchMe()
    },
  })

  const onSubmit = (data: FieldValues) => {
    signinMutation({ variables: { input: { email: data.email } } })
  }

  return (
    <Page>
      <View style={styles.pageWrapper}>
        <ImageBackground
          source={{ uri: BackgroundImage }}
          style={styles.backgroundImage}
        >
          <Box as="article" style={styles.section}>
            <View style={styles.sectionContainer}>
              <Text as="h2" gutterBottom="md" variant="h2">
                {t('title')}
              </Text>
              <Text as="p" gutterBottom="lg" variant="body1">
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
              <Controller
                control={control}
                name="password"
                render={({ onChange, ...rest }) => {
                  return (
                    <Input
                      {...rest}
                      invalidText={
                        !isEmpty(errors) ? (
                          <ErrorText errors={errors} t={t} />
                        ) : null
                      }
                      isInvalid={!!errors.password}
                      onChangeText={(value: string) => onChange(value)}
                      placeholder={t('form.password.placeholder')}
                      type="password"
                    />
                  )
                }}
                rules={{
                  required: {
                    message: t('form.password.validation.isRequired'),
                    value: true,
                  },
                  validate: {
                    isAtLeastEightChars: (value: string) =>
                      value.length > 7 ||
                      (t(
                        'form.password.validation.isAtLeastEightChars',
                      ) as any),
                    hasAtLeastOneNumber: (value: string) =>
                      /.*[0-9].*/.test(value) ||
                      (t(
                        'form.password.validation.hasAtLeastOneNumber',
                      ) as any),
                    hasAtLeastOneLowerCaseChar: (value: string) =>
                      /.*[a-z].*/.test(value) ||
                      (t(
                        'form.password.validation.hasAtLeastOneLowerCaseChar',
                      ) as any),
                    hasAtLeastOneUpperCaseChar: (value: string) =>
                      /.*[A-Z].*/.test(value) ||
                      (t(
                        'form.password.validation.hasAtLeastOneUpperCaseChar',
                      ) as any),
                    hasAtLeastOneSpecialChar: (value: string) =>
                      /.*[!@#$%^&*].*/.test(value) ||
                      (t(
                        'form.password.validation.hasAtLeastOneSpecialChar',
                      ) as any),
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
          </Box>
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
