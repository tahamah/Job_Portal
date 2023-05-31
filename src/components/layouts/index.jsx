import React from 'react'
import Footer from '../common/Footer'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen '>
      {/* <Header />
      <Navbar /> */}

      <div className='min-h-[70vh]  bg-slate-50 '>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
