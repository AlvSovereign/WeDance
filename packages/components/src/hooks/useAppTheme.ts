import { useResponsive } from '.'
import buttonStyles, { TButtonStyles } from '../theme/button'
import color, { TColor } from '../theme/color'
import spacing, { TSpacing } from '../theme/spacing'
import typography, { headings, TText } from '../theme/text'

export interface ITheme extends TText, TColor, TSpacing, TButtonStyles {}

const useAppTheme = () => {
  const windowSize = useResponsive()
  const responsiveHeaders = {
    ...headings[windowSize === 'lg' ? 'desktop' : 'mobile'],
  }
  const defaultTheme: ITheme = {
    ...color,
    ...spacing,
    ...typography,
    ...responsiveHeaders,
    ...buttonStyles,
  }

  return defaultTheme
}

export default useAppTheme
