import React from 'react'
import { BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs'

const HowItWork = () => {
  return (
    <div className='mt-28 max-w-6xl mx-auto'>
    
      <h2 className=' text-center text-3xl my-5 font-semibold '>
        About ons
      </h2>
  
      {/* Dextop */}
  
      <div className='mt-18'>
        <p className='text-center  text-lg'>
          Bij flex bureau zekerheid begrijpen we dat de zorgsector divers is en
          verschillende expertise vereist. Daarom hebben we ons netwerk
          zorgvuldig opgebouwd en hebben we professionals geselecteerd die
          bekwaam en ervaren zijn in hun vakgebied. Of het nu gaat om
          ziekenhuizen, verpleeghuizen, thuiszorgorganisaties,
          gehandicaptenzorginstellingen of andere zorggerelateerde organisaties,
          wij staan klaar om aan uw personeelsbehoeften te voldoen.
        </p>
      </div>

      {/* Mobile */}
      <div className='my-10 mb-20 flex flex-col gap-10 md:hidden'>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            1
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>

        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            2
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>

        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            3
          </span>
          <h3 className='mt-4 mb-2'>Register Account</h3>
          <p>First, you need to make an account</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
