import React, { FC, ReactNode } from 'react'
import ReactPlaceholder, { Props as RPProps } from 'react-placeholder'
import { useTheme } from '@emotion/react'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { TPalette } from 'components/src/theme/color'
import { IconKey, renderIcon } from 'components/src/assets/icons'
import { clsx } from 'components/src/utils'
import { Text } from '../../..'

export type Variant =
  | 'facebook'
  | 'google'
  | 'link'
  | 'plain'
  | 'primary'
  | 'secondary'
  | 'transparent'

type Icon = { fill: TPalette; icon: IconKey; position: 'left' | 'right' }

interface ButtonProps {
  children?: ReactNode
  className: string
  icon?: Icon
  isDisabled?: boolean
  isReady?: boolean
  loadingProps?: RPProps
  onClick: () => void
  text?: string
  variant: Variant
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  icon,
  isDisabled,
  isReady = true,
  loadingProps,
  onClick,
  text,
  variant,
}) => {
  const theme = useTheme() as ITheme
  const { baseButton, LIGHTGREY_500, LINEAR_SM } = theme

  return (
    <ReactPlaceholder
      {...loadingProps}
      ready={isReady}
      showLoadingAnimation
      type="rect"
    >
      <button
        className={className}
        css={clsx([
          baseButton,
          theme[variant],
          {
            '&:active': {
              transform: 'scale(0.98)',
            },
            '&:hover': {
              filter: 'brightness(85%)',
            },
            svg: {
              marginLeft: text && icon ? LINEAR_SM : 0,
              marginRight: text && icon ? LINEAR_SM : 0,
            },
          },
        ])}
        onClick={onClick}
        type="button"
      >
        {icon?.position === 'left' &&
          renderIcon({
            fill: (isDisabled ? LIGHTGREY_500 : icon.fill) as string,
            icon: icon.icon,
          })}
        {text ? (
          <Text component="span" variant="button">
            {text.toUpperCase()}
          </Text>
        ) : null}

        {children}
        {icon?.position === 'right' &&
          renderIcon({
            fill: (isDisabled ? LIGHTGREY_500 : icon.fill) as string,
            icon: icon.icon,
          })}
      </button>
    </ReactPlaceholder>
  )
}

export default Button
