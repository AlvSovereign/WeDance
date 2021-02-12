import { FC, ReactNode } from 'react'
import xw from 'xwind'
import ReactPlaceholder, { Props as RPProps } from 'react-placeholder'

interface BoxProps {
  align?: 'flex-start' | 'flex-end' | 'center'
  component?: keyof HTMLElementTagNameMap
  children: ReactNode
  className?: string
  direction?: 'column' | 'row'
  isReady?: boolean
  justify?: 'flex-start' | 'flex-end' | 'center'
  loadingProps?: RPProps
  position?: 'absolute' | 'fixed' | 'relative'
  [key: string]: any
}

const Box: FC<BoxProps> = ({
  align,
  children,
  className,
  component: Component = 'div' as any,
  direction,
  isReady = true,
  justify,
  loadingProps,
  position,
  ...rest
}) => {
  return (
    <ReactPlaceholder
      {...loadingProps}
      ready={isReady}
      showLoadingAnimation
      type="rect"
    >
      <Component
        className={className}
        css={[
          xw`flex`,
          align === 'center' && xw`items-center`,
          align === 'flex-end' && xw`items-end`,
          align === 'flex-start' && xw`items-start`,
          direction === 'column' && xw`flex-col`,
          direction === 'row' && xw`flex-row`,
          justify === 'flex-end' && xw`justify-end`,
          justify === 'flex-start' && xw`justify-start`,
          position === 'absolute' && xw`absolute`,
          position === 'fixed' && xw`fixed`,
          position === 'relative' && xw`relative`,
        ]}
        {...rest}
      >
        {children}
      </Component>
    </ReactPlaceholder>
  )
}

export default Box
