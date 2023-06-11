import Image from 'next/image'
import React from 'react'
import { MdDone } from 'react-icons/md'
import Section_Img from '../../../assets/Section_Img.png'
import Article1 from '../../../assets/Article-1.png'
import Article2 from '../../../assets/Article-2.png'
import Article3 from '../../../assets/Article-3.png'
import { SiAltiumdesigner } from 'react-icons/si'
import { BiCustomize } from 'react-icons/bi'

const ArticlesSecond = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 md:px-0 mt-10'>
    
      <h1 className='text-center text-5xl  font-bold mb-10 mt-20 leading-relaxed'>
        Speciale aanbiedingen en <br /> onze professionele ondersteuning
      </h1>
      <div className='flex flex-col-reverse md:flex-row gap-20 justify-between items-start pb-32'>
        <div data-aos='fade-right' className='grow'>
          <h3 className='text-3xl font-semibold mb-3'>Wij bieden</h3>
          <p className='leading-loose text-justify'>
          agogen en begeleiders die gespecialiseerd zijn
            in het ondersteunen en begeleiden van mensen met speciale behoeften.
            Ze hebben ervaring in het werken met diverse doelgroepen, zoals
            mensen met een verstandelijke beperking, psychische aandoeningen of
            gedragsproblemen. Ze zetten zich in voor het creëren van een veilige
            en ondersteunende omgeving voor individuen waarbij persoonlijke
            groei en ontwikkeling centraal staan.
          </p>
        </div>
        <div data-aos='fade-left' className=' max-w-lg grow-0'>
          <h3 className='text-3xl font-semibold mb-3'>Als u behoefte</h3>
          <p className='leading-loose text-justify'>
            heeft aan toezichthouders en beveiligingspersoneel,
            kunt u ook op ons rekenen. Onze professionals zijn goed getraind in
            het handhaven van de veiligheid en het waarborgen van de integriteit
            binnen zorginstellingen. Ze zijn bekend met protocollen en
            procedures op het gebied van veiligheid en werken nauw samen met het
            zorgteam om een veilige omgeving te waarborgen voor zowel
            medewerkers als patiënten.
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default ArticlesSecond
