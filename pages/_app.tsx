import type { AppProps } from 'next/app'
// import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
