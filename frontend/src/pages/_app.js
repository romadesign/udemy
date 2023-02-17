import '@/styles/globals.css'
import Navbar from '@/components/Navbar/Navbar'
import {CartItemsProvider} from '@/context/cartItemsContext'

export default function App ({ Component, pageProps }) {

  return (
    <CartItemsProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartItemsProvider>
  )
}
