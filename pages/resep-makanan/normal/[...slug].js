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
          "slug": "kedua/pagi",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih dikukus, disajikan hangat 150 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Sop Bayam",
                  "deskripsi": "Sop sayur bayam dengan kaldu dan bumbu rempah yang gurih",
                  "link": "/resep/dynamic/sop-bayam",
                  "image": "/img/resep/sop-bayam.png"
              },
              {
                  "nama": "Tempe Garit",
                  "deskripsi": "Tempe yang diiris tipis lalu digoreng renyah dan disajikan hangat",
                  "link": "/resep/dynamic/tempe-goreng",
                  "image": "/img/resep/tempe-garit.png"
              },
              {
                  "nama": "Semangka Potong",
                  "deskripsi": "Semangka segar yang dipotong-potong, disajikan dingin 1 porsi",
                  "link": null,
                  "image": "/img/resep/semangka.png"
              }
          ]
      },
      {
          "slug": "kedua/siang",
          "makanan": [
              {
                  "nama": "Nasi",
                  "deskripsi": "Nasi putih pulen hangat, disajikan 200 gram",
                  "link": null,
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Tumis Kangkung",
                  "deskripsi": "Tumisan sayur kangkung dengan bumbu bawang dan sedikit cabai, disajikan panas",
                  "link": "",
                  "image": "/img/resep/tumis-kangkung.png"
              },
              {
                  "nama": "Lele Goreng",
                  "deskripsi": "Ikan lele segar yang digoreng kering dan renyah di luar, lembut di dalam",
                  "link": "",
                  "image": "/img/resep/lele-goreng.jpg"
              },
              {
                  "nama": "Jeruk",
                  "deskripsi": "Jeruk segar 2 buah, asam manis dan menyegarkan",
                  "link": null,
                  "image": "/img/resep/jeruk.jpg"
              }
          ]
      },
      {
          "slug": "kedua/sore",
          "makanan": [
              {
                  "nama": "Nasi",
                  "deskripsi": "Nasi putih hangat, disajikan 150 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Cumi Balado",
                  "deskripsi": "Cumi segar yang dimasak dengan bumbu balado pedas dan gurih",
                  "link": "",
                  "image": "/img/resep/cumi-balado.jpg"
              },
              {
                  "nama": "Tumis Buncis",
                  "deskripsi": "Tumisan buncis segar dengan bawang dan sedikit cabai, disajikan hangat",
                  "link": "",
                  "image": "/img/resep/tumis-buncis.jpg"
              },
              {
                  "nama": "Apel",
                  "deskripsi": "Apel segar dan manis 1 buah",
                  "link": null,
                  "image": "/img/resep/apel.jpg"
              }
          ]
      },
      {
          "slug": "ketiga/pagi",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 150 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Rendang Daging",
                  "deskripsi": "Daging sapi rendang yang dimasak dengan bumbu rempah-rempah hingga empuk dan kering",
                  "link": "/resep/dynamic/rendang",
                  "image": "/img/resep/rendang.jpg"
              },
              {
                  "nama": "Capcay Sayur",
                  "deskripsi": "Tumisan aneka sayuran seperti brokoli, kembang kol, wortel, dan caisim dengan bumbu kecap dan saus tiram",
                  "link": "/resep/dynamic/capcay-sayur",
                  "image": "/img/resep/capcay.jpg"
              },
              {
                  "nama": "Pisang",
                  "deskripsi": "Pisang segar 1 buah",
                  "link": null,
                  "image": "/img/resep/pisang.jpg"
              }
          ]
      },
      {
          "slug": "ketiga/selingan-pagi",
          "makanan": [
              {
                  "nama": "Kue Apem",
                  "deskripsi": "Kue tradisional apem yang lembut dan manis",
                  "link": "/resep/dynamic/kue-apem",
                  "image": "/img/resep/kue-apem.jpg"
              }
          ]
      },
      {
          "slug": "ketiga/siang",
          "makanan": [
              {
                  "nama": "Mie Goreng Sayur Udang",
                  "deskripsi": "Mie goreng dengan aneka sayuran dan udang, dimasak dengan bumbu rempah yang sedap",
                  "link": "/resep/dynamic/mie-goreng-sayur-udang",
                  "image": "/img/resep/mie-goreng.jpg"
              },
              {
                  "nama": "Jeruk",
                  "deskripsi": "Jeruk segar 1 buah",
                  "link": null,
                  "image": "/img/resep/jeruk.jpg"
              }
          ]
      },
      {
          "slug": "ketiga/selingan-sore",
          "makanan": [
              {
                  "nama": "Jus Buah Naga",
                  "deskripsi": "Jus segar dari buah naga, menyegarkan",
                  "link": "/resep/dynamic/jus-buah-naga",
                  "image": "/img/resep/jus-buah-naga.jpg"
              }
          ]
      },
      {
          "slug": "ketiga/sore",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 150 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Ayam Goreng Bumbu Kari",
                  "deskripsi": "Ayam goreng dengan bumbu rempah kari yang gurih dan lezat",
                  "link": "/resep/dynamic/ayam-goreng-bumbu-kari",
                  "image": "/img/resep/ayam-goreng-kari.jpg"
              },
              {
                  "nama": "Sop Sayur Jamur",
                  "deskripsi": "Sop sayur dengan berbagai jenis sayuran dan jamur kuping, disajikan hangat",
                  "link": "/resep/dynamic/sop-sayur-jamur",
                  "image": "/img/resep/sop-sayur.jpg"
              },
              {
                  "nama": "Pear",
                  "deskripsi": "Buah pear segar 1 buah",
                  "link": null,
                  "image": "/img/resep/pear.jpg"
              }
          ]
      },
      {
          "slug": "keempat/pagi",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Sayur Bayam, Jagung, dan Wortel",
                  "deskripsi": "Sayur bayam, jagung, dan wortel yang dimasak dengan bumbu rempah dan kuah segar",
                  "link": "/resep/dynamic/sayur-bayam-jagung-wortel",
                  "image": "/img/resep/sop-bayam.png"
              },
              {
                  "nama": "Ayam Ungkep Goreng Tanpa Kulit",
                  "deskripsi": "Ayam yang diungkep dengan bumbu rempah kemudian digoreng tanpa kulit hingga matang",
                  "link": "/resep/dynamic/ayam-ungkep-goreng",
                  "image": "/img/resep/ayam-ungkep-goreng.jpg"
              },
              {
                  "nama": "Apel Merah",
                  "deskripsi": "Apel merah segar, 1 buah (85 gram)",
                  "link": null,
                  "image": "/img/resep/apel.jpg"
              }
          ]
      },
      {
          "slug": "keempat/selingan-pagi",
          "makanan": [
              {
                  "nama": "Sandwich Sosis",
                  "deskripsi": "Sandwich dengan roti tawar, sosis, selada, dan saus tomat",
                  "link": "/resep/dynamic/sandwich-sosis",
                  "image": "/img/resep/sandwich-sosis.jpg"
              }
          ]
      },
      {
          "slug": "keempat/siang",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 200 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Soto Daging",
                  "deskripsi": "Soto berkuah kaldu daging sapi dengan irisan kol, tauge, telur bebek asin, dan bumbu rempah",
                  "link": "/resep/dynamic/soto-daging",
                  "image": "/img/resep/soto-daging.jpg"
              },
              {
                  "nama": "Tahu Goreng",
                  "deskripsi": "Tahu yang digoreng hingga crispy",
                  "link": "/resep/dynamic/tahu-goreng",
                  "image": "/img/resep/tahu-goreng.jpg"
              },
              {
                  "nama": "Semangka",
                  "deskripsi": "Semangka segar, 1 porsi (180 gram)",
                  "link": null,
                  "image": "/img/resep/semangka.png"
              }
          ]
      },
      {
          "slug": "keempat/selingan-sore",
          "makanan": [
              {
                  "nama": "Mango Sticky Rice",
                  "deskripsi": "Nasi ketan dengan manisan santan dan irisan mangga segar",
                  "link": "/resep/dynamic/mango-sticky-rice",
                  "image": "/img/resep/mango-sticky-rice.jpg"
              }
          ]
      },
      {
          "slug": "keempat/sore",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Oseng Daun Pepaya dan Tauge Tahu Putih",
                  "deskripsi": "Tumisan daun pepaya, tauge, dan tahu putih dengan bumbu sederhana",
                  "link": "/resep/dynamic/oseng-daun-pepaya-tauge-tahu-putih",
                  "image": "/img/resep/oseng-daun-pepaya.jpg"
              },
              {
                  "nama": "Ayam & Tempe Goreng",
                  "deskripsi": "Potongan ayam dan tempe yang digoreng hingga renyah",
                  "link": "/resep/dynamic/ayam-tempe-goreng",
                  "image": "/img/resep/ayam-tempe-goreng.jpg"
              },
              {
                  "nama": "Buah Melon",
                  "deskripsi": "Buah melon segar, 1 porsi (190 gram)",
                  "link": null,
                  "image": "/img/resep/melon.jpg"
              }
          ]
      },
      {
          "slug": "kelima/pagi",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Tumis Buncis Tempe",
                  "deskripsi": "Tumisan buncis dan tempe dengan bumbu manis dan sedikit rasa asam dari jeruk nipis",
                  "link": "/resep/dynamic/tumis-buncis-tempe",
                  "image": "/img/resep/tumis-buncis-tempe.jpg"
              },
              {
                  "nama": "Tahu Goreng",
                  "deskripsi": "Tahu yang digoreng dengan bumbu rempah dan bawang putih",
                  "link": "/resep/dynamic/tahu-goreng",
                  "image": "/img/resep/tahu-goreng.jpg"
              },
              {
                  "nama": "Buah Apel",
                  "deskripsi": "Apel segar, 1 buah (85 gram)",
                  "link": null,
                  "image": "/img/resep/apel.jpg"
              }
          ]
      },
      {
          "slug": "kelima/selingan-pagi",
          "makanan": [
              {
                  "nama": "Garlic Cheese Sandwich",
                  "deskripsi": "Sandwich roti tawar dengan topping keju dan bumbu bawang putih",
                  "link": "/resep/dynamic/garlic-cheese-sandwich",
                  "image": "/img/resep/garlic-cheese-sandwich.jpg"
              }
          ]
      },
      {
          "slug": "kelima/siang",
          "makanan": [
              {
                  "nama": "Mie Goreng Bakso Daging Sapi",
                  "deskripsi": "Mie goreng dengan bakso dan daging sapi, dimasak dengan aneka bumbu dan kecap",
                  "link": "/resep/dynamic/mie-goreng-bakso-daging-sapi",
                  "image": "/img/resep/mie-goreng-bakso.jpg"
              },
              {
                  "nama": "Sayur Bayam Merah",
                  "deskripsi": "Sayur bayam merah dengan jagung muda, kembang tahu, dan bumbu rempah",
                  "link": "/resep/dynamic/sayur-bayam-merah",
                  "image": "/img/resep/sayur-bayam-merah.jpg"
              },
              {
                  "nama": "Buah Mangga",
                  "deskripsi": "Mangga segar, 1 porsi (90 gram)",
                  "link": null,
                  "image": "/img/resep/mangga.jpg"
              }
          ]
      },
      {
          "slug": "kelima/selingan-sore",
          "makanan": [
              {
                  "nama": "Smoothie Alpukat, Oatmeal, dan Susu",
                  "deskripsi": "Smoothie yang terbuat dari alpukat, oatmeal, dan susu UHT",
                  "link": "/resep/dynamic/smoothie-alpukat-oatmeal",
                  "image": "/img/resep/smoothie-alpukat-oatmeal.jpg"
              }
          ]
      },
      {
          "slug": "kelima/sore",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Tumis Labu Siam Tempe",
                  "deskripsi": "Tumisan labu siam dan tempe dengan bumbu bawang dan cabai",
                  "link": "/resep/dynamic/tumis-labu-siam-tempe",
                  "image": "/img/resep/tumis-labu-siam.jpg"
              },
              {
                  "nama": "Bakso Bakar",
                  "deskripsi": "Bakso sapi yang dibakar dan dioles dengan campuran saus sambal dan kecap manis",
                  "link": "/resep/dynamic/bakso-bakar",
                  "image": "/img/resep/bakso-bakar.jpg"
              },
              {
                  "nama": "Buah Melon",
                  "deskripsi": "Buah melon segar, 1 porsi (190 gram)",
                  "link": null,
                  "image": "/img/resep/melon.jpg"
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
          "slug": "ketujuh/pagi",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Sayur Bayam, Jagung, dan Wortel",
                  "deskripsi": "Sayur bayam, jagung, dan wortel yang dimasak dengan bumbu rempah dan kuah segar",
                  "link": "/resep/dynamic/sayur-bayam-jagung-wortel",
                  "image": "/img/resep/sop-bayam.png"
              },
              {
                  "nama": "Ayam Ungkep Goreng Tanpa Kulit",
                  "deskripsi": "Ayam yang diungkep dengan bumbu rempah kemudian digoreng tanpa kulit hingga matang",
                  "link": "/resep/dynamic/ayam-ungkep-goreng",
                  "image": "/img/resep/ayam-ungkep-goreng.jpg"
              },
              {
                  "nama": "Apel Merah",
                  "deskripsi": "Apel merah segar, 1 buah (85 gram)",
                  "link": null,
                  "image": "/img/resep/apel.jpg"
              }
          ]
      },
      {
          "slug": "ketujuh/siang",
          "makanan": [
              {
                  "nama": "Mie Goreng Bakso Daging Sapi",
                  "deskripsi": "Mie goreng dengan bakso dan daging sapi, dimasak dengan aneka bumbu dan kecap",
                  "link": "/resep/dynamic/mie-goreng-bakso-daging-sapi",
                  "image": "/img/resep/mie-goreng-bakso.jpg"
              },
              {
                  "nama": "Sayur Bayam Merah",
                  "deskripsi": "Sayur bayam merah dengan jagung muda, kembang tahu, dan bumbu rempah",
                  "link": "/resep/dynamic/sayur-bayam-merah",
                  "image": "/img/resep/sayur-bayam-merah.jpg"
              },
              {
                  "nama": "Buah Mangga",
                  "deskripsi": "Mangga segar, 1 porsi (90 gram)",
                  "link": null,
                  "image": "/img/resep/mangga.jpg"
              }
          ]
      },
      {
          "slug": "ketujuh/sore",
          "makanan": [
              {
                  "nama": "Nasi Putih",
                  "deskripsi": "Nasi putih hangat, disajikan 100 gram",
                  "link": "",
                  "image": "/img/resep/nasii.jpg"
              },
              {
                  "nama": "Oseng Daun Pepaya dan Tauge Tahu Putih",
                  "deskripsi": "Tumisan daun pepaya, tauge, dan tahu putih dengan bumbu sederhana",
                  "link": "/resep/dynamic/oseng-daun-pepaya-tauge-tahu-putih",
                  "image": "/img/resep/oseng-daun-pepaya.jpg"
              },
              {
                  "nama": "Ayam & Tempe Goreng",
                  "deskripsi": "Potongan ayam dan tempe yang digoreng hingga renyah",
                  "link": "/resep/dynamic/ayam-tempe-goreng",
                  "image": "/img/resep/ayam-tempe-goreng.jpg"
              },
              {
                  "nama": "Buah Melon",
                  "deskripsi": "Buah melon segar, 1 porsi (190 gram)",
                  "link": null,
                  "image": "/img/resep/melon.jpg"
              }
          ]
      },
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
