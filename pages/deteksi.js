import React, { useEffect, useRef, useState } from 'react'
import Container from './../components/container'
import Webcam from 'react-webcam'
import * as cocoModel from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs'

let videoConstraints = null
if (typeof window !== 'undefined') {
  let width = window.screen.width
  if (width > 640) {
    width = 640
  }
  videoConstraints = {
    width: width,
    height: window.screen.height,
    facingMode: 'user'
  }
}

const Deteksi = () => {
  const [model, setModel] = useState(null)
  const canvas = useRef(null)
  const loadModel = async () => {
    try {
      const model = await cocoModel.load()
      setModel(model)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel()
    })
  }, [])

  // useEffect(() => {
  //   if (model) {
  //     setInterval(() => {
  //       predict()
  //     }, 1000)
  //   }
  // }, [model])
  const predict = async () => {
    const webcam = document.getElementById('webcam')
    const predictions = await model.detect(webcam)
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const font = '16px sans-serif'
    ctx.font = font
    ctx.textBaseline = 'top'
    predictions.forEach(prediction => {
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      const width = prediction.bbox[2]
      const height = prediction.bbox[3]
      ctx.strokeStyle = '#00FFFF'
      ctx.lineWidth = 4
      ctx.strokeRect(x, y, width, height)
      ctx.fillStyle = '#00FFFF'
      const textWidth = ctx.measureText(prediction.class).width
      const textHeight = parseInt(font, 10)
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
    })
    predictions.forEach(prediction => {
      const x = prediction.bbox[0]
      const y = prediction.bbox[1]
      const width = prediction.bbox[2]
      const height = prediction.bbox[3]
      ctx.fillStyle = '#00FFFF'
      ctx.fillText(prediction.class, x, y)
    })

  }
  return (
    <>
      <Container className='max-w-screen-sm p-0 '>
        <div className='w-full min-h-[100vh] bg-slate-400 relative'>
          <Webcam
            className='absolute'
            id='webcam'
            videoConstraints={videoConstraints}
          />
          <canvas ref={canvas} id='canvas' className='absolute ' />
          <button
            onClick={predict}
            className='w-full p-4 text-white bg-blue-500'
          >
            Detect
          </button>
        </div>
      </Container>
    </>
  )
}

export default Deteksi
