import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Global.css'
import type {AppProps}from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps){
   return (
   <>
   <Head>
      <meta name="vewport"
            content="widrh=device-width, initial-scale=1"/>
   </Head>
   <Component {...pageProps}  />
   </>
    )
  }
export default MyApp