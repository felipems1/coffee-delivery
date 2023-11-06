import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { OrderContextProvider } from './contexts/OrderContext'
import { ProductsContextProvider } from './contexts/ProductsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ToastContainer autoClose={1000} />
        <ProductsContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
