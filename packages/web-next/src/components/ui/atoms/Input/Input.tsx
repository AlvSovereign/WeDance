import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { ITheme } from 'components/src/hooks/useAppTheme'
import { Text } from '../../..'

interface InputProps {
  className: string
  invalidText?: ReactNode
  isInvalid?: boolean
  label?: string
  name: string
  onChangeText: () => void
  placeholder?: string
  type: 'email' | 'text'
  rest: any
}

const Input: FC<InputProps> = ({
  className,
  invalidText,
  isInvalid,
  label,
  name,
  onChangeText,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <div className={className}>
      {label ? (
        <Text
          component="label"
          color="gray"
          htmlFor={name}
          variant="inputLabel"
        >
          {label}
        </Text>
      ) : null}
      <div className="inputContainer">
        <input
          {...rest}
          id={name}
          onChange={onChangeText}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {isInvalid && invalidText && typeof invalidText === 'string' ? (
        <Text component="p" color="error" variant="inputError">
          {invalidText}
        </Text>
      ) : (
        invalidText
      )}
    </div>
  )
}

const StyledInput = styled((props: any) => <Input {...props} />)`
  ${({ isInvalid, theme }: { isInvalid: boolean; theme: ITheme }) => {
    const {
      ERROR,
      inputText,
      LINEAR_XXS,
      LINEAR_XS,
      LINEAR_SM,
      LINEAR_MD,
      LINEAR_LG,
      LINEAR_XL,
      LINEAR_XXL,
      RADIUS_MD,
      RED_50,
      WHITE,
    } = theme
    return {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: LINEAR_LG,
      width: '100%',
      label: {
        marginBottom: LINEAR_XXS,
      },
      '.inputContainer': {
        display: 'flex',
        marginBottom: LINEAR_XS,
      },
      input: {
        ...inputText,
        backgroundColor: isInvalid ? RED_50 : WHITE,
        borderColor: isInvalid ? ERROR : WHITE,
        borderRadius: RADIUS_MD,
        borderWidth: isInvalid ? 1.5 : 0,
        flex: 1,
        height: 50,
        paddingLeft: LINEAR_XS,
        paddingRight: LINEAR_XS,
      },
    }
  }}
`

export default StyledInput
