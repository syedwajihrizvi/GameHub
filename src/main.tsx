import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import theme from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  </React.StrictMode>,
)
