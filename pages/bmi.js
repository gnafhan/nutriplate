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
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { tokenMiddleware } from '../util/tokenMiddleware'

const Home = () => {
  const [data, setData] = useState({})
  const [result, setResult] = useState({})
  const router = useRouter()
  const { query } = router
  console.log(query === null)
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  

  useEffect(() => {
    if (query && query.berat && query.tinggi && query.usia && query.gender) {
      const bmi = query.berat / ((query.tinggi*0.01) * (query.tinggi*0.01))
      const kategori =
        bmi < 18.5
          ? 'Kurus'
          : bmi < 22.99
          ? 'Normal'
          : bmi < 24.99
          ? 'Gemuk'
          : 'Obesitas'
      const imageSrc = kategori == 'Kurus' && query.gender == 'man' ? '/img/bmi/underweight_man.svg' : kategori == 'Kurus' && query.gender == 'woman' ? '/img/bmi/underweight_woman.svg': kategori == 'Normal' && query.gender == 'woman'? '/img/bmi/good_woman.svg': kategori == 'Normal' && query.gender == 'man'? '/img/bmi/good_man.svg' : (kategori == 'Gemuk' || kategori == 'Obesitas') && query.gender == 'man' ? '/img/bmi/overweight_man.svg': '/img/bmi/overweight_woman.svg'
      setResult({
        bmi,
        kategori,
        imageSrc
      })
    }
  }, [query])

  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <section className='container relative flex w-full min-h-screen '>
        <Container className='z-10'>
          <div className='flex gap-5 '>
            <form className='relative flex flex-col gap-5 p-8 bg-white rounded-lg lg:w-7/12 drop-shadow-xl'>
              {!isEmpty(query) ?<Link href={"/bmi"} className='absolute flex font-semibold cursor-pointer color-primary text-primary'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              <p>Back</p>
              </Link>: <></>}
              <div className='flex flex-col justify-center w-full text-center'>
                <h1 className='text-xl font-bold text-primary'>
                  {!isEmpty(query) ? 'Hasil BMI' : 'Kalkulator BMI'}
                </h1>
                <h2 className='text-primary'>
                  by Nutri<span className='text-secondary'>Plate</span>
                </h2>
              </div>
              {!isEmpty(query) ? (
                <>
                  <div className='flex justify-center w-full py-3 text-center rounded-full shadow-md drop-shadow-lg'>
                    <p className='font-semibold text-primary'>
                      {result.kategori}
                    </p>
                  </div>
                  <div className='flex justify-center text-lg'>
                    <p className='text-primary'>
                      BMI Anda adalah {Math.round(result.bmi)}
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <p className='text-primary'>
                    Body Mass Index (BMI) adalah salah satu cara untuk mengukur
                    ukuran tubuh. Alat ini berfungsi untuk memperkirakan lemak
                    tubuh dan melakukan skrining terhadap obesitas dan risiko
                    kesehatan.
                  </p>
                </div>
              )}
              {!isEmpty(query)? <>
              <div className="flex justify-center w-full ">
                <Image src={result.imageSrc} width={300} height={300} />
              </div>
              </>:
              <>
                <div className='bg-[#7DB0FF] rounded-lg p-5 flex flex-col w-full'>
                  <div className='text-white'>
                    <label className='font-bold'>Jenis Kelamin</label>
                    <div class='flex items-center mb-4 mt-3'>
                      <input
                        required
                        id='default-radio-1'
                        type='radio'
                        value='man'
                        name='gender'
                        class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        for='default-radio-1'
                        class='ms-2 text-sm font-medium text-white dark:text-gray-300'
                      >
                        Pria
                      </label>
                      <input
                        required
                        defaultChecked
                        id='default-radio-2'
                        type='radio'
                        value='woman'
                        name='gender'
                        class='w-4 h-4 ms-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        for='default-radio-2'
                        class='ms-2 text-sm font-medium text-white dark:text-gray-300'
                      >
                        Wanita
                      </label>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 text-white'>
                    <label for='berat' className='font-bold '>
                      Berat Badan (kg)
                    </label>
                    <input
                      required
                      name='berat'
                      id='berat'
                      onChange={e =>
                        setData({ ...data, weight: e.target.value })
                      }
                      className='px-4 py-2 text-black bg-white rounded-full lg:w-1/2 drop-shadow-xl'
                      type='number'
                      step={0.01}
                    />
                  </div>
                  <div className='flex flex-col gap-4 mt-3 text-white'>
                    <label for='berat' className='font-bold '>
                      Usia (tahun)
                    </label>
                    <input
                      required
                      name='usia'
                      id='usia'
                      onChange={e => setData({ ...data, age: e.target.value })}
                      className='px-4 py-2 text-black bg-white rounded-full lg:w-1/2 drop-shadow-xl'
                      type='number'
                    />
                  </div>
                  <div className='flex flex-col gap-4 mt-3 text-white'>
                    <label for='berat' className='font-bold '>
                      Tinggi Badan (kg)
                    </label>
                    <input
                      required
                      name='tinggi'
                      onChange={e =>
                        setData({ ...data, height: e.target.value })
                      }
                      id='tinggi'
                      className='px-4 py-2 text-black bg-white rounded-full lg:w-1/2 drop-shadow-xl'
                      type='number'
                      step={0.01}
                    />
                  </div>
                </div>
                <div className='flex justify-center w-full gap-5'>
                  <button
                    type='submit'
                    className='px-5 py-3 font-semibold text-white rounded-md bg-primary'
                  >
                    Hitung BMI
                  </button>
                  <button className='px-5 py-3 font-semibold bg-white border-2 border-solid rounded text-primary border-primary sm'>
                    Reset
                  </button>
                </div>
              </>
              }
            </form>
          </div>
        </Container>

        <Image
          src={'/img/ombak_bmi.svg'}
          width={1920}
          height={885}
          className='absolute bottom-0 left-0'
        />
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