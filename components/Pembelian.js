import Image from 'next/image'
import Container from './container'
import CardPembelian from './CardPembelian'

const Pembelian = ({ image }) => {
  return (
    <>
      <Container>
        <div className='flex flex-col w-full '>
          <div className='flex justify-center w-full'>
            <h1 data-aos-duration="1000" data-aos="zoom-in-up" className='text-5xl font-bold text-primary'>
              Tersedia <span className='text-secondary'>di</span>{' '}
            </h1>
          </div>
          <div>
            <div className='grid grid-cols-1 mt-5 lg:grid-cols-3 gap-y-5'>
              <CardPembelian delay={'0'} link={'https://api.whatsapp.com/send/?phone=6285717035472&text&type=phone_number&app_absent=0'} image={'/img/brands/whatsapp.png'} />
              <CardPembelian delay={'500'} link={'http://shopee.co.id/nutriplateugm'} image={'/img/brands/shopee.svg'} />
              <CardPembelian delay={'1000'} link={'https://tokopedia.link/hnQeydRQ5Kb'} image={'/img/brands/tokped.svg'} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Pembelian
