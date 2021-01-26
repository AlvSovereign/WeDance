import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { TSpacing } from 'components/src/contexts/MsqThemeContext/spacing'
import { useTheme } from '@emotion/react'
import { clsx } from 'components/src/utils'

type Colors = 'black' | 'blue' | 'error' | 'lightGrey' | 'white'
export type TGutterBottom = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Weights = 300 | 400 | 500 | 600

interface TextProps {
  as: any
  children: ReactNode
  className: string
  color: Colors
  gutterBottom?: TGutterBottom
  variant: TextVariant
  weight?: Weights
}
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
  | 'title'

const colorStyles = (color: Colors, theme: ITheme) => {
  const mapper = {
    black: { color: theme.BLACK },
    blue: { color: theme.BLUE_500 },
    error: { color: theme.ERROR },
    lightGrey: { color: theme.LIGHTGREY_500 },
    white: { color: theme.WHITE },
  }

  return mapper[color]
}

const gutterBottomStyles = (
  gutterBottom: TGutterBottom,
  theme: Omit<TSpacing, 'RADIUS_SM' | 'RADIUS_MD' | 'RADIUS_LG'>,
) => {
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    LINEAR_XL,
    LINEAR_XXL,
  } = theme

  const mapper = {
    xxs: { marginBottom: LINEAR_XXS },
    xs: { marginBottom: LINEAR_XS },
    sm: { marginBottom: LINEAR_SM },
    md: { marginBottom: LINEAR_MD },
    lg: { marginBottom: LINEAR_LG },
    xl: { marginBottom: LINEAR_XL },
    xxl: { marginBottom: LINEAR_XXL },
  }

  return mapper[gutterBottom]
}

const Text: FC<TextProps> = ({
  as,
  children,
  className,
  color,
  gutterBottom,
  variant,
  weight,
}) => {
  const theme = useTheme() as ITheme
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    LINEAR_XL,
    LINEAR_XXL,
  } = theme as ITheme

  const Component = as || 'p'
  return (
    <Component
      className={className}
      css={clsx([
        (variant || as) && theme[variant || as],
        color && colorStyles(color, theme),
        gutterBottom &&
          gutterBottomStyles(gutterBottom!, {
            LINEAR_XXS,
            LINEAR_XS,
            LINEAR_SM,
            LINEAR_MD,
            LINEAR_LG,
            LINEAR_XL,
            LINEAR_XXL,
          }),
        weight && { fontWeight: weight },
      ])}
    >
      {children}
    </Component>
  )
}

export default Text
