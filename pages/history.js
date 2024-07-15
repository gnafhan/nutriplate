import { BottomNav } from '../components/BottomNav'
import { getMakananByToken } from '../util/saveMakanan'
import { calculateTotalNutrition, formatDate, isToday, timestampToDate } from '../util/validation'

export default function History ({ data, todayData }) {
  const { totalCalories, totalFats, totalCarbs, totalProteins} = todayData;
  return (
    <div className='flex justify-center w-full '>
      <div className='container max-w-sm mb-10 font-poppins '>
        <div className='flex items-center justify-between w-full'>
          <h1 className='w-full my-5 text-lg font-semibold'>Statistik</h1>
          <a className='text-sm font-medium text-gray-500' href='/statistic'>
            Selengkapnya
          </a>
        </div>
        <div className='grid w-full grid-cols-3 gap-2'>
          <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
            <p className='text-sm font-medium'>Estimasi Kalori hari ini</p>
            <div className='w-full text-lg font-medium text-end'>{totalCalories} Kkal</div>
          </div>
          <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
            <p className='text-sm font-medium'>Estimasi Karbohidrat hari ini</p>
            <div className='w-full text-lg font-medium text-end'>{totalCarbs} gram</div>
          </div>
          <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
            <p className='text-sm font-medium'>Estimasi Lemak hari ini</p>
            <div className='w-full text-lg font-medium text-end'>{totalFats} gram</div>
          </div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <h1 className='w-full mt-5 text-lg font-semibold'>Riwayat Makanmu</h1>
        </div>
        {JSON.parse(data).map((item, index)=>(
        <div className='flex items-end justify-between w-full gap-3 p-3 mt-5 border-2 shadow-lg rounded-xl border-primary'>
          <div className='flex flex-col'>
            <p className='text-sm font-semibold'>{item.judul}</p>
            <p className='mt-1 text-xs font-medium text-gray-500'>
              {formatDate(item.tanggal)}
            </p>
          </div>
          <div className='flex items-end justify-end h-full'>
            <a href='#' className='text-sm text-gray-500 '>
              Selengkapnya
            </a>
          </div>
        </div>

        ))}
        <BottomNav />
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const data = await getMakananByToken(req.cookies.token)
  const convertedData = data.data.map(item => ({
    ...item,
    tanggal: timestampToDate(item.tanggal)
  }))
  const todayData = data.data
    .filter(item => isToday(item.tanggal))
    .map(item => ({
      ...item,
      tanggal: timestampToDate(item.tanggal)
    }))
    const statistik = calculateTotalNutrition(todayData)
    console.log(statistik)

  return {
    props: {
      data: JSON.stringify(convertedData),
      todayData: statistik
    }
  }
}
