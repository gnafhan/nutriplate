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
          <h1 className='mt-6 mb-4 text-3xl font-semibold text-black'>
            Berita dan Jurnal Kesehatan
          </h1>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            <a href='/blog/manajemen-diabetes' className='relative block h-64 group sm:h-80 lg:h-96'>
              <span className='absolute inset-0 border-2 border-black border-dashed rounded-md'></span>

              <div className='relative flex items-end h-full transition-transform transform bg-white border-2 border-black rounded-md border-bottom-4 border-right-4 group-hover:-translate-x-2 group-hover:-translate-y-2'>
                <div className='p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
                  <img src='/img/DiabetesBlog.jpg' className='hidden object-cover border border-black rounded-md md:block size-1 sm:size-6' />

                  <h2 className='mt-4 text-xl font-medium sm:text-2xl'>
                    Manajemen Diet Diabetes Melitus, Apa Itu?
                  </h2>
                </div>

                <div className='absolute p-4 transition-opacity opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
                  <h3 className='mt-4 text-xl font-medium sm:text-2xl'>
                    Manajemen Diet Diabetes Melitus, Apa Itu?
                  </h3>

                  <p className='mt-4 text-sm sm:text-base'>
                  Pada artikel kali ini kita akan membahas mengenai manajemen diet pada diabetes melitus, yuk simak penjelasan berikut ini! 
                  </p>

                  <p className='mt-8 font-bold'>Baca Selengkapnya!</p>
                </div>
              </div>
            </a>
            <a href='/blog/karbohidrat-untuk-atlet' className='relative block h-64 group sm:h-80 lg:h-96'>
              <span className='absolute inset-0 border-2 border-black border-dashed rounded-md'></span>

              <div className='relative flex items-end h-full transition-transform transform bg-white border-2 border-black rounded-md border-bottom-4 border-right-4 group-hover:-translate-x-2 group-hover:-translate-y-2'>
                <div className='p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
                  <img src='/img/atletMakan.jpg' className='hidden object-cover border border-black rounded-md md:block size-1 sm:size-6' />

                  <h2 className='mt-4 text-xl font-medium sm:text-2xl'>
                    Karbohidrat untuk Performa Atlet
                  </h2>
                </div>

                <div className='absolute p-4 transition-opacity opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
                  <h3 className='mt-4 text-xl font-medium sm:text-2xl'>
                    Karbohidrat untuk Performa Atlet
                  </h3>

                  <p className='mt-4 text-sm sm:text-base'>
                  Pada artikel kali ini kita akan membahas mengenai kaitannya dengan mikronutrien yang berperan pada atlet
                  </p>

                  <p className='mt-8 font-bold'>Baca Selengkapnya!</p>
                </div>
              </div>
            </a>
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
