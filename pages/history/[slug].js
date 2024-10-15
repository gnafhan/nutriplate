import { Datepicker, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import { getMakananById } from "../../util/saveMakanan";
import { calculateTotalNutrition, timestampToDate } from "../../util/validation";
import { useRouter } from "next/router";

export default function DetailHistory({makanan}) {
    const router = useRouter()
    const data = JSON.parse(makanan)
    const {totalCalories, totalFats, totalCarbs, totalProteins} = calculateTotalNutrition([JSON.parse(makanan)])
    return(
        <>
      <div className='flex justify-center w-full px-5 '>
        <div className='container max-w-sm mb-10 '>
          <div>
            <h1 className='w-full my-5 text-lg font-semibold'>
              Hasil Makananmu
            </h1>
          </div>
          <div className='w-full h-[25vh] rounded-xl shadow-lg object-cover relative'>
            <Image
              src={data.image}
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <div className='flex flex-col justify-between w-full gap-3 p-2 mt-5 border-2 shadow-md rounded-xl border-primary'>
            <p className='text-sm font-medium'>Estimasi total kalori</p>
            <div className='w-full text-lg font-medium text-end'>{totalCalories} Kkal</div>
          </div>
          <div className='grid w-full grid-cols-3 gap-2 mt-2'>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total karbohidrat</p>
              <div className='w-full text-lg font-medium text-end'>{totalCarbs} gram</div>
            </div>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total protein</p>
              <div className='w-full text-lg font-medium text-end'>{totalProteins} gram</div>
            </div>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total lemak</p>
              <div className='w-full text-lg font-medium text-end'>{totalFats} gram</div>
            </div>
          </div>
          <div>
            <form className='flex flex-col w-full gap-2 mt-2'>
              <div>
                <div className='block mb-2'>
                  <Label htmlFor='makanan' value='Judul/nama makanan' />
                </div>
                <TextInput
                //   ref={judulRef}
                  color={'red'}
                  id='makanan'
                  type='text'
                  placeholder='Makan Siang'
                  defaultValue={data.judul}
                  required
                  disabled
                />
              </div>
              <div>
                <div className='block mb-2'>
                  <Label htmlFor='waktu' value='Kapan kamu makan ini' />
                </div>
                <div className='flex flex-row justify-between w-full gap-2 '>
                  <Datepicker
                    disabled
                    icon={''} className='flex-1' id='waktu' 
                    defaultDate={new Date(timestampToDate(data.tanggal))} 
                    />
                  <div className='relative'>
                    <div className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none'>
                      <svg
                        className='w-4 h-4 text-gray-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='time'
                      id='time'
                      className='bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      defaultValue={data.waktu}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
              <button 
              onClick={()=> router.back()}
               className='w-full py-2 mt-3 text-lg font-semibold text-center text-white rounded-lg bg-primary px3 font-poppins'>Kembali</button>
          </div>
        </div>
      </div>
    </>
    )
};

export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    const response = await getMakananById(slug);
    
    if (response.message === "gagal") {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            makanan: JSON.stringify(response.data),
        },
    };
};