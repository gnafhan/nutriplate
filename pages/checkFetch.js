import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const CheckFetch = () => {
  const [data, setData] = useState(null)
  const [file, setFile] = useState(null)

  const handleChange = e => {
    setFile(e.target.files[0])
  }
  const imageRef = useRef(null)
  // useEffect(() => {
  //   setImage(localStorage.getItem('capturedImage').split(',')[1])
  // }, [])
  const fetchData = async () => {
    const image = imageRef.current.getScreenshot()
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL,
        {
          method: 'POST',
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_KEY_AI,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ image: image })
        }
      )
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <input onChange={handleChange} type='file' />
      <Webcam
        ref={imageRef}
        audio={false}
        screenshotFormat='image/png'
        videoConstraints={{ facingMode: 'user' }}
      />

      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default CheckFetch
