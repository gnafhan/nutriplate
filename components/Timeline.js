import React from 'react'

export const Timeline = () => {
    const data = [
        {
        nama: "Makanan Hari Pertama",
        deskripsi: "Resep makanan hari pertama",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/pertama/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/pertama/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/pertama/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Kedua",
        deskripsi: "Resep makanan hari kedua",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/kedua/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/kedua/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/kedua/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Ketiga",
        deskripsi: "Resep makanan hari ketiga",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/ketiga/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/ketiga/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/ketiga/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Keempat",
        deskripsi: "Resep makanan hari keempat",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/keempat/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/keempat/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/keempat/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Kelima",
        deskripsi: "Resep makanan hari kelima",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/kelima/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/kelima/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/kelima/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Keenam",
        deskripsi: "Resep makanan hari keenam",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/keenam/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/keenam/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/keenam/sore'
            },
            ],
        },
        {
        nama: "Makanan Hari Ketujuh",
        deskripsi: "Resep makanan hari ketujuh",
        waktu: [{
            nama: 'Makan Pagi',
            url: '/resep-makanan/normal/ketujuh/pagi'
            },
            {
            nama: 'Makan Siang',
            url: '/resep-makanan/normal/ketujuh/siang'
            },
            {
            nama: 'Makan Malam',
            url: '/resep-makanan/normal/ketujuh/sore'
            },
            ],
        },
]
  return (
    <>
      <ol className='relative border-gray-200 border-s dark:border-gray-700'>
        {data.map((item, index)=>(
        <li className='mb-10 ms-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
           Day {index+1}
          </time>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            {item.nama}
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            {item.deskripsi}
          </p>
          <div className='flex gap-4'>
            {item.waktu.map((waktu, index)=>(
                    <a
                        href={waktu.url}
                        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    >
                        {waktu.nama}
                        <svg
                        className='w-3 h-3 ms-2 rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                        >
                        <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                        </svg>
                    </a>

            ))}

          </div>
        </li>
        ))}
    
      </ol>
    </>
  )
}
