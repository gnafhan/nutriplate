import Image from 'next/image'
import Container from './container'
import CardPembelian from './CardPembelian'

const Pembelian = ({ image }) => {
  return (
    <>
      <Container>
        <div className='flex flex-col w-full '>
          <div className='flex justify-center w-full'>
            <h1 className='text-5xl font-bold text-primary'>
              Tersedia <span className='text-secondary'>di</span>{' '}
            </h1>
          </div>
          <div>
            <div className='grid grid-cols-1 mt-5 lg:grid-cols-3 gap-y-5'>
              <CardPembelian link={'#'} image={'/img/brands/lazada.svg'} />
              <CardPembelian link={'http://shopee.co.id/nutriplateugm'} image={'/img/brands/shopee.svg'} />
              <CardPembelian link={'#'} image={'/img/brands/tokped.svg'} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pembelian
