import { useResponsive } from '.'
import { color, spacing } from '../..'
import { TColor } from '../contexts/MsqThemeContext/color'
import { TSpacing } from '../contexts/MsqThemeContext/spacing'
import Text, { heading, TText } from '../contexts/MsqThemeContext/text'

export interface ITheme extends TText, TColor, TSpacing {}

const useAppTheme = () => {
  const windowSize = useResponsive()
  const responsiveHeaders = {
    ...heading[windowSize === 'lg' ? 'desktop' : 'mobile'],
  }
  const defaultTheme: ITheme = {
    ...color,
    ...spacing,
    ...Text,
    ...responsiveHeaders,
  }

  return defaultTheme
}

export default useAppTheme
