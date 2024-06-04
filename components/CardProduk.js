import Image from 'next/image'
import { useState } from 'react'

const CardProduk = ({image}) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className='relative flex items-center justify-center h-64 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <button
        onClick={() => setIsClicked(prev => !prev)}
        className='absolute top-3 left-3 p-3 transition-all  bg-primary rounded-lg hover:bg-[#426caf] cursor-pointer active:bg-[#2d466e]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className={`w-6 h-6 ${isClicked ? 'fill-red-600' : 'fill-slate-100'}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
          />
        </svg>
      </button>
      <Image className='object-contain' src={image} fill />
    </div>
  )
}

export default CardProduk
