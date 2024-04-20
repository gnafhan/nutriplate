import Image from 'next/image'
import Container from './container'

const Manfaat = () => {
  return (
    <>
      <Container className=' rounded-xl lg:bg-gradient-custom '>
        <div className='flex flex-col md:flex-row justify-start gap-x-10 items-center bg-gradient-custom lg:bg-none p-5 rounded-lg    '>
          <div className='flex lg:w-5/12 w-full lg:justify-end '>
            <div className='w-full flex justify-end'>
              <div className='relative w-full lg:w-10/12 h-96'>
                <Image
                  src={'/img/piring.png'}
                  fill
                  className='flex  object-contain'
                  alt='Piring'
                />
              </div>
            </div>
          </div>
          <div className='flex lg:w-6/12 flex-col gap-3'>
            <div className='bg-white dark:bg-black rounded-full py-3 px-1'>
              <h1 className='font-bold text-4xl text-center text-primary'>
                Manfaat <span className='text-secondary'>SmartPlate</span>
              </h1>
            </div>
            <p className='text-justify leading-relaxed text-white font-poppins'>
              SmartPlate merupakan piring pemorsian yang bertujuan untuk
              mengatur porsi makan individu disesuaikan dengan kondisi
              kesehatannya. Piring ini akan memberikan edukasi dan sebagai
              tindakan preventif kepada masyarakat mengenai pola makan yang
              seimbang sesuai dengan kondisi tubuh masing-masing sehingga
              diharapkan masyarakat dapat menerapkan pola makan seimbang dengan
              lebih mudah.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Manfaat
