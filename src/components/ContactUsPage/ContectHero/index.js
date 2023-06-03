import Image from 'next/image'
import React from 'react'
import ContactHeroImg from "../../../assets/contact_hero.jpg";

const ContactHero = () => {
  return (
    <div>
      <Image  className='h-[500px] px-5 object-cover -z-50'  src={ContactHeroImg} alt='Contact Hero Section' />
    </div>
  )
}

export default ContactHero