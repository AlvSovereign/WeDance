import React, { FC, forwardRef, ReactNode, useContext, useState } from 'react'
import {
  TextInput,
  View,
  KeyboardTypeOptions,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native'
import { IconKey, renderIcon } from '../../../assets/icons'
import { ITheme, MsqThemeContext } from '../../../theme/MsqThemeContext'
import { clsx } from '../../../utils'
import Text from '../Text/Text'

interface InputProps {
  invalidText?: ReactNode
  inputRef?: any
  isInvalid?: boolean
  label?: string
  leftIcon?: IconKey
  numberOfLines?: number
  onBlur: () => void
  onChangeText: (value: any) => any
  onLeftIconPress?: () => void
  onRightIconPress?: () => void
  placeholder: string
  rightIcon?: IconKey
  type: TInputTypes
  value?: any
}

const Input: FC<InputProps> = forwardRef(
  (
    {
      inputRef,
      invalidText,
      isInvalid,
      label,
      leftIcon,
      numberOfLines,
      onBlur,
      onChangeText,
      onLeftIconPress,
      onRightIconPress,
      placeholder,
      rightIcon,
      type,
      value,
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    // const isFocused = useFocus(ref);
    const theme: ITheme = useContext(MsqThemeContext)
    const { LIGHTGREY_100, LIGHTGREY_200 } = theme
    const styles = generateStyles(theme, isInvalid, numberOfLines, type)

    let keyboardType: KeyboardTypeOptions

    switch (type) {
      case 'email':
        keyboardType = 'email-address'
        break
      case 'money':
      case 'number':
        keyboardType = 'numeric'
        break
      case 'phone':
        keyboardType = 'phone-pad'
        break
      case 'text':
        keyboardType = 'url'
        break
      default:
        keyboardType = 'default'
        break
    }

    return (
      <View style={styles.container}>
        {label && (
          <Text
            as="label"
            color="gray"
            style={styles.label}
            variant="inputLabel"
          >
            {label}
          </Text>
        )}
        <View
          style={clsx([styles.inputContainer, isFocused && styles.focused])}
        >
          {leftIcon && (
            <TouchableWithoutFeedback onPress={onLeftIconPress}>
              <View style={styles.leftIcon}>
                {renderIcon({
                  fill: isInvalid || isFocused ? LIGHTGREY_200 : LIGHTGREY_100,
                  icon: leftIcon,
                  styles: styles.leftIcon,
                })}
              </View>
            </TouchableWithoutFeedback>
          )}
          <TextInput
            keyboardType={keyboardType}
            multiline={type === 'multiline'}
            numberOfLines={numberOfLines}
            onBlur={onBlur}
            onFocus={() => setIsFocused(true)}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={LIGHTGREY_200}
            ref={inputRef}
            style={styles.input}
            secureTextEntry={type === 'password'}
            value={value}
          />
          {rightIcon && (
            <TouchableWithoutFeedback onPress={onRightIconPress}>
              <View style={styles.rightIcon}>
                {renderIcon({
                  fill: isFocused ? LIGHTGREY_200 : LIGHTGREY_100,
                  icon: rightIcon,
                  styles: styles.rightIcon,
                })}
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
        {isInvalid && invalidText && typeof invalidText === 'string' ? (
          <Text component="p" color="error" variant="body2">
            {invalidText}
          </Text>
        ) : (
          invalidText
        )}
      </View>
    )
  },
)

export default Input

const generateStyles = (
  theme: ITheme,
  isInvalid: boolean | undefined,
  numberOfLines: number | undefined,
  type: TInputTypes,
) => {
  const {
    ERROR,
    LIGHTGREY_200,
    LINEAR_LG,
    LINEAR_XS,
    LINEAR_XXS,
    RADIUS_MD,
    RED_50,
    inputText,
    WHITE,
  } = theme

  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: LINEAR_LG,
      width: '100%',
    },
    focused: { borderColor: LIGHTGREY_200 },
    label: {
      marginBottom: LINEAR_XXS,
    },
    leftIcon: {
      paddingRight: LINEAR_XS,
    },
    input: {
      ...inputText,
      backgroundColor: isInvalid ? RED_50 : WHITE,
      borderColor: isInvalid ? ERROR : WHITE,
      borderRadius: RADIUS_MD,
      borderWidth: 1.5,
      flex: 1,
      flexWrap: 'nowrap',
      height:
        type === 'multiline' ? numberOfLines! * inputText.lineHeight + 5 : 50,
      paddingHorizontal: LINEAR_XS,
      textAlignVertical: type === 'multiline' ? 'top' : 'auto',
    },
    inputContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: LINEAR_XXS,
    },
    rightIcon: {
      paddingLeft: LINEAR_XXS,
    },
  })
}

export type TInputTypes =
  | 'email'
  | 'money'
  | 'multiline'
  | 'number'
  | 'phone'
  | 'password'
  | 'text'
