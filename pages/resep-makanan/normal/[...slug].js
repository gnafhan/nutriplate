import Head from 'next/head'
import React from 'react'
import Navbar from '../../../components/navbar'
import Image from 'next/image'
import { CardResep } from '../../../components/CardResep'
import Footer from '../../../components/footer'
import { CardMakanan } from '../../../components/CardMakanan'

export const getStaticPaths = async () => {
  // Extract all slugs from the data
  const paths = [
    { params: { slug: ['pertama', 'pagi'] } },
    { params: { slug: ['pertama', 'siang'] } },
    { params: { slug: ['pertama', 'sore'] } },
    { params: { slug: ['kedua', 'pagi'] } },
    { params: { slug: ['kedua', 'siang'] } },
    { params: { slug: ['kedua', 'sore'] } },
    { params: { slug: ['ketiga', 'pagi'] } },
    { params: { slug: ['ketiga', 'siang'] } },
    { params: { slug: ['ketiga', 'sore'] } },
    { params: { slug: ['keempat', 'pagi'] } },
    { params: { slug: ['keempat', 'siang'] } },
    { params: { slug: ['keempat', 'sore'] } },
    { params: { slug: ['kelima', 'pagi'] } },
    { params: { slug: ['kelima', 'siang'] } },
    { params: { slug: ['kelima', 'sore'] } },
    { params: { slug: ['keenam', 'pagi'] } },
    { params: { slug: ['keenam', 'siang'] } },
    { params: { slug: ['keenam', 'sore'] } },
    { params: { slug: ['ketujuh', 'pagi'] } },
    { params: { slug: ['ketujuh', 'siang'] } },
    { params: { slug: ['ketujuh', 'sore'] } }
  ]

  return {
    paths: paths,
    fallback: false // Can be true or 'blocking' if you want to enable ISR
  }
}

export const getStaticProps = async context => {
  const { slug } = context.params
  const dataResep = [
    {
      slug: 'pertama/pagi',
      makanan: [
        {
          nama: 'Nasi Putih',
          deskripsi: 'Nasi putih 150 gram',
          link: '',
          image: '/img/resep/nasii.jpg'
        },
        {
          nama: 'Opor Telur',
          deskripsi: 'Opor telur dengan resep dibawah ini',
          link: '/resep/opor-telur',
          image: '/img/resep/opor.jpg'
        },
        {
          nama: 'Orek tempe dan kacang panjang',
          deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
          link: '/resep/orek-tempe',
          image: '/img/resep/orek-tempe.jpg'
        },
        {
          nama: 'Pisang Ambon',
          deskripsi: 'Pisang ambon 1 buah',
          link: null,
          image: '/img/resep/pisang.jpg'
        }
      ]
    },
    {
      slug: 'pertama/siang',
      makanan: [
        {
          nama: 'Nasi',
          deskripsi: 'Nasi putih 200 gram',
          link: null,
          image: '/img/resep/nasii.jpg'
        },
        {
          nama: 'Ikan Goreng',
          deskripsi: 'Ikan goreng dengan resep di bawah ini',
          link: '/resep/ikan-goreng',
          image: '/img/resep/ikan.png'
        },
        {
          nama: 'Tahu Asam Manis',
          deskripsi: 'Tahu asam manis dengan resep di bawah ini',
          link: '/resep/tahu-asam-manis',
          image: '/img/resep/tahu-asam-manis.png'
        },
        {
          nama: 'Tumis Daun Singkong',
          deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
          link: '/resep/tumis-daun-singkong',
          image: '/img/resep/daun-singkong.png'
        },
        {
          nama: 'Jus Semangka',
          deskripsi: 'Jus semangka dengan resep di bawah ini',
          link: '/resep/jus-semangka',
          image: '/img/resep/jus-semangka.png'
        }
      ]
    },
    {
        slug: 'pertama/sore',
        makanan: [
            {
                nama: 'Nasi',
                deskripsi: 'Nasi 150 gram',
                link: '',
                image: '/img/resep/nasii.jpg'
            },
            {
                nama: 'Tempe Goreng',
                deskripsi: 'Tempe goreng dengan bumbu halus',
                link: '/resep/tempe-goreng',
                image: '/img/resep/tempe.png'
            },
            {
                nama: 'Sop Sayur dan Bakso',
                deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                link: '/resep/sop-sayur',
                image: '/img/resep/sop-sayur-bakso.png'
            },
            {
                nama: 'Jeruk Manis',
                deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                link: null,
                image: '/img/resep/jeruk.png'
            }
        ]
    },
      {
          slug: 'kedua/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'kedua/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'kedua/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      },
      {
          slug: 'ketiga/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'ketiga/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'ketiga/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      },
      {
          slug: 'keempat/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'keempat/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'keempat/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      },
      {
          slug: 'kelima/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'kelima/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'kelima/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      },
      {
          slug: 'keenam/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'keenam/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'keenam/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      },
      {
          slug: 'ketujuh/pagi',
          makanan: [
              {
                  nama: 'Nasi Putih',
                  deskripsi: 'Nasi putih 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Opor Telur',
                  deskripsi: 'Opor telur dengan resep dibawah ini',
                  link: '/resep/opor-telur',
                  image: '/img/resep/opor.jpg'
              },
              {
                  nama: 'Orek tempe dan kacang panjang',
                  deskripsi: 'Orek tempe dan kacang panjang dengan resep dibawah ini',
                  link: '/resep/orek-tempe',
                  image: '/img/resep/orek-tempe.jpg'
              },
              {
                  nama: 'Pisang Ambon',
                  deskripsi: 'Pisang ambon 1 buah',
                  link: null,
                  image: '/img/resep/pisang.jpg'
              }
          ]
      },
      {
          slug: 'ketujuh/siang',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi putih 200 gram',
                  link: null,
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Ikan Goreng',
                  deskripsi: 'Ikan goreng dengan resep di bawah ini',
                  link: '/resep/ikan-goreng',
                  image: '/img/resep/ikan.png'
              },
              {
                  nama: 'Tahu Asam Manis',
                  deskripsi: 'Tahu asam manis dengan resep di bawah ini',
                  link: '/resep/tahu-asam-manis',
                  image: '/img/resep/tahu-asam-manis.png'
              },
              {
                  nama: 'Tumis Daun Singkong',
                  deskripsi: 'Tumis daun singkong dengan resep di bawah ini',
                  link: '/resep/tumis-daun-singkong',
                  image: '/img/resep/daun-singkong.png'
              },
              {
                  nama: 'Jus Semangka',
                  deskripsi: 'Jus semangka dengan resep di bawah ini',
                  link: '/resep/jus-semangka',
                  image: '/img/resep/jus-semangka.png'
              }
          ]
      },
      {
          slug: 'ketujuh/sore',
          makanan: [
              {
                  nama: 'Nasi',
                  deskripsi: 'Nasi 150 gram',
                  link: '',
                  image: '/img/resep/nasii.jpg'
              },
              {
                  nama: 'Tempe Goreng',
                  deskripsi: 'Tempe goreng dengan bumbu halus',
                  link: '/resep/tempe-goreng',
                  image: '/img/resep/tempe.png'
              },
              {
                  nama: 'Sop Sayur dan Bakso',
                  deskripsi: 'Sop sayur dan bakso dengan berbagai sayuran dan bumbu',
                  link: '/resep/sop-sayur',
                  image: '/img/resep/sop-sayur-bakso.png'
              },
              {
                  nama: 'Jeruk Manis',
                  deskripsi: 'Jeruk manis 110 gram (2 buah sedang)',
                  link: null,
                  image: '/img/resep/jeruk.png'
              }
          ]
      }
  ]
  const dataFound = dataResep.find(item => item.slug == slug.join('/'))
  // const [day, time] = slug.split('/');

  // // Find the data for the given slug
  // const makanan = data.find((item) =>
  //     item.waktu.some((w) => w.url.includes(day) && w.url.includes(time))
  // );

  // const waktu = makanan.waktu.find((w) => w.url.includes(day) && w.url.includes(time));

  return {
    props: {
      data: dataFound
    }
  }
}

const MakananPage = ({ data }) => {
  const { slug, makanan } = data

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
          className='absolute bottom-0 right-0 z-[-1] hidden lg:block'
        />
        <Image
          src={'/img/shape_pinggir.svg'}
          width={427}
          height={364}
          className='absolute bottom-0 left-0 scale-x-[-1] z-[-1] hidden lg:block'
        />
        <div className='flex justify-center w-full h-full mt-5'>
          <div className='flex justify-center w-full max-w-screen-lg gap-y-8 '>
            <div className='grid items-start justify-start w-full h-full grid-cols-1 gap-4 lg:grid-cols-4 place-items-center place-content-start '>
              {makanan.map(item => {
                return (
                  <CardMakanan
                    name={item.nama}
                    deskripsi={item.deskripsi}
                    link={item.link}
                    image={item.image}
                  />
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

export default MakananPage
