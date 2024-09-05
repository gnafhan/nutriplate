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
          content='Halo, NutriPeeps!
                  Mungkin NutriPeeps sudah tidak asing dengan istilah obesitas. Jadi, obesitas terjadi karena adanya ketidakseimbangan antara asupan energi yang masuk (energy intake) dengan energi yang digunakan (energy expenditure) sehingga terjadi penumpukkan lemak yang berlebih.  Penentuan status gizi menggunakan IMT/U dapat menentukan apakah seseorang dalam status obesitas atau tidak. Indeks Masa tubuh (IMT) adalah perbandingan antara berat badan (kg) dengan tinggi (cm). Seseorang dapat dikatakan obesitas jika skala IMT nya lebih dari 27,0.
                  NutriPeeps tahu tidak, bahwa aktivitas fisik sangat diperlukan untuk mencegah dan mengatasi obesitas. Terdapat tiga kategori aktivitas fisik, yakni ringan, sedang, dan berat. Untuk aktivitas fisik ringan dapat mengeluarkan energi sebesar 3,5 Kkal/menit. NutriPeeps dapat melakukan jalan santai di sekitar rumah lho. Selain itu, kegiatan rumah, seperti menyuci, menyapu, memasak, menyetrika, mengepel lantai, dan menjahit juga termasuk ke dalam aktivitas fisik. Apabila NutriPeeps senang berkegiatan di luar rumah dapat melakukan aktivitas, antara lain memanah, memancing, golf, dan masih banyak lainnya. Selanjutnya untuk aktivitas sedang dapat mengeluarkan energi 3,5-7 Kkal/menit. Olahraga yang dapat dilakukan, seperti bulutangkis, tenis meja, bowling, bersepeda, ski air, skate board, dan masih banyak kegiatan olahraga seru lainnya yang tentunya dapat membantu mengeluarkan energi. Terakhir, aktivitas fisik berat dapat mengeluarkan energi lebih dari 7 Kkal/menit. Beberapa contoh dari aktivitas tersebut, seperti berjalan dengan kecepatan lebih dari 5 km/jam, mendaki gunung, jogging dengan kecepatan 8 km/jam, dan sepak bola.
                  Nah, itu semua berbagai rekomendasi aktivitas untuk mencegah obesitas. NutriPeeps jangan lupa untuk selalu beraktivitas karena langkah kecil kecil dapat berdampak pada kesehatan.
                    '
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
                Umum
              </a>
              <h1 className='mb-5 text-2xl font-bold sm:text-4xl lg:text-custom-2 text-dark'>
                Mengubah Gaya Hidup dengan Aktivitas Fisik
              </h1>
            </div>
            <div className='max-w-[770px] mx-auto'>
              <div>
                <p className='mb-5 font-semibold text-body'>
                  Halo, NutriPeeps!
                </p>
                <p className='mb-5 '>
                  Mungkin NutriPeeps sudah tidak asing dengan istilah obesitas. Jadi, obesitas terjadi karena adanya
                  ketidakseimbangan antara asupan energi yang masuk (energy intake) dengan energi yang digunakan (energy
                  expenditure) sehingga terjadi penumpukkan lemak yang berlebih. Penentuan status gizi menggunakan IMT/U
                  dapat menentukan apakah seseorang dalam status obesitas atau tidak. Indeks Masa tubuh (IMT) adalah
                  perbandingan antara berat badan (kg) dengan tinggi (cm). Seseorang dapat dikatakan obesitas jika skala
                  IMT nya lebih dari 27,0.
                </p>
                <p className='mb-5 text-body'>
                  Jenis karbohidrat yang dianjurkan adalah karbohidrat yang
                  mengandung serat (biji-bijian, polong-polongan,
                  kacang-kacangan, buah- buahan, dan sayur mayur). Sumber
                  karbohidrat yang sudah diolah (highly processed foods) kurang
                  dianjurkan karena mengandung lebih banyak gula, lemak,
                  dan/atau tambahan garam.
                </p>
                <p className='mb-5 text-body'>
                  NutriPeeps tahu tidak, bahwa aktivitas fisik sangat diperlukan untuk mencegah dan mengatasi obesitas.
                  Terdapat tiga kategori aktivitas fisik, yakni ringan, sedang, dan berat. Untuk aktivitas fisik ringan
                  dapat mengeluarkan energi sebesar 3,5 Kkal/menit. NutriPeeps dapat melakukan jalan santai di sekitar
                  rumah lho. Selain itu, kegiatan rumah, seperti menyuci, menyapu, memasak, menyetrika, mengepel lantai,
                  dan menjahit juga termasuk ke dalam aktivitas fisik. Apabila NutriPeeps senang berkegiatan di luar
                  rumah dapat melakukan aktivitas, antara lain memanah, memancing, golf, dan masih banyak lainnya.
                  Selanjutnya untuk aktivitas sedang dapat mengeluarkan energi 3,5-7 Kkal/menit. Olahraga yang dapat
                  dilakukan, seperti bulutangkis, tenis meja, bowling, bersepeda, ski air, skate board, dan masih banyak
                  kegiatan olahraga seru lainnya yang tentunya dapat membantu mengeluarkan energi. Terakhir, aktivitas
                  fisik berat dapat mengeluarkan energi lebih dari 7 Kkal/menit. Beberapa contoh dari aktivitas
                  tersebut, seperti berjalan dengan kecepatan lebih dari 5 km/jam, mendaki gunung, jogging dengan
                  kecepatan 8 km/jam, dan sepak bola.
                </p>
                <p className='mb-5 text-body'>
                  Nah, itu semua berbagai rekomendasi aktivitas untuk mencegah obesitas. NutriPeeps jangan lupa untuk
                  selalu beraktivitas karena langkah kecil kecil dapat berdampak pada kesehatan.
                </p>
                <p className='mb-5 text-body'>
                  Referensi: <br/>
                  Kementerian Kesehatan Republik Indonesia. 2017. Panduan Pelaksanaan Gerakan Nusantara Tekan Angka
                  Obesitas (Gentas). Kementerian Kesehatan RI : Jakarta.
                </p>
                <p className='mb-5 text-body'>
                  Kementerian Kesehatan Republik Indonesia. 2022. Obesitas. Kementerian Kesehatan RI : Jakarta.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer/>
      {/* <PopupWidget /> */}
    </>
  )
}

export default Home

// export const getServerSideProps = async ({ req, res }) => {
//   return tokenMiddleware(req, res)
// }
