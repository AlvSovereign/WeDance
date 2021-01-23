import React, { FC, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  ITheme,
  MsqThemeContext,
} from '../../../contexts/MsqThemeContext/MsqThemeContext'
import { Text } from '../../../..'

interface DividerWithTextProps {
  text: string
}

const DividerWithText: FC<DividerWithTextProps> = ({ text }) => {
  const theme = useContext(MsqThemeContext)
  const styles = generateStyles(theme)

  return (
    <View style={styles.container}>
      <View style={styles.hr} />
      <Text color="lightGrey" style={styles.text} variant="body1">
        {text}
      </Text>
      <View style={styles.hr} />
    </View>
  )
}

export default DividerWithText

const generateStyles = (theme: ITheme) => {
  const { LINEAR_XS, LINEAR_LG, LIGHTGREY_500 } = theme
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
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
