import Image from 'next/image'

const CardPembelian = ({ image, link, delay }) => {
  return (
    <a data-aos-delay={delay} data-aos-duration="1000" data-aos="zoom-in-up" target='_blank' href={link} className='relative flex items-center justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <Image className='' src={image} width={250} height={250} />
    </a>
  )
}

export default CardPembelian
