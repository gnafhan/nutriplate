import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import dataScan from '../data/dataBe'
import { DataContext } from '../context/DataContext'
import { tokenMiddleware } from '../util/tokenMiddleware'
import handleCanvas from '../util/handleCanvas'
import { Dropdown } from 'flowbite-react'
import { ResultButton } from '../components/ResultButton'
import useTokenMiddleware from '../hooks/useTokenMiddleware'
import { ConfirmDataContext } from '../context/ConfirmDataContext'
import { useRouter } from 'next/router'

const resultData = () => {
  useTokenMiddleware()
    const {dataConfirm, setDataConfirm, imageUrl, setImageUrl} = useContext(ConfirmDataContext)
    const { data, setData, screenshot, setScreenshot, size } =
    useContext(DataContext)
    const route = useRouter()

    const [dataIter, setDataIter] = useState([])
    const [selectedData, setSelectedData] = useState([])


    useEffect(()=>{
      setImageUrl(data.image)
      data.items.forEach((items)=>{
        setDataIter((prev)=>[...prev, ...items.food.slice(0,3)])
      })
      setDataIter((prev)=> prev.sort((x, y)=> y.confidence - x.confidence))
    }, [])
    const canvasRef = useRef(null)
    const imageRef = useRef(null)
  
    const handleSubmit = () =>{
      setDataConfirm(selectedData)
      route.push('/konfirmasiData')
    }
  return (
    <>
      <div className='flex justify-center w-full '>
        <div className='container max-w-sm mb-10 '>
          <div>
            <div>
                <div className='flex w-full h-[20vh] relative'>
                    <Image ref={imageRef} src={'/img/ikan.jpg'} className="object-cover z-[-1] " fill />
                    <canvas ref={canvasRef} className='absolute z-10' />
                </div>
                <div className="flex w-full min-h-[75vh] rounded-t-2xl flex-col  bg-white mt-[-10px] ">
                    <div className='flex justify-center w-full text-center my-7'>
                        <p className='text-lg font-semibold font-poppins'>Pilih Makananmu</p>
                    </div>
                    <div className="flex flex-row flex-wrap w-full h-full gap-x-2 gap-y-4">
                        {dataIter.length > 0 && dataIter.map((item, index) => 
                            (<>
                            <ResultButton handleAdd={setSelectedData} key={index} data={item}/>
                        </>))}
                    </div>
                </div>
                <button onClick={handleSubmit} className='w-full py-2 text-lg font-semibold text-center text-white rounded-lg bg-primary px3 font-poppins'>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default resultData

export const getServerSideProps = async ({ req, res }) => {
  return tokenMiddleware(req, res)
}