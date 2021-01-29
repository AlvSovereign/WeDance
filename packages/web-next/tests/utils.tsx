import React, { ReactElement, ReactNode } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { useAppTheme } from 'components/src/hooks'

const render = (ui: ReactElement, options?: any) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const theme: any = useAppTheme()

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export { render }
