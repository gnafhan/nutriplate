import Image from 'next/image'
import Container from './container'

const Hero2 = () => {
  return (
    <>
      <Container className='py-0'>
        <div className='flex items-center w-full '>
          <div className='w-full max-w-screen-xl mb-8'>
            <div className='lg:h-[60vh] h-[30vh] w-full relative '>
              <Image
                src={'/img/banner.png'}
                alt='Banner'
                className='object-cover w-full rounded-lg'
                fill={true}
                draggable={false}
              />
            </div>
            <div className='flex flex-col items-center justify-center gap-2 py-10'>
              <h1 className='font-bold text-7xl text-primary'>
                Nutri<span className='text-secondary'>Plate</span>
              </h1>
              <h4>Portioning Precision, Health in Every Division</h4>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero2
