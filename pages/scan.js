// Ini Google Vision
import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './../components/container'
import Webcam from 'react-webcam'
import * as cocoModel from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs'
import { useMediaQuery, useWindowSize } from '@uidotdev/usehooks'
import { DataContext } from '../context/DataContext'
import { set } from 'react-hook-form'
import Loading from '../components/Loading'
import { useRouter } from 'next/router'
import { tokenMiddleware } from '../util/tokenMiddleware'
import useTokenMiddleware from '../hooks/useTokenMiddleware'
import { uploadImage } from '../util/uploadImage'

const Deteksi = () => {
  // useTokenMiddleware()
  const size = useWindowSize()
  const isLandscape = size.height <= size.width
  const ratio = isLandscape
    ? size.width / size.height
    : size.height / size.width

  const videoConstraints = {
    width: size.width,
    height: size.height,
    facingMode: 'environment',
    aspectRatio: ratio
  }
  const { data, setData, screenshot, setScreenshot, setSize } =
    useContext(DataContext)
  const [model, setModel] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [predictions, setPredictions] = useState([])
  const [facingMode, setFacingMode] = useState('environment')
  const camera = useRef(null)
  const loadModel = async () => {
    try {
      const model = await cocoModel.load()
      setModel(model)
    } catch (error) {
      console.log(error)
    }
  }

  const deteksi2 = async () => {}

  useEffect(() => {
    tf.ready().then(() => {
      loadModel()
    })
  }, [])

  const captureImage = async () => {
    setLoading(true)
    const webcam = camera.current
    const imageSrc = webcam.getScreenshot()
    const image = webcam.getScreenshot()

    setSize({
      width: webcam.video.videoWidth,
      height: webcam.video.videoHeight
    })
    const key = process.env.NEXT_PUBLIC_API_KEY_AI
    const url = process.env.NEXT_PUBLIC_API_URL
    const requestData = {
      image: imageSrc
    }

    try {
      const imageUrl = await uploadImage(image)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: key
        },
        body: JSON.stringify({ image: image })
      })
      const data = await response.json()
      const predictions = data
      setPredictions(predictions)
      setData({image: imageUrl , ...data})
      
      setScreenshot(imageSrc.split(',')[1])
      localStorage.setItem('capturedImage', image)
      router.push('/cekData')
    } catch (error) {
      console.log(error)
    }
  }

  const changeFacingMode = () => {
    if (facingMode === 'environment') {
      setFacingMode('user')
    } else {
      setFacingMode('environment')
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='container flex justify-center max-w-screen-xl p-0 mx-auto xl:px-0'>
          <div className='w-full max-w-screen-sm min-h-[100vh] bg-slate-400 relative'>
            <div>
            </div>
            {predictions &&
              predictions.length > 0 &&
              predictions.map((prediction, index) => (
                <>
                  <div
                    key={'predict ' + index}
                    className='bg-black bg-opacity-50 '
                  >
                    <div className='text-white'>{prediction.name}</div>
                  </div>
                </>
              ))}

            <Webcam
              className='absolute object-cover min-h-screen overflow-hidden rounded'
              id='webcam'
              ref={camera}
              screenshotFormat='image/png'
              muted
              videoConstraints={{
                facingMode: facingMode
              }}
            />
            <button
              onClick={() => router.back()}
              className='p-3 text-[#367CE8] bg-white rounded-full absolute top-5 left-9 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                />
              </svg>
            </button>
            <div className='absolute flex items-center justify-between w-full px-10 align-middle bottom-20'>
              {/* <input type='file' />
               */}
              <button className='p-4 text-[#367CE8] bg-white rounded-full '>
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
                    d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
              </button>

              <button
                  disabled={loading}
                onClick={captureImage}
                className='p-4 text-[#367CE8] bg-white rounded-full  '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z'
                  />
                </svg>
              </button>
              <button
                onClick={changeFacingMode}
                className='p-4 text-[#367CE8] bg-white rounded-full '
              >
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
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Deteksi

export const getServerSideProps = async ({ req, res }) => {
  return tokenMiddleware(req, res)
}