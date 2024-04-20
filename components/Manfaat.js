import Image from 'next/image'
import Container from './container'

const Manfaat = () => {
  return (
    <>
      <Container className=' rounded-xl lg:bg-gradient-custom'>
        <div className='flex flex-col items-center justify-start p-5 rounded-lg md:flex-row gap-x-10 bg-gradient-custom lg:bg-none '>
          <div className='flex w-full lg:w-5/12 lg:justify-end '>
            <div className='flex justify-end w-full'>
              <div className='relative w-full lg:w-10/12 h-96'>
                <Image
                  src={'/img/piring.png'}
                  fill
                  className='flex object-contain'
                  alt='Piring'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:w-6/12'>
            <div className='px-1 py-3 bg-white rounded-full dark:bg-black'>
              <h1 className='text-4xl font-bold text-center text-primary'>
                Manfaat <span className='text-secondary'>NutriPlate</span>
              </h1>
            </div>
            <p className='leading-relaxed text-justify text-white font-poppins'>
              Nutriplate merupakan piring pemorsian yang bertujuan untuk
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
