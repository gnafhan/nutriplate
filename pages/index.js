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


const Home = () => {
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero2 />
      <Manfaat />
      {/* <ProdukKami /> */}
      <ProgramDiet />
      <Pembelian />
      <Footer />
      <PopupWidget />
    </>
  )
}

export default Home
