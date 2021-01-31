import React, { FC, ReactNode } from 'react'
import ReactPlaceholder, { Props as RPProps } from 'react-placeholder'

interface BoxProps {
  align?: 'flex-start' | 'flex-end' | 'center'
  component?: keyof HTMLElementTagNameMap
  children: ReactNode
  className?: string
  direction?: 'column' | 'row'
  flex?: number
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
  flex,
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
        css={{
          alignItems: align,
          display: 'flex',
          flex,
          flexDirection: direction,
          justifyContent: justify,
          position,
        }}
        {...rest}
      >
        {children}
      </Component>
    </ReactPlaceholder>
  )
}

export default Box
