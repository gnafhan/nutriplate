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
        <meta name='description' content='Manajemen Diet Diabetes Melitus, Apa Itu? | Diabetes melitus (DM) dapat didefinisikan sebagai penyakit
                  metabolik kronis yang ditandai dengan peningkatan kadar
                  glukosa darah (gula darah). Berdasarkan Riset Kesehatan Dasar
                  (Riskesdas) tahun 2018, di Indonesia terdapat 1.017.290 orang
                  yang menderita diabetes melitus berdasarkan diagnosis dokter.
                  Tahukah kamu bahwa faktor gaya hidup, seperti pola makan
                  menjadi dasar pengelolaan diabetes melitus tipe 2, lho! Bagi
                  yang telah didiagnosis mengalami diabetes melitus, kadar
                  insulin dalam darah harus dikontrol. Lalu bagaimana manajemen
                  diet untuk diabetes melitus agar tidak menyebabkan kondisi
                  yang tidak diinginkan?' />
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
                Kesehatan
              </a>
              <h1 className='mb-5 text-2xl font-bold sm:text-4xl lg:text-custom-2 text-dark'>
                Manajemen Diet Diabetes Melitus, Apa Itu?
              </h1>
            </div>
            <div className="flex items-center justify-center w-full">
            <img
              src='/img/DiabetesBlog.jpg'
              alt='blog'
              className='mt-10 h-[400px] object-cover rounded-md mb-11'
            />
            </div>
            <div className='max-w-[770px] mx-auto'>
              <div>
                <p className='mb-5 text-body'>
                  Haii Nutripeepss!! Pada artikel kali ini kita akan membahas
                  mengenai manajemen diet pada diabetes melitus, yuk simak
                  penjelasan berikut ini!
                </p>
                <p className='mb-5 font-semibold text-dark'>
                  Diabetes melitus (DM) dapat didefinisikan sebagai penyakit
                  metabolik kronis yang ditandai dengan peningkatan kadar
                  glukosa darah (gula darah). Berdasarkan Riset Kesehatan Dasar
                  (Riskesdas) tahun 2018, di Indonesia terdapat 1.017.290 orang
                  yang menderita diabetes melitus berdasarkan diagnosis dokter.
                  Tahukah kamu bahwa faktor gaya hidup, seperti pola makan
                  menjadi dasar pengelolaan diabetes melitus tipe 2, lho! Bagi
                  yang telah didiagnosis mengalami diabetes melitus, kadar
                  insulin dalam darah harus dikontrol. Lalu bagaimana manajemen
                  diet untuk diabetes melitus agar tidak menyebabkan kondisi
                  yang tidak diinginkan?
                </p>
                <p className='mb-5 text-body'>
                  3 J (Jumlah, Jenis, Jadwal makan) 3J merupakan pengaturan pola
                  diet dengan memperhatikan ketepatan jumlah kalori yang
                  diperlukan, ketepatan pemilihan jenis makanan, dan ketepatan
                  jadwal makan. Tujuannya adalah untuk menjaga kadar gula darah
                  tetap stabil.
                </p>
                <p className='mb-5 text-2xl font-semibold'>Jumlah</p>
                <p className='mb-5 text-body'>
                  Jumlah dalam hal ini diartikan sebagai mengatur porsi makanan
                  yang dikonsumsi. Jumlah atau porsi makan penderita DM harus
                  dihitung dari jumlah kalori dan kebutuhan gizi makro yang
                  dibutuhkan oleh tubuh. Hal ini dimaksudkan agar kadar gula
                  darah tidak meningkat drastis setelah mengonsumsi makanan.
                  Setiap orang memiliki kebutuhan kalori yang berbeda-beda
                  tergantung jenis kelamin, usia, tinggi badan, berat badan,
                  aktivitas fisik, serta kondisi tubuh yang lain, sehingga
                  penentuan kebutuhan kalori ini bersifat sangat personal. Nah,
                  untuk menghitung kebutuhan kalori, sebaiknya didiskusikan
                  terlebih dahulu dengan ahli gizi yaa!
                </p>
                <p className='mb-5 text-2xl font-semibold'>Jenis</p>
                <p className='mb-5 text-body'>
                  Pemilihan jenis makanan sangat menentukan kadar gula darah.
                  Sebaiknya hindari makanan yang memiliki indeks glikemik yang
                  tinggi. Indeks glikemik adalah sebuah ukuran yang digunakan
                  untuk mengindikasikan seberapa cepat karbohidrat yang terdapat
                  dalam makanan dapat diubah menjadi gula. Semakin tinggi indeks
                  glikemik, maka semakin cepat karbohidrat meningkatkan glukosa
                  darah.
                </p>
                <div className='mb-5 text-body '>
                  <span className='mb-5 font-semibold text-md'>
                    Nilai indeks glikemik dapat dikelompokkan menjadi 3
                    kelompok, yaitu:
                  </span>
                  <br />

                  <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400'>
                      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                          <th scope='col' className='px-6 py-3'>
                            Klasifikasi
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Kisaran indeks glikemik
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Contoh
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                          >
                            Rendah
                          </th>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            ≤ 55
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Kebanyakan buah-buahan dan sayur-sayuran (kecuali
                            kentang, semangka), roti kasar, kacang-kacangan,
                            susu, yogurt, produk sangat rendah karbohidrat
                            (beberapa jenis keju, kacang, minyak goreng)
                          </td>
                        </tr>
                        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                          >
                            Sedang
                          </th>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            56-69
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Semua produk gandum, beras basmati, ubi jalar, gula
                            meja
                          </td>
                        </tr>
                        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                          <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                          >
                            Tinggi
                          </th>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            70-100
                          </td>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                            Jagung pipil, rice krispies, kentang panggang,
                            semangka, roti putih, sereal sarapan, nasi yang
                            paling putih
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className='mb-5 text-body'>
                  Selain itu, penderita DM juga disarankan untuk mengonsumsi
                  makanan yang beraneka ragam untuk saling melengkapi zat gizi
                  yang terkandung dalam setiap bahan makanan. Pada dasarnya,
                  tidak ada satu jenis bahan makanan yang memiliki semua zat
                  gizi sehingga pemilihan makanan yang beragam akan memperkaya
                  zat-zat gizi yang akan dikonsumsi.
                </p>
                <p className='mb-5 text-body'>
                  Bahan Makanan Penukar (BMP) merupakan daftar makanan
                  berdasarkan sumber bahan makanan yang dapat dijadikan sebagai
                  referensi pemilihan makanan. Di dalam BMP, terdapat 7 kelompok
                  bahan makanan yang dapat saling menukar (dalam ukuran rumah
                  tangga) dengan jumlah gaz gizi yang sama.
                </p>

                <div className='mb-5'>
                  <iframe
                    className='w-full h-[800px]'
                    src='/document/bmp.pdf'
                  ></iframe>
                </div>
                <p className='mb-5 text-2xl font-semibold'>Jadwal Makan</p>
                <p className='mb-5 text-body'>
                  Mengikuti jadwal makan yang tepat dan teratur dapat membantu
                  mengurangi beban kerja tubuh agar tidak terlalu berat dalam
                  mencerna makanan. Pengaturan jam-jam makan (3x makanan utama
                  dan 2x selingan dalam porsi kecil) akan melatih tubuh untuk
                  merasa “lapar” pada waktu makan yang telah ditentukan sehingga
                  membantu dalam menjaga kadar gula darah tetap stabil.
                </p>

                <p className='mb-5 text-body'>
                  Dengan menerapkan manajemen diet 3J akan mendukung upaya
                  pengelolaan penyakit DM sehingga penderita DM dapat memiliki
                  kualitas hidup yang lebih baik. Kunci sukses dalam melakukan
                  diet DM adalah kepatuhan dalam melakukan terapi, baik terapi
                  farmakologi (obat) maupun non-farmakologi.<br/> 
                </p>

                <div className='border-l-[3px] border-gray-3 bg-gray py-5 px-8 mt-7.5'>
                  <p className='italic font-medium text-dark'>
                    “Diabetes taught me
                  discipline - Sonia Sotomayor” <br/>
                  </p>
                </div>

                <p className='mt-12 text-3xl font-semibold text-center'>You are stronger than you seem,
                Nutripeeps!!!</p>
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
