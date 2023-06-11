import React from 'react'
import { BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs'

const HowItWork = () => {
  return (
    <div className='mt-28 max-w-6xl mx-auto'>
      {/* <p className='text-gray-500 font-semibold text-center'>
        {' '}
        Vertrouwd door{`'`}s werelds toonaangevende bedrijven
      </p> */}
      {/* <ul className='md:flex text-center leading-relaxed justify-center items-center gap-10 mt-10 md:mb-28 mb-10 text-3xl text-gray-500'>
        <li>coinbase</li>
        <li className='italic'>shopify</li>
        <li className='font-bold'>attentive</li>
        <li className='italic'>webflow</li>
        <li className='font-bold'>strip</li>
        <li>upwork</li>
      </ul> */}
      <h2 className=' text-center text-3xl my-5 font-semibold '>
        Hoe het werkt
      </h2>
      <p className=' text-gray-500 text-center px-5'>
        Ontdek het volgende. Deze stappen helpen je om gemakkelijk een baan te
        vinden{' '}
      </p>
      {/* Dextop */}
      {/* <div className='my-10 mb-20 hidden md:flex items-center justify-around'>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            1
          </span>
          <h3 className='mt-4 mb-2'>Account Registreren</h3>
          <p>Eerst moet u een account aanmaken</p>
        </div>
        <div className='text-4xl text-green-700 cursor-pointer hover:translate-x-2 duration-300'>
          <BsArrowRightCircleFill />
        </div>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            2
          </span>
          <h3 className='mt-4 mb-2'>Account Registreren</h3>
          <p>Eerst moet u een account aanmaken</p>
        </div>
        <div className='text-4xl text-green-700 cursor-pointer hover:translate-x-2 duration-300'>
          <BsArrowRightCircleFill />
        </div>
        <div className='text-center'>
          <span className='bg-blue-500 text-gray-50 text-5xl py-1.5 px-5 rounded-full'>
            3
          </span>
          <h3 className='mt-4 mb-2'>Account Registreren</h3>
          <p>Eerst moet u een account aanmaken</p>
        </div>
      </div> */}
      <div className='mt-10'>
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
