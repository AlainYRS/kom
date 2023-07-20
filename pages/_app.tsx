import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext from '../complements/components/GlobalContextComp/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Komander({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </>
  )
}