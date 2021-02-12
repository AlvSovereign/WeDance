import xw from 'xwind'
import { FC, ReactNode } from 'react'
import ReactPlaceholder, { Props as RPProps } from 'react-placeholder'
import { IconKey, renderIcon } from 'components/src/assets/icons'
import { Text } from '../../..'

export type Variant =
  | 'facebook'
  | 'google'
  | 'link'
  | 'plain'
  | 'primary'
  | 'secondary'
  | 'transparent'

type Icon = {
  textColor: 'blue' | 'gray' | 'white'
  iconKey: IconKey
  position?: 'left' | 'none' | 'right'
}

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
}) => (
  <ReactPlaceholder
    {...loadingProps}
    ready={isReady}
    showLoadingAnimation
    type="rect"
  >
    <button
      className={className}
      css={[
        xw`inline-flex items-center justify-center px-6 py-2 focus:outline-none rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transform-gpu active:scale-98`,
        icon?.position === 'left' && xw`pr-0`,
        variant === 'primary' && xw`bg-blue-600 hover:bg-blue-700 `,
        variant === 'secondary' && xw`bg-white hover:bg-gray-200`,
        variant === 'link' && xw`bg-transparent`,
        variant === 'google' && xw`bg-white`,
        variant === 'facebook' && xw`bg-blue-fb hover:bg-blue-fb`,
      ]}
      onClick={onClick}
      type="button"
    >
      {(icon?.position === 'left' || icon?.position === 'none') &&
        renderIcon({
          className: text && xw`mr-2`,
          iconKey: icon?.iconKey,
          textColor: isDisabled ? 'gray' : 'white',
        })}
      {text ? (
        <Text
          css={[
            xw`font-button font-bold text-sm`,
            variant === 'primary' && xw`text-white`,
            variant === 'secondary' && xw`text-blue-500`,
          ]}
          component="span"
          variant="button"
        >
          {text.toUpperCase()}
        </Text>
      ) : null}

      {children}
      {icon?.position === 'right' &&
        renderIcon({
          className: [
            text && xw`ml-2`,
            variant === 'primary' && xw`text-white`,
            variant === 'secondary' && xw`text-blue-500`,
          ],
          iconKey: icon?.iconKey,
          textColor: isDisabled ? 'gray' : 'white',
        })}
    </button>
  </ReactPlaceholder>
)
export default Button
