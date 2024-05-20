import Image from 'next/image'
import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataContext'

import { FoodVisor } from '../data/FoodVisor'

const result = () => {
  const { data, setData, screenshot, setScreenshot, size } =
    useContext(DataContext)
  console.log(screenshot, data)
  const canvasRef = useRef(null)
  const imageRef = useRef(null)

  const saveImageToLocalStorage = () => {
    localStorage.setItem('capturedImage', screenshot)
    console.log('Image saved to localStorage')
  }

  useEffect(() => {
    console.log(data)
    if (!screenshot) {
      setScreenshot(localStorage.getItem('capturedImage'))
    } else {
      saveImageToLocalStorage()
    }
  }, [])

  const handleCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const image = imageRef.current
    const color = [
      '#5BBCFF',
      '#FFFAB7',
      '#FFD1E3',
      '#7EA1FF',
      '#836FFF',
      '#15F5BA',
      '#86A7FC'
    ]
    const textColor = ['#000000', '#000000', '#000000', '#000000']

    canvas.width = image.width
    canvas.height = image.height

    data.items.map((predictions, index) => {
      const selectedConfidence = predictions.food[0].food_info.display_name
      const predictedQuantity = predictions.food[0].quantity + ' gr'
      const x = predictions.position.x * image.width
      const y = predictions.position.y * image.height
      const width = predictions.position.width * image.width
      const height = predictions.position.height * image.height
      if (index > color.length - 1) {
        index = index % color.length
      }
      ctx.strokeStyle = color[index]
      ctx.lineWidth = 4
      ctx.strokeRect(x, y, width, height)
      ctx.fillStyle = color[index]
      const textWidth = ctx.measureText(selectedConfidence).width
      const quantityWidth = ctx.measureText(predictedQuantity).width
      const quantityHeight = 16
      const textHeight = 16
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
      //   fill rect on bottom right corner
      ctx.fillRect(
        x + width - quantityWidth,
        y + height - quantityHeight,
        quantityWidth + 4,
        quantityHeight + 4
      )
      ctx.fillStyle = '#000000'
      ctx.font = 'poppins'
      ctx.fillText(selectedConfidence, x, y + 10)
      ctx.fillText(predictedQuantity, x + width - quantityWidth, y + height - 5)
    })
  }

  const imageSrc = `data:image/jpeg;base64,${screenshot}`
  return (
    <>
      <div className='container relative flex justify-center max-w-screen-sm p-0 mx-auto bg-cyan-400 xl:px-0'>
        <Image
          ref={imageRef}
          className='absolute'
          src={imageSrc}
          width={600}
          height={600}
        />
        <canvas ref={canvasRef} className='absolute z-10' />
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
