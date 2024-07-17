import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import dataScan from '../data/dataBe'
import { DataContext } from '../context/DataContext'
import { tokenMiddleware } from '../util/tokenMiddleware'
import handleCanvas from '../util/handleCanvas'
import { Dropdown } from 'flowbite-react'
import { ResultButton } from '../components/ResultButton'
import useTokenMiddleware from '../hooks/useTokenMiddleware'
import { BottomNav } from '../components/BottomNav'
import { CarouselHome } from '../components/CarouselHome'
import { Feature } from '../components/Feature'

const resultData = () => {
    useTokenMiddleware()

  //   const [data, setData] = useState([])
  //   const [selectedData, setSelectedData] = useState([])

  //   useEffect(() => {
  //     dataScan.items.forEach(items => {
  //       setData(prev => [...prev, ...items.food.slice(0, 3)])
  //     })
  //     setData(prev => prev.sort((x, y) => y.confidence - x.confidence))
  //   }, [])
  //   const canvasRef = useRef(null)
  //   const imageRef = useRef(null)

  return (
    <>
      <div className='flex justify-center w-full '>
        <div className='container max-w-sm mb-10 font-poppins '>
          <div>
            <h1 className='w-full my-5 text-lg font-semibold'>
              Halo, Selamat Datang 👋{' '}
            </h1>
          </div>
          <CarouselHome />
          <div>
            <h1 className='w-full mt-3 text-lg font-semibold'>Fitur Kami </h1>
          </div>
          <div className='grid items-center justify-center w-full grid-cols-4 mt-2 gap-y-4'>
            <Feature link={'/scan'} image={'/icon/camera.svg'}>
                <p className='text-sm font-medium leading-tight'>Scan <br/>Makanan</p>
            </Feature>
            <Feature link={'/info-kesehatan'} image={'/icon/info.svg'}>
                <p className='text-sm font-medium leading-tight'>Informasi Kesehatan</p>
            </Feature>
            <Feature link={'/resep-makanan'} image={'/icon/book.svg'}>
                <p className='text-sm font-medium leading-tight'>Resep Makanan</p>
            </Feature>
            <Feature link={'/bmi'} image={'/icon/bmi.svg'}>
                <p className='text-sm font-medium leading-tight'>Cek <br/> BMI</p>
            </Feature>
            <Feature link={'/history'} image={'/icon/clock.svg'}>
                <p className='text-sm font-medium leading-tight'>Riwayat <br/> Makanmu</p>
            </Feature>
          </div>
          <BottomNav />
        </div>
      </div>
    </>
  )
}

export default resultData

// export const getServerSideProps = async ({ req, res }) => {
//   return tokenMiddleware(req, res)
// }

export const getServerSideProps = async ({ req, res }) => {
  return tokenMiddleware(req, res)
}