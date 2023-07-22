import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '~/styles/theme'

import '@egjs/react-flicking/dist/flicking.css'
import '@egjs/react-flicking/dist/flicking-inline.css'

import '@egjs/flicking-plugins/dist/pagination.css'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
