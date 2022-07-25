import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { TailwindMobileProvider, Block, Button } from 'tailwind-mobile/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
