import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { TSpacing } from 'components/src/contexts/MsqThemeContext/spacing'

type Colors = 'black' | 'blue' | 'error' | 'lightGrey' | 'white'
export type TGutterBottom = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
interface TextProps {
  as: any
  children: ReactNode
  className: string
  color: Colors
  gutterBottom?: TGutterBottom
  variant: TextVariant
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
  | 'stats'
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

const Text: FC<TextProps> = ({ as, children, className }) => {
  const Component = as || 'p'

  return <Component className={className}>{children}</Component>
}

const StyledText = styled((props: any) => <Text {...props} />)`
  ${({ as, color, gutterBottom, theme, variant }) => {
    const {
      LINEAR_XXS,
      LINEAR_XS,
      LINEAR_SM,
      LINEAR_MD,
      LINEAR_LG,
      LINEAR_XL,
      LINEAR_XXL,
    } = theme

    return {
      ...theme[variant || as],
      ...colorStyles(color, theme),
      ...gutterBottomStyles(gutterBottom, {
        LINEAR_XXS,
        LINEAR_XS,
        LINEAR_SM,
        LINEAR_MD,
        LINEAR_LG,
        LINEAR_XL,
        LINEAR_XXL,
      }),
    }
  }}
`

export default StyledText
