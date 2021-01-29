import React, { FC, ReactNode } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { TColor } from 'components/src/contexts/MsqThemeContext/color'
import { ITheme } from 'components/src/contexts/MsqThemeContext/MsqThemeContext'
import { IconKey, renderIcon } from 'components/src/assets/icons'
import { Text } from '../../..'

export type Variant =
  | 'facebook'
  | 'google'
  | 'primary'
  | 'secondary'
  | 'link'
  | 'transparent'

type Icon = { fill: TColor; icon: IconKey }

interface ButtonProps {
  children?: ReactNode
  className: string
  leftIcon?: Icon
  isDisabled?: boolean
  onClick: () => void
  rightIcon?: Icon
  text?: string
  variant: Variant
}

const partialStyles = (
  colors: Pick<ITheme, 'BLACK' | 'BLUE_500' | 'BLUE_FB' | 'WHITE'>,
  variant: Variant,
) => {
  const { BLACK, BLUE_500, BLUE_FB, WHITE } = colors
  const mapper = {
    facebook: {
      backgroundColor: BLUE_FB,
      borderColor: BLUE_FB,
      span: {
        color: WHITE,
      },
    },
    google: {
      backgroundColor: WHITE,
      borderColor: WHITE,
      span: {
        color: BLACK,
      },
    },
    link: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      height: 'auto',
      padding: 0,
      width: 'auto',
      '& *': {
        cursor: 'pointer',
      },
    },
    primary: {
      backgroundColor: BLUE_500,
      borderColor: BLUE_500,
      span: {
        color: WHITE,
      },
    },
    secondary: {
      backgroundColor: WHITE,
      borderColor: BLUE_500,
      span: {
        color: BLUE_500,
      },
    },
    transparent: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      height: 'auto',
      padding: 0,
      width: 'auto',
    },
  }

  return mapper[variant]
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  isDisabled,
  leftIcon,
  onClick,
  rightIcon,
  text,
  variant,
}) => {
  const theme: ITheme = useTheme()
  const { BLUE_500, DARKGREY_700, LIGHTGREY_500, WHITE } = theme
  const fillColor = {
    primary: WHITE,
    secondary: BLUE_500,
    transparent: LIGHTGREY_500,
    facebook: WHITE,
    google: DARKGREY_700,
  }

  return (
    <button
      className={className}
      onClick={onClick}
      // style={({ hovered, pressed }: any) => [
      //   styles.buttonBase,
      //   styles[variant],
      //   isDisabled && styles.disabled,
      //   !isDisabled && hovered && styles.buttonHovered,
      //   !isDisabled && pressed && styles.pressed,
      //   forwardStyles,
      // ]}

      type="button"
    >
      {leftIcon &&
        renderIcon({
          fill: (isDisabled ? LIGHTGREY_500 : leftIcon.fill) as string,
          icon: leftIcon.icon,
        })}
      {text ? (
        <Text
          as="span"
          // style={[
          //   styles.textBase,
          //   variant === 'primary' && styles.primaryText,
          //   variant === 'secondary' && styles.secondaryText,
          //   variant === 'facebook' && styles.facebookText,
          //   isDisabled && styles.disabledText,
          // ]}
          variant="button"
        >
          {text.toUpperCase()}
        </Text>
      ) : null}

      {children}
      {rightIcon &&
        renderIcon({
          fill: isDisabled ? LIGHTGREY_500 : fillColor[variant],
          icon: rightIcon,
        })}
    </button>
  )
}

const StyledButton = styled((props: any) => <Button {...props} />)`
  ${({
    leftIcon,
    rightIcon,
    text,
    theme,
    variant,
  }: {
    leftIcon: boolean
    rightIcon: boolean
    text: string
    theme: ITheme
    variant: Variant
  }) => {
    const { BLACK, BLUE_500, BLUE_FB, LINEAR_MD, LINEAR_SM, WHITE } = theme
    return {
      alignItems: 'center',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      paddingLeft: LINEAR_MD,
      paddingRight: LINEAR_MD,
      width: '100%',
      ...partialStyles({ BLACK, BLUE_500, BLUE_FB, WHITE }, variant),
      '&:active': {
        transform: 'scale(0.98)',
      },
      '&:hover': {
        filter: 'brightness(85%)',
      },
      svg: {
        marginLeft: text && rightIcon ? LINEAR_SM : 0,
        marginRight: text && leftIcon ? LINEAR_SM : 0,
      },
    }
  }}
`

// const generateStyles = (theme: ITheme) => {
//   const { BLUE_500, BLUE_FB, LIGHTGREY_100, LINEAR_MD, WHITE } = theme

//   return StyleSheet.create({
//     buttonBase: {
//       alignItems: 'center',
//       alignSelf: 'center',
//       borderRadius: 4,
//       borderWidth: 2,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       height: 40,
//       paddingHorizontal: LINEAR_MD,
//       width: '100%',
//     },
//     buttonHovered: {
//       opacity: 0.7,
//     },
//     disabled: { backgroundColor: LIGHTGREY_100, borderColor: LIGHTGREY_100 },
//     disabledText: {
//       color: WHITE,
//     },
//     facebook: {
//       backgroundColor: BLUE_FB,
//       borderColor: BLUE_FB,
//     },
//     facebookText: {
//       color: WHITE,
//     },
//     google: {
//       backgroundColor: WHITE,
//       borderColor: WHITE,
//     },
//     pressed: {
//       opacity: 0.7,
//       transform: [{ scaleX: 0.98 }],
//     },
//     primary: {
//       backgroundColor: BLUE_500,
//       borderColor: BLUE_500,
//     },
//     primaryText: {
//       color: WHITE,
//     },
//     secondary: {
//       backgroundColor: WHITE,
//       borderColor: BLUE_500,
//     },
//     secondaryText: {
//       color: BLUE_500,
//     },
//     textBase: {
//       flex: 1,
//       textAlign: 'center',
//     },
//     transparent: {
//       backgroundColor: 'transparent',
//       borderColor: 'transparent',
//     },
//   })
// }

export default StyledButton
