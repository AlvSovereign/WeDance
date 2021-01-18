import React, { FC, useContext } from 'react'
import { StyleSheet } from 'react-native'
import {
  ITheme,
  MsqThemeContext,
} from '../../../contexts/MsqThemeContext/MsqThemeContext'
import { Box, Text } from '../../../..'

interface DividerWithTextProps {
  text: string
}

const DividerWithText: FC<DividerWithTextProps> = ({ text }) => {
  const theme = useContext(MsqThemeContext)
  const styles = generateStyles(theme)

  return (
    <Box orientation="row">
      <Box align="center" style={styles.hr} />
      <Text color="lightGrey" style={styles.text} variant="body1">
        {text}
      </Text>
      <Box align="center" style={styles.hr} />
    </Box>
  )
}

export default DividerWithText

const generateStyles = (theme: ITheme) => {
  const { LINEAR_XS, LINEAR_LG, LIGHTGREY_500 } = theme
  return StyleSheet.create({
    hr: {
      backgroundColor: LIGHTGREY_500,
      flex: 1,
      height: StyleSheet.hairlineWidth,
      marginVertical: LINEAR_LG,
    },
    text: {
      alignSelf: 'center',
      marginHorizontal: LINEAR_XS,
    },
  })
}
