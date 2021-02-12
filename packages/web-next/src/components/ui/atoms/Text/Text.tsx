import { FC, ReactNode } from 'react'
import xw from 'xwind'
import ReactPlaceholder, {
  Props as RPProps,
} from 'react-placeholder/lib/ReactPlaceholder'

export type Colors = 'black' | 'blue' | 'gray' | 'red' | 'white'
export type TGutterBottom = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Weights = 'bold' | 'light' | 'medium' | 'normal' | 'semibold'

interface TextProps {
  children: ReactNode
  className?: string
  color?: Colors
  component: keyof HTMLElementTagNameMap
  gutterBottom?: TGutterBottom
  isReady?: boolean
  loadingProps?: RPProps
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
  | 'trackCardPlays'
  | 'trackCardTitle'

const Text: FC<TextProps> = ({
  children,
  className,
  color,
  component: Component = 'p' as any,
  gutterBottom,
  isReady = true,
  loadingProps,
  variant,
  weight,
}) => (
  <ReactPlaceholder {...loadingProps} ready={isReady} showLoadingAnimation>
    <Component
      className={className}
      css={[
        xw`font-sans`,
        variant === 'hero' &&
          xw`leading-10 text-6xl md:text-7xl tracking-tight font-semibold`,
        variant === 'h1' &&
          xw`leading-10 text-5xl md:text-6xl tracking-tight font-semibold`,
        variant === 'h2' &&
          xw`leading-10 text-4xl md:text-5xl tracking-tight font-semibold`,
        variant === 'h3' &&
          xw`leading-10 text-2xl md:text-3xl tracking-tight font-semibold`,
        variant === 'h4' &&
          xw`leading-10 text-xl md:text-2xl tracking-tight font-semibold`,
        variant === 'h5' &&
          xw`leading-10 text-lg md:text-xl tracking-tight font-semibold`,
        variant === 'body1' && xw`text-base md:text-lg font-normal`,
        variant === 'button' && xw`font-button text-xs tracking-button`,
        color === 'black' && xw`text-black`,
        color === 'blue' && xw`text-blue-500`,
        color === 'gray' && xw`text-gray-500`,
        color === 'red' && xw`text-red-500`,
        color === 'white' && xw`text-white`,
        gutterBottom === 'xxs' && xw`mb-1`,
        gutterBottom === 'xs' && xw`mb-2`,
        gutterBottom === 'sm' && xw`mb-3`,
        gutterBottom === 'md' && xw`mb-4`,
        gutterBottom === 'lg' && xw`mb-5`,
        gutterBottom === 'xl' && xw`mb-6`,
        gutterBottom === 'xxl' && xw`mb-7`,
        weight === 'light' && xw`font-light`,
        weight === 'normal' && xw`font-normal`,
        weight === 'medium' && xw`font-medium`,
        weight === 'semibold' && xw`font-semibold`,
        weight === 'bold' && xw`font-bold`,
      ]}
    >
      {children}
    </Component>
  </ReactPlaceholder>
)

export default Text
