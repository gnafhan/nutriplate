import Image from 'next/image'
import Container from './container'

const ProgramDiet = () => {
  return (
    <>
      <Container>
        <div className='relative flex items-center justify-center w-full rounded-lg cursor-pointer h-72'>
          <Image
            src={'/img/programDiet.png'}
            alt='ProgramDiet'
            fill
            className='object-cover rounded-lg'
          />
          <div className='absolute'>
            <div className='px-6 py-3 bg-white rounded-full shadow-2xl '>
              <h1 className='text-4xl font-bold text-primary'>
                Program <span className='text-secondary'> Diet</span>
              </h1>
            </div>
            <p className='font-bold text-white'>
              Klik Untuk Mencari Tahu Lebih Lanjut
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProgramDiet
