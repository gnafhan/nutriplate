import Image from 'next/image'
import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataContext'

const predictionData = [
  {
    mid: '/m/047vlmn',
    name: 'Outerwear',
    score: 0.59962904,
    boundingPoly: {
      normalizedVertices: [
        {
          x: 0.0099487305,
          y: 0.40429688
        },
        {
          x: 0.96875,
          y: 0.40429688
        },
        {
          x: 0.96875,
          y: 0.9921875
        },
        {
          x: 0.0099487305,
          y: 0.9921875
        }
      ]
    }
  },
  {
    mid: '/m/09j2d',
    name: 'Clothing',
    score: 0.58714676,
    boundingPoly: {
      normalizedVertices: [
        {
          x: 0.0099487305,
          y: 0.40429688
        },
        {
          x: 0.96875,
          y: 0.40429688
        },
        {
          x: 0.96875,
          y: 0.9921875
        },
        {
          x: 0.0099487305,
          y: 0.9921875
        }
      ]
    }
  },
  {
    mid: '/m/01g317',
    name: 'Person',
    score: 0.5839288,
    boundingPoly: {
      normalizedVertices: [
        {
          x: 0.02734375,
          y: 0.025268555
        },
        {
          x: 0.96875,
          y: 0.025268555
        },
        {
          x: 0.96875,
          y: 1
        },
        {
          x: 0.02734375,
          y: 1
        }
      ]
    }
  }
]

const result = () => {
  const { data, setData, screenshot, setScreenshot, size } =
    useContext(DataContext)
  console.log(screenshot, data)
  const canvasRef = useRef(null)
  const imageRef = useRef(null)
  console.log(size)

  const saveImageToLocalStorage = () => {
    localStorage.setItem('capturedImage', screenshot)
    console.log('Image saved to localStorage')
  }

  useEffect(() => {
    if (!screenshot) {
      setScreenshot(localStorage.getItem('capturedImage'))
    } else {
      saveImageToLocalStorage()
    }

    // setData(predictionData)
  }, [])

  const handleCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = imageRef.current
    const color = ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF']
    const textColor = ['#000000', '#000000', '#000000', '#000000']

    canvas.width = image.width
    canvas.height = image.height
    data.map((prediction, index) => {
      const x = prediction.boundingPoly.normalizedVertices[0].x * image.width
      const y = prediction.boundingPoly.normalizedVertices[0].y * image.height
      const width =
        (prediction.boundingPoly.normalizedVertices[1].x -
          prediction.boundingPoly.normalizedVertices[0].x) *
        image.width
      const height =
        (prediction.boundingPoly.normalizedVertices[2].y -
          prediction.boundingPoly.normalizedVertices[0].y) *
        image.height

      if (index > color.length - 1) {
        index = index % color.length
      }

      ctx.strokeStyle = color[index]
      ctx.lineWidth = 4
      console.log(x, y, width, height, prediction.name)
      ctx.strokeRect(x, y, width, height)
      ctx.fillStyle = color[index]
      const textWidth = ctx.measureText(prediction.name).width
      const textHeight = parseInt('16px sans-serif', 10)
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)

      ctx.fillStyle = textColor[index]
      ctx.fillText(prediction.name, x, y + 10)
    })
  }

  const imageSrc = `data:image/jpeg;base64,${screenshot}`
  return (
    <>
      <div className='container relative flex justify-center max-w-screen-sm p-0 mx-auto bg-cyan-400 xl:px-0 h-[50vh]'>
        <Image
          ref={imageRef}
          className='absolute object-cover'
          src={imageSrc}
          fill
        />
        <canvas ref={canvasRef} className='absolute z-10 ' />
      </div>
      <button
        onClick={handleCanvas}
        className='absolute p-4 text-white bg-black rounded-full opacity-50 bottom-10'
      >
        Show Canvas
      </button>
    </>
  )
}

export default result
