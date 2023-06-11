import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/LOGO.png'

const NavBar = () => {
  return (
    <div className='bg-slate-200'>
      <nav className='flex items-center  justify-between max-w-6xl mx-auto '>
        <Link href='/'>
          <Image className='py-4' src={Logo} alt='logo' height={60} />
        </Link>
        <Link href='/contact-us'>
          <button className='bg-blue-700 hover:bg-blue-400 duration-300   rounded-lg text-gray-50 px-5 py-2 mr-5'>
            Contact ons
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default NavBar