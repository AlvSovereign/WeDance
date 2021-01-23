import React, { FC, ReactNode } from 'react'
import { useResponsive } from '../../hooks'
import color, { TColor } from './color'
import spacing, { TSpacing } from './spacing'
import { heading, Text, TText } from './text'

interface ThemeContextProps {
  children: ReactNode
}

export interface ITheme extends TText, TColor, TSpacing {}

export const MsqThemeContext = React.createContext({} as ITheme)

const ThemeContext: FC<ThemeContextProps> = ({ children }) => {
  const windowSize = useResponsive()
  const responsiveHeaders = {
    ...heading[windowSize === 'lg' ? 'desktop' : 'mobile'],
  }
  const defaultTheme = {
    ...color,
    ...spacing,
    ...Text,
    ...responsiveHeaders,
  }

  return (
    <MsqThemeContext.Provider value={defaultTheme}>
      {children}
    </MsqThemeContext.Provider>
  )
}

export default ThemeContext
