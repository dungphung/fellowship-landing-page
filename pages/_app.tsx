import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  yellow_primary: {
    1: '#FFC700',
  },
  textColor: '#ababab',
}

const breakpoints = {
  base: 0,
  '320': '20em',
  '375': '23.4375em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  '2lg': '64em',
  '3lg': '68.75em',
  xl: '80em',
  xxl: '90.25em',
  '2xl': '96em',
}

const theme = extendTheme({ colors, breakpoints })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
