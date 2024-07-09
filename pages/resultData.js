import Image from 'next/image'
import React, { useContext } from 'react'
import dataScan from '../data/dataBe'
import { DataContext } from '../context/DataContext'
import { tokenMiddleware } from '../util/tokenMiddleware'
import {Translator, Translate} from 'react-auto-translate';

const resultData = () => {
  const { data, setData, screenshot, setScreenshot, size } =
  useContext(DataContext)
  return (
    <>
    <Translator
     from='en'
     to='id'
     googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}
    >
      <div className='flex justify-center w-full '>
        <div className='container max-w-sm my-10 '>
          <div>
            <div>
              <button className='flex items-center px-5 py-3 bg-white border-2 border-solid rounded-lg text-primary border-primary hover:bg-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                  />
                </svg>
                <p className=' ms-3'>Edit Data</p>
              </button>
            </div>
            <h1 className='my-4 text-xl font-bold text-primary'>
              Makananmu kali ini adalah :
            </h1>
            <div className='flex flex-col w-full gap-5 mt-4'>
              {data.items.map((item, index)=>(
                <>
              <div className='border-[#D8D5D5] border-solid border-2 rounded-lg flex py-2 px-4 w-full justify-between items-center'>
                <div className='flex flex-col'>
                  <h1 className='text-lg font-semibold text-primary'>
                    {item.food[0].food_info.display_name}
                  </h1>
                  <h2 className='font-semibold text-primaryaccent'>Nutriscore: {item.food[0].food_info.fv_grade}</h2>
                  <h2 className='mt-2 text-primary'>{item.food[0].food_info.nutrition.calories_100g} KCAL</h2>
                </div>
                <Image src={'/img/piring.png'} width={48} height={47} />
              </div>
                </>
              ))}
              
            </div>
            <div className='flex justify-center w-full mt-5'>
              <button className='flex items-center px-5 py-3 bg-white border-2 border-solid rounded-lg text-primary border-primary hover:bg-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25'
                  />
                </svg>

                <p className=' ms-3'>Simpan Data</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Translator>
    </>
  )
}

export default resultData

export const getServerSideProps = async ({ req, res }) => {
  return tokenMiddleware(req, res)
}