import Image from 'next/image'
import Container from './container'
import CardProduk from './CardProduk'

const ProdukKami = () => {
  return (
    <>
      <Container>
        <div className='flex flex-col w-full '>
          <div className='flex justify-center w-full'>
            <h1 className='text-5xl font-bold text-primary'>
              Produk <span className='text-secondary'>Kami</span>{' '}
            </h1>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-2xl font-bold text-primary'>
              Produk Piring <span className='text-secondary'>Dewasa</span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-7'>
              <div>
                <CardProduk />
              </div>
              <div>
                <CardProduk />
              </div>
              <div>
                <CardProduk />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-2xl font-bold text-primary'>
              Produk Piring <span className='text-merah'>Anak</span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-7'>
              <div>
                <CardProduk />
              </div>
              <div>
                <CardProduk />
              </div>
              <div>
                <CardProduk />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProdukKami
