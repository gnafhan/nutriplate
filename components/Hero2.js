import Image from 'next/image'
import Container from './container'

const Hero2 = () => {
  return (
    <>
      <Container className='py-0'>
        <div className='flex items-center w-full '>
          <div className='max-w-screen-xl mb-8 w-full'>
            <div className='lg:h-[60vh] h-[30vh] w-full relative '>
              <Image
                src={'/img/banner.png'}
                alt='Banner'
                className='w-full object-cover rounded-lg'
                fill={true}
                draggable={false}
              />
            </div>
            <div className='py-10 flex justify-center flex-col items-center gap-2'>
              <h1 className='text-7xl font-bold text-primary'>
                Smart<span className='text-secondary'>Plate</span>
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
