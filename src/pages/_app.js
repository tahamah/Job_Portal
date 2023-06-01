import { useEffect } from 'react'
import Layout from '@/components/layouts'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..

export default function App({ Component, pageProps }) {
useEffect(() => {
  AOS.init({
    duration: 800, 
    offset: 100, 

  })
}, [])
  
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
