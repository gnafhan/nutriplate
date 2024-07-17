import Head from 'next/head'

import Image from 'next/image'
import Navbar from './../../components/navbar'
import Footer from './../../components/footer'
import Container from './../../components/container'
import { tokenMiddleware } from './../../util/tokenMiddleware'
import useTokenMiddleware from '../../hooks/useTokenMiddleware'

const Home = () => {
  useTokenMiddleware()
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Resep Opor Tekur' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <section className='container relative flex w-full min-h-screen '>
        {/* <Image
          src={'/img/ombak_kiri.svg'}
          width={1920}
          height={885}
          className='absolute bottom-0 left-0'
        /> */}
        <Container className='z-10'>
          <div className='max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0'>
            <div className='max-w-[770px] mx-auto text-center'>
              <a
                href='/resep-makanan'
                className='inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1'
              >
                Resep
              </a>
              <h1 className='mb-5 text-2xl font-bold sm:text-4xl lg:text-custom-2 text-dark'>
                Jus Semangka
              </h1>
            </div>
            <div className='flex items-center justify-center w-full'>
              {/* <img
              src='/img/DiabetesBlog.jpg'
              alt='blog'
              className='mt-10 h-[400px] object-cover rounded-md mb-11'
            /> */}
            </div>
            <div className='max-w-[770px] mx-auto'>
              <div>
                <p className='mb-5 text-2xl font-semibold'>Bahan</p>
                <ol className='list-decimal ms-5'>
                  <li>Semangka (¼ potong besar)</li>
                  <li>Air secukupnya</li>
                </ol>

                <p className='my-5 text-2xl font-semibold'>Cara pembuatan</p>
                <ol className='list-decimal ms-5'>
                  <li>
                    Kupas semangka dan potong menjadi bagian yang lebih kecil.
                  </li>
                  <li>Masukkan semangka dan air ke dalam blender.</li>
                  <li>Pindahkan jus ke dalam gelas dan siap disajikan.</li>
                </ol>
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

// export const getServerSideProps = async ({ req, res }) => {
//   return tokenMiddleware(req, res)
// }
