import Image from 'next/image'
import React from 'react'

export const Feature = ({image, children, link}) => {
  return (
    <a href={link} className='flex flex-col justify-center w-full gap-2 text-center itmes-center '>
    <div className='flex self-center p-2 border-2 rounded-md border-primary w-fit'>
      <Image src={image} width={20} height={20} />
    </div>
    {children}
  </a>
  )
}
