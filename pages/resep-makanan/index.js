import Head from 'next/head'
import Navbar from '../../components/navbar'

import Footer from '../../components/footer'
import Image from 'next/image'
import { CardResep } from '../../components/CardResep'
import { tokenMiddleware } from '../../util/tokenMiddleware'
import useTokenMiddleware from '../../hooks/useTokenMiddleware'

const Home = () => {
  useTokenMiddleware()
    const data = [
        {
        nama: "Resep Normal",
        link: '/resep-makanan/normal',
        deskripsi: "resep makanan normal"
        },
        {
        nama: "Resep Diabetes",
        link: '/resep-makanan/diabetes',
        deskripsi: "resep makanan diabetes"
        },
        {
        nama: "Resep Atlet",
        link: '/resep-makanan/atlet',
        deskripsi: "resep makanan atlet"
        },
        {
        nama: "Resep Obesitas",
        link: '/resep-makanan/obesitas',
        deskripsi: "resep makanan obesitas"
        },
]
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
          className='absolute bottom-0 right-0 z-[-1]'
        />
        <Image
          src={'/img/shape_pinggir.svg'}
          width={427}
          height={364}
          className='absolute bottom-0 left-0 scale-x-[-1] z-[-1]'
        />
        <div className='flex justify-center w-full h-full'>
          <div className='flex justify-center w-full max-w-screen-lg gap-y-8 '>
            <div className='grid items-center justify-center w-full h-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 place-items-center'>
            {data.map((item)=>{
                return(
               <CardResep nama={item.nama} link={item.link} deskripsi={item.deskripsi} />     
                )
            })}
            </div>
          </div>
        </div>
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