import React, { FC, ReactNode, useContext } from 'react'
import { StyleProp, StyleSheet, Text as RNWText, TextStyle } from 'react-native'
import { useRnwToHtml } from '../../../hooks'
import {
  ITheme,
  MsqThemeContext,
} from '../../../contexts/MsqThemeContext/MsqThemeContext'
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

interface TextProps {
  as?: string
  asProps?: any
  children: ReactNode
  color?: 'black' | 'blue' | 'error' | 'lightGrey' | 'white'
  display?: 'block' | 'inline'
  gutterBottom?: TGutterBottom
  style?: StyleProp<TextStyle>
  textAlign?: 'left' | 'center' | 'right'
  variant: TextVariant
}

const Text: FC<TextProps> = ({
  as,
  asProps,
  children,
  color,
  display,
  gutterBottom,
  style,
  textAlign,
  variant,
}) => {
  const theme: ITheme = useContext(MsqThemeContext)
  const styles: any = generateStyles(theme, variant)
  const props = {
    children,
    style: clsx([
      styles[variant],
      color && styles[color],
      display && styles[display],
      gutterBottom && styles[gutterBottom],
      textAlign && styles[textAlign],
      style,
    ]),
    ...asProps,
  }
  const { Component } = useRnwToHtml(as, props)

  return (
    <>
      {Component ? (
        <>{Component}</>
      ) : (
        <RNWText
          // accessibilityRole={accessibilityRole[variant] || null}
          // aria-level={ariaLevel[variant] || null}
          style={clsx([
            styles[variant],
            color && styles[color],
            display && styles[display],
            gutterBottom && styles[gutterBottom],
            textAlign && styles[textAlign],
            style,
          ])}
        >
          {children}
        </RNWText>
      )}
    </>
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
