'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { CSSReset } from '../styles/reset'
import { GlobalAppStyles } from '../styles/global'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <GlobalAppStyles />
    {children}
  </ThemeProvider>
)

export default Providers
