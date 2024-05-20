import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'

import { benefitOne, benefitTwo } from '../components/data'
import Video from '../components/video'
import Benefits from '../components/benefits'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Faq from '../components/faq'
import PopupWidget from '../components/popupWidget'
import Hero2 from '../components/Hero2'
import Manfaat from '../components/Manfaat'
import ProdukKami from '../components/ProdukKami'
import ProgramDiet from '../components/ProgramDiet'
import Pembelian from '../components/Pembelian'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <section className='relative flex w-full min-h-screen'>
        <Image
          src={'/img/shape_pinggir.svg'}
          width={427}
          height={364}
          className='absolute bottom-0 right-0'
        />
        <Image
          src={'/img/shape_pinggir.svg'}
          width={427}
          height={364}
          className='absolute bottom-0 left-0 scale-x-[-1]'
        />
      </section>
      <Footer />
      {/* <PopupWidget /> */}
    </>
  )
}

export default Home
