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
        <meta
          name='description'
          content='Manajemen Diet Diabetes Melitus, Apa Itu? | Diabetes melitus (DM) dapat didefinisikan sebagai penyakit
                  metabolik kronis yang ditandai dengan peningkatan kadar
                  glukosa darah (gula darah). Berdasarkan Riset Kesehatan Dasar
                  (Riskesdas) tahun 2018, di Indonesia terdapat 1.017.290 orang
                  yang menderita diabetes melitus berdasarkan diagnosis dokter.
                  Tahukah kamu bahwa faktor gaya hidup, seperti pola makan
                  menjadi dasar pengelolaan diabetes melitus tipe 2, lho! Bagi
                  yang telah didiagnosis mengalami diabetes melitus, kadar
                  insulin dalam darah harus dikontrol. Lalu bagaimana manajemen
                  diet untuk diabetes melitus agar tidak menyebabkan kondisi
                  yang tidak diinginkan?'
        />
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
                href='/info-kesehatan'
                className='inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1'
              >
                Atlet
              </a>
              <h1 className='mb-5 text-2xl font-bold sm:text-4xl lg:text-custom-2 text-dark'>
                KARBOHIDRAT UNTUK PERFORMA ATLET
              </h1>
            </div>
            <div className='flex items-center justify-center w-full'>
              <img
                src='/img/atletMakan.jpg'
                alt='blog'
                className='mt-10 h-[400px] object-cover rounded-md mb-11'
              />
            </div>
            <div className='max-w-[770px] mx-auto'>
              <div>
                <p className='mb-5 font-semibold text-body'>
                  Hi NutriPeeps, Are You Ready To Have An Atlet Perfoma ? 🤩
                </p>
                <p className='mb-5 text-2xl font-semibold'>Karbohidrat</p>
                <p className='mb-5 '>
                  Karbohidrat merupakan sumber energi utama. Bentuk karbohidrat
                  dapat ditemukan di darah (glukosa) ataupun disimpan dalam otot
                  dan hati (dalam bentuk glikogen). Produksi energi ketika
                  melakukan olahraga digunakan lebih dari 65% saat VO2max.
                </p>
                <p className='mb-5 text-body'>
                  Jenis karbohidrat yang dianjurkan adalah karbohidrat yang
                  mengandung serat (biji-bijian, polong-polongan,
                  kacang-kacangan, buah- buahan, dan sayur mayur). Sumber
                  karbohidrat yang sudah diolah (highly processed foods) kurang
                  dianjurkan karena mengandung lebih banyak gula, lemak,
                  dan/atau tambahan garam.
                </p>
                <p className='text-body'>
                  Glukosa dan/atau sukrosa saat pertandingan berlangsung, dengan
                  ketentuan:
                </p>
                <ul className='mb-5'>
                  <li className='list-disc'>
                    Fruktosa terutama dari buah-buahan setelah latihan baik
                    untuk mengembalikan cadangan glikogen.
                  </li>
                  <li className='list-disc'>
                    Karbohidrat Indeks Glikemik (IG) tinggi setelah latihan dan
                    karbohidrat Indeks Glikemik (IG) rendah sebelum latihan.
                  </li>
                </ul>
                <p className='mb-5 text-2xl font-semibold'>
                  Konsumsi indeks glikemik yang rendah 2 jam sebelum
                  pertandingan
                </p>
                <p className='mb-5 text-body'>
                  Indeks Glikemik (IG) merupakan tingkatan bahan makanan menurut
                  efeknya terhadap kadar glukosa darah. Semakin tinggi indeks
                  glikemik, semakin cepat bahan makanan tersebut dapat
                  meningkatkan kadar gula darah. Sebaliknya, semakin rendah
                  indeks glikemik, semakin lama bahan makanan tersebut dapat
                  meningkatkan kadar gula darah.
                </p>
                <p className='mb-5 text-body'>
                  Untuk mempersiapkan atlet menuju hari pertandingan, atlet
                  perlu melakukan program carbohydrate-loading (CL), CL
                  merupakan strategi untuk memaksimalkan cadangan glikogen. CL
                  ditujukan untuk. membentuk cadangan glikogen, mencegah
                  terjadinya hipoglikemia (rendahnya glukosa dalam darah), serta
                  dapat menenangkan lambung. Peningkatan cadangan karbohidrat
                  (terutama glikogen otot), dapat meningkatkan performa atlet
                  dari segi intensitas dan durasi
                </p>
                <p className='mb-5 text-2xl font-semibold'>
                  Konsumsi karbohidrat selama 1-3 hari sebelum pertandingan
                  dengan 8-10 gram/Kg/BB
                </p>
                <div className='mb-5 text-body '>
                  <span className='mb-5 font-semibold text-md'>
                    Contoh makanan dengan IG rendah, sedang, dan tinggi !
                  </span>
                  <br />
                  <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400'>
                      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                          <th scope='col' colSpan={2}  className='px-6 py-3 text-center border'>
                            GI RENDAH (0-55)
                          </th>
                          {/* <th scope='col' className='px-6 py-3'></th> */}
                          <th scope='col'colSpan={2} className='px-6 py-3 text-center border'>
                            GI SEDANG (56-69)
                          </th>
                          {/* <th scope='col' className='px-6 py-3 text-center border'></th> */}
                          <th scope='col'colSpan={2} className='px-6 py-3 text-center border'>
                            GI TINGGI (70-100)
                          </th>
                          {/* <th scope='col' className='px-6 py-3 text-center border'></th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Yogurt
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            14
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Mangga
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            56
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Semangka
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            72
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Brokoli
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            15
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Pisang
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            57
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Nasi Putih
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            72
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Tomat
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            15
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Kiwi
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            57
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Kentang
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            75
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Kacang
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            21
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Es krim
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            61
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Waffel
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            80
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Susu Full Cream
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            27
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Madu
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            65
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Glukosa
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            100
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Sereal Gandum
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            31
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Nanas
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            66
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Roti Tawar
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            100
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Susu Skim
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            32
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Donat
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            67
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Pancake
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            100
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Apel
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            38
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Cola
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            67
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Sport Drink
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            95
                          </td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Jeruk
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            44
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Roti Gandum
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            68
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'></td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'></td>
                        </tr>
                        <tr className='border odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Jagung
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            54
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            Spaghetti
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'>
                            68
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'></td>
                          <td className='px-6 py-4 font-medium text-gray-900 border whitespace-nowrap dark:text-white'></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='border-l-[3px] border-gray-3 bg-gray py-5 px-8 mt-7.5'>
                  <p className='italic font-medium text-dark'>
                    Lets Have Better Choices Peeps ! <br />
                  </p>
                </div>

                <p className='mt-12 text-center text-md'>
                  Sumber : Buku Panduan Pendamping Gizi Atlet Kemenkes
                </p>
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
