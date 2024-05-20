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
import Container from '../components/container'
import { tokenMiddleware } from '../util/tokenMiddleware'

const Home = () => {
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <section className='container relative flex w-full min-h-screen '>
        <Image
          src={'/img/ombak_kiri.svg'}
          width={1920}
          height={885}
          className='absolute bottom-0 left-0'
        />
        <Container className='z-10'>
          <h1 className='mt-6 mb-4 text-3xl font-semibold text-primary'>
            Berita dan Jurnal Kesehatan
          </h1>
          <div className='grid grid-cols-3 gap-5'>
            <div className="px-6 py-16 text-white rounded-lg bg-[url('/img/bg-makanan.png')] bg-cover">
              <div className=''>
                <h1 className='text-lg font-medium '>
                  Makanan super, keserbagunaannya untuk kesehatan kulit
                </h1>
                <p className='text-sm mt-14'>1 JAM YANG LALU</p>
              </div>
            </div>
            <div className="px-6 py-16 text-white rounded-lg bg-[url('/img/bg-makanan.png')] bg-cover">
              <div className=''>
                <h1 className='text-lg font-medium '>
                  Makanan super, keserbagunaannya untuk kesehatan kulit
                </h1>
                <p className='text-sm mt-14'>1 JAM YANG LALU</p>
              </div>
            </div>
            <div className="px-6 py-16 text-white rounded-lg bg-[url('/img/bg-makanan.png')] bg-cover">
              <div className=''>
                <h1 className='text-lg font-medium '>
                  Makanan super, keserbagunaannya untuk kesehatan kulit
                </h1>
                <p className='text-sm mt-14'>1 JAM YANG LALU</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
      {/* <PopupWidget /> */}
    </>
  )
}

export default Home

export const getServerSideProps = async ({ req, res }) => {
  return tokenMiddleware(req, res)
}