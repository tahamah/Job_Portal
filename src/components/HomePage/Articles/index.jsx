import Image from 'next/image'
import React from 'react'
import { MdDone } from 'react-icons/md'
import Section_Img from '../../../assets/Section_Img.png'
import Article1 from '../../../assets/Article-1.png'
import Article2 from '../../../assets/Article-2.png'
import Article3 from '../../../assets/Article-3.png'
import { SiAltiumdesigner } from 'react-icons/si'
import { BiCustomize } from 'react-icons/bi'

const Articles = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 md:px-0 mt-10'>
      <div className='md:flex gap-20 justify-between items-center'>
        <div data-aos='fade-up-right' className=' max-w-lg'>
          <h3 className='text-3xl font-semibold mb-5'>Zoeken banen</h3>
          <p className='leading-loose'>
            Bij [Naam van uw uitzendbureau] begrijpen we dat de zorgsector
            divers is en verschillende expertise vereist. Daarom hebben we ons
            netwerk zorgvuldig opgebouwd en hebben we professionals geselecteerd
            die bekwaam en ervaren zijn in hun vakgebied. Of het nu gaat om
            ziekenhuizen, verpleeghuizen, thuiszorgorganisaties,
            gehandicaptenzorginstellingen of andere zorggerelateerde
            organisaties, wij staan klaar om aan uw personeelsbehoeften te
            voldoen. Ons team van verpleegkundigen bestaat uit bekwame en
            empathische zorgprofessionals die zorgen voor hoogwaardige medische
            zorg aan patiënten. Ze hebben ervaring in verschillende medische
            specialisaties en zijn goed op de hoogte van de nieuwste
            ontwikkelingen in de gezondheidszorg.
          </p>
          {/* <div className='flex flex-col gap-5 mt-8'>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p> Bring to the table win-win survival </p>
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p>Capitalize on low hanging fruit to identify</p>
            </div>
            <div className='flex items-center gap-2'>
              <span>
                <MdDone />
              </span>
              <p>But I must explain to you how all this </p>
            </div>
          </div>
          <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button> */}
        </div>
        <div data-aos='fade-up-left'>
          <Image height={300} width={500} src={Article1} alt='' />
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-20 justify-between items-center py-32'>
        <div data-aos='fade-right' className='grow'>
          <Image height={300} width={500} src={Article2} alt='' />
        </div>
        <div data-aos='fade-left' className=' max-w-lg grow-0'>
          <h3 className='text-3xl font-semibold mb-5'>Bouw een goed cv</h3>
          <p className='leading-loose'>
            Daarnaast bieden we agogen en begeleiders die gespecialiseerd zijn
            in het ondersteunen en begeleiden van mensen met speciale behoeften.
            Ze hebben ervaring in het werken met diverse doelgroepen, zoals
            mensen met een verstandelijke beperking, psychische aandoeningen of
            gedragsproblemen. Ze zetten zich in voor het creëren van een veilige
            en ondersteunende omgeving voor individuen waarbij persoonlijke
            groei en ontwikkeling centraal staan. Als u behoefte heeft aan
            toezichthouders en beveiligingspersoneel, kunt u ook op ons rekenen.
            Onze professionals zijn goed getraind in het handhaven van de
            veiligheid en het waarborgen van de integriteit binnen
            zorginstellingen. Ze zijn bekend met protocollen en procedures op
            het gebied van veiligheid en werken nauw samen met het zorgteam om
            een veilige omgeving te waarborgen voor zowel medewerkers als
            patiënten.
          </p>
          {/* <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button> */}
        </div>
      </div>
      <div className='md:flex gap-20 justify-between items-center pb-32'>
        <div data-aos='fade-up-right' className=' max-w-lg'>
          <h3 className='text-3xl font-semibold mb-5'>
            Voer tijdens uw interview
          </h3>

          <p className='leading-loose'>
            Bij [Naam van uw uitzendbureau] hechten we grote waarde aan
            kwaliteit, betrouwbaarheid en flexibiliteit. We begrijpen dat de
            zorgsector vaak te maken heeft met onvoorziene omstandigheden en
            plotselinge personeelstekorten. Daarom zijn we er trots op dat we
            snel en efficiënt kunnen inspelen op uw behoeften en u kunnen
            voorzien van hoogwaardig personeel op korte termijn. Photo: as it is
            Contact page form er left A diben: Als u op zoek bent naar
            professioneel en gekwalificeerd personeel in de zorg, bent u bij
            [Naam van uw uitzendbureau] aan het juiste adres. Neem vandaag nog
            contact met ons op en ontdek hoe we u kunnen ondersteunen bij het
            vervullen van uw personeelsbehoeften. Samen streven we naar
            uitmuntendheid in de zorg.
          </p>
          {/* <button className='py-2 hover:-translate-y-1 px-4 bg-blue-600 hover:bg-blue-400 duration-300 text-gray-100 mt-10 rounded-md '>
            Discover More
          </button> */}
        </div>
        <div data-aos='fade-up-left'>
          <Image height={300} width={500} src={Article3} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Articles
