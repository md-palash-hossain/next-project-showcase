import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    
  <Header/>
  <Component {...pageProps} />
  <Footer/>
    </>
  )
}
