import React, { FC, useContext } from 'react'
import { Pressable, StyleProp, StyleSheet } from 'react-native'
import { IconKey, renderIcon } from '../../../assets/icons'
import {
  ITheme,
  MsqThemeContext,
} from '../../../contexts/MsqThemeContext/MsqThemeContext'
import Text from '../Text/Text'

export type Variant =
  | 'facebook'
  | 'google'
  | 'primary'
  | 'secondary'
  | 'transparent'

interface ButtonProps {
  leftIcon?: IconKey
  isDisabled?: boolean
  onPress: () => void
  rightIcon?: IconKey
  style?: StyleProp<any>
  text: string
  variant: Variant
}

const Button: FC<ButtonProps> = ({
  isDisabled,
  leftIcon,
  onPress,
  rightIcon,
  style,
  text,
  variant,
}) => {
  const theme = useContext(MsqThemeContext)
  const styles = generateStyles(theme)
  const { BLUE_500, DARKGREY_700, LIGHTGREY_500, WHITE } = theme
  const fillColor = {
    primary: WHITE,
    secondary: BLUE_500,
    transparent: LIGHTGREY_500,
    facebook: WHITE,
    google: DARKGREY_700,
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ hovered, pressed }: any) => [
        styles.buttonBase,
        styles[variant],
        isDisabled && styles.disabled,
        !isDisabled && hovered && styles.buttonHovered,
        !isDisabled && pressed && styles.pressed,
        style,
      ]}
    >
      {leftIcon &&
        renderIcon({
          fill: isDisabled ? LIGHTGREY_500 : fillColor[variant],
          icon: leftIcon,
        })}
      <Text
        as="span"
        style={[
          styles.textBase,
          variant === 'primary' && styles.primaryText,
          variant === 'secondary' && styles.secondaryText,
          variant === 'facebook' && styles.facebookText,
          isDisabled && styles.disabledText,
        ]}
        variant="button"
      >
        {text.toUpperCase()}
      </Text>
      {rightIcon &&
        renderIcon({
          fill: isDisabled ? LIGHTGREY_500 : fillColor[variant],
          icon: rightIcon,
        })}
    </Pressable>
  )
}

const generateStyles = (theme: ITheme) => {
  const { BLUE_500, BLUE_FB, LIGHTGREY_100, LINEAR_MD, WHITE } = theme

  return StyleSheet.create({
    buttonBase: {
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 4,
      borderWidth: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 40,
      paddingHorizontal: LINEAR_MD,
      width: '100%',
    },
    buttonHovered: {
      opacity: 0.7,
    },
    disabled: { backgroundColor: LIGHTGREY_100, borderColor: LIGHTGREY_100 },
    disabledText: {
      color: WHITE,
    },
    facebook: {
      backgroundColor: BLUE_FB,
      borderColor: BLUE_FB,
    },
    facebookText: {
      color: WHITE,
    },
    google: {
      backgroundColor: WHITE,
      borderColor: WHITE,
    },
    pressed: {
      opacity: 0.7,
      transform: [{ scaleX: 0.98 }],
    },
    primary: {
      backgroundColor: BLUE_500,
      borderColor: BLUE_500,
    },
    primaryText: {
      color: WHITE,
    },
    secondary: {
      backgroundColor: WHITE,
      borderColor: BLUE_500,
    },
    secondaryText: {
      color: BLUE_500,
    },
    textBase: {
      flex: 1,
      textAlign: 'center',
    },
    transparent: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  })
}

export default Button
