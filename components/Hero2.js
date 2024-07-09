import Image from 'next/image'
import Container from './container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'

const Hero2 = () => {
  return (
    <>
      <Container className='py-0'>
        <div className='flex items-center w-full '>
          <div className='w-full max-w-screen-xl mb-8'>
            <Swiper 
            modules={[Autoplay, Navigation, Pagination, Scrollbar, Controller]}
            autoplay={{ delay: 3000 }}
            className='lg:h-[60vh] h-[30vh] w-full relative '>
              <SwiperSlide>
              <div className='w-full h-full'>
              <Image
                src={'/img/slide/slide1.svg'}
                alt='Banner'
                className='object-contain w-full rounded-lg'
                fill={true}
                draggable={false}
              />

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='w-full h-full'>
              <Image
                src={'/img/slide/slide2.svg'}
                alt='Banner'
                className='object-contain w-full rounded-lg'
                fill={true}
                draggable={false}
              />

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='w-full h-full'>
              <Image
                src={'/img/slide/slide3.svg'}
                alt='Banner'
                className='object-contain w-full rounded-lg'
                fill={true}
                draggable={false}
              />

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='w-full h-full'>
              <Image
                src={'/img/slide/slide4.svg'}
                alt='Banner'
                className='object-contain w-full rounded-lg'
                fill={true}
                draggable={false}
              />

              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='w-full h-full'>
              <Image
                src={'/img/slide/slide5.png'}
                alt='Banner'
                className='object-contain w-full rounded-lg'
                fill={true}
                draggable={false}
              />

              </div>
              </SwiperSlide>
            </Swiper>
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
