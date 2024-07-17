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
                Tumis Daun Singkong
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
                  <li>Daun singkong 100 gram</li>
                  <li>Cabai merah keriting 10 gram (2 buah)</li>
                  <li>Bawang putih 6 gram (1 siung)</li>
                  <li>Bawang merah 6 gram (1 siung)</li>
                  <li>Lada 2 gram (¼ sdt)</li>
                  <li>Garam 2 gram (½ sdt) atau secukupnya</li>
                  <li>Gula 2 gram (½ sdt) atau secukupnya</li>
                  <li>Minyak goreng 7 gram (½ sdm)</li>
                  <li>Air 500 mL (5 gelas)</li>
                </ol>

                <p className='my-5 text-2xl font-semibold'>Cara pembuatan</p>
                <ol className='list-decimal ms-5'>
                  <li>
                    Cuci bersih daun singkong dan rebus hingga empuk, lalu
                    tiriskan atau peras.
                  </li>
                  <li>
                    Iris tipis bawang merah dan bawang putih, serta iris serong
                    cabai merah keriting.
                  </li>
                  <li>
                    Tumis irisan bawang merah, bawang putih, dan cabai merah
                    keriting dengan sedikit minyak hingga harum.
                  </li>
                  <li>
                    Masukkan daun singkong yang telah direbus dan tambahkan
                    garam, gula, dan lada. Aduk rata hingga matang.
                  </li>
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
