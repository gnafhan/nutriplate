import Image from 'next/image'
import Container from './container'
import Link from 'next/link'

const ProgramDiet = () => {
  return (
    <>
      <Container>
        <Link href={'/resep-makanan'}  className='relative flex items-center justify-center w-full rounded-lg cursor-pointer h-72'>
          <Image
            src={'/img/programDiet.png'}
            alt='ProgramDiet'
            fill
            className='object-cover rounded-lg'
          />
          <div data-aos-duration="1000" data-aos="zoom-in-up" className='absolute'>
            <div className='px-6 py-3 bg-white rounded-full shadow-2xl '>
              <h1 className='text-4xl font-bold text-primary'>
                Resep <span className='text-secondary'> Makanan</span>
              </h1>
            </div>
            <p className='font-bold text-white'>
              Klik Untuk Mencari Tahu Lebih Lanjut
            </p>
          </div>
        </Link>
      </Container>
    </>
  )
}

export default ProgramDiet
