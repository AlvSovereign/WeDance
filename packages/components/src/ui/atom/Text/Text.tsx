import React, { FC, ReactNode, useContext } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  AccessibilityProps,
  TextStyle,
} from 'react-native'
import { ITheme, MsqThemeContext } from '../../../theme/MsqThemeContext'
import { clsx } from '../../../utils'

export type TGutterBottom = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type TextVariant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inputLabel'
  | 'small'
  | 'stats'
  | 'title'
type Weights = 300 | 400 | 500 | 600
interface TextProps extends AccessibilityProps {
  accessibilityRole?: any
  ariaLevel?: any
  children: ReactNode
  color?: 'black' | 'blue' | 'error' | 'gray' | 'white'
  display?: 'block' | 'inline'
  gutterBottom?: TGutterBottom
  style?: StyleProp<TextStyle>
  textAlign?: 'left' | 'center' | 'right'
  variant: TextVariant
  weight?: Weights
}

const Text: FC<TextProps> = ({
  accessibilityRole,
  ariaLevel,
  children,
  color,
  display,
  gutterBottom,
  style,
  textAlign,
  variant,
  ...rest
}) => {
  const theme: ITheme = useContext(MsqThemeContext)
  const styles: any = generateStyles(theme, variant)

  return (
    <RNText
      accessibilityRole={accessibilityRole}
      aria-level={ariaLevel}
      style={clsx([
        styles[variant],
        color && styles[color],
        display && styles[display],
        gutterBottom && styles[gutterBottom],
        textAlign && styles[textAlign],
        style,
      ])}
      {...rest}
    >
      {children}
    </RNText>
  )
}

const displayStyles = {
  block: {
    width: '100%',
  },
  inline: {
    width: 'auto',
  },
}

const gutterBottomStyles = (theme: ITheme) => {
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    LINEAR_XL,
    LINEAR_XXL,
  } = theme

  return StyleSheet.flatten({
    xxs: { marginBottom: LINEAR_XXS },
    xs: { marginBottom: LINEAR_XS },
    sm: { marginBottom: LINEAR_SM },
    md: { marginBottom: LINEAR_MD },
    lg: { marginBottom: LINEAR_LG },
    xl: { marginBottom: LINEAR_XL },
    xxl: { marginBottom: LINEAR_XXL },
  })
}

const textAlignStyles = {
  left: {
    textAlign: 'left' as 'left',
  },
  center: {
    textAlign: 'center' as 'center',
  },
  right: {
    textAlign: 'right' as 'right',
  },
}

const generateStyles = (theme: ITheme, variant: TextVariant) => {
  return StyleSheet.create({
    ...displayStyles,
    ...gutterBottomStyles(theme),
    ...textAlignStyles,
    black: { color: theme.BLACK },
    blue: { color: theme.BLUE_500 },
    error: { color: theme.ERROR },
    lightGrey: { color: theme.LIGHTGREY_500 },
    [variant]: theme[variant],
    white: { color: theme.WHITE },
  })
}

export default Text
