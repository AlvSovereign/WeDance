// UI Components
// Atoms
import Box from './src/ui/atom/Box/Box'
import Button from './src/ui/atom/Button/Button'
import DividerWithText from './src/ui/atom/DividerWithText/DividerWithText'
import Input from './src/ui/atom/Input/Input'
import Page from './src/ui/atom/Page/Page'
import ProtectedRoute from './src/ui/atom/ProtectedRoute/ProtectedRoute'
import Text from './src/ui/atom/Text/Text'

// Molecules
import Navigation from './src/ui/molecules/Navigation/Navigation'

// Screens
import Discovery from './src/ui/organisms/screens/Discovery/Discovery'
import SignIn from './src/ui/organisms/screens/SignIn/SignIn'

// Theming
import color from './src/contexts/MsqThemeContext/color'
import spacing from './src/contexts/MsqThemeContext/spacing'
import { text as TextTheme } from './src/contexts/MsqThemeContext/text'
import ThemeContext from './src/contexts/MsqThemeContext/MsqThemeContext'

// GraphQL
import typeDefs from './src/graphql/schema.graphql'

import { GET_ME } from './src/graphql/queries'

// i18n
import i18n from './src/i18n'

export {
  color,
  Box,
  Button,
  Discovery,
  DividerWithText,
  i18n,
  Input,
  Navigation,
  Page,
  ProtectedRoute,
  SignIn,
  spacing,
  TextTheme,
  Text,
  ThemeContext,
  typeDefs,
  GET_ME,
}
