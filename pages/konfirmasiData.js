import { Datepicker, Label, TextInput } from 'flowbite-react'
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react';
import { ConfirmDataContext } from '../context/ConfirmDataContext';
import { saveMakanan } from '../util/saveMakanan';
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';


export default function KonfirmasiData (params) {
    const {dataConfirm, setDataConfirm, imageUrl, setImageUrl} = useContext(ConfirmDataContext)
    const [time, setTime] = useState('');
    const judulRef = useRef(null)
    const tanggalRef = useRef(null)
    const waktuRef = useRef(null)
    const route = useRouter()
    const [cookies, setCookie] = useCookies()
    
    useEffect(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        setTime(`${hours}:${minutes}`);
      }, []);

      const handleConfirm = async ()=>{
        const finalData = {
            token: cookies.token,
            judul: judulRef.current.value,
            tanggal: tanggalRef.current.value || new Date(),
            waktu: waktuRef.current.value,
            makanan: dataConfirm,
            image: imageUrl
        }
        try {
            const save = await  saveMakanan(finalData)
            if(save.message == 'berhasil'){
              route.push('/home')
            }
        } catch (error) {
            console.log(error)
        }
      }

  return (
    <>
      <div className='flex justify-center w-full '>
        <div className='container max-w-sm mb-10 '>
          <div>
            <h1 className='w-full my-5 text-lg font-semibold'>
              Hasil Makananmu
            </h1>
          </div>
          <div className='w-full h-[25vh] rounded-xl shadow-lg object-cover relative'>
            <Image
              src={'/img/ikan.jpg'}
              fill
              className='object-cover rounded-xl'
            />
          </div>
          <div className='flex flex-col justify-between w-full gap-3 p-2 mt-5 border-2 shadow-md rounded-xl border-primary'>
            <p className='text-sm font-medium'>Estimasi total kalori</p>
            <div className='w-full text-lg font-medium text-end'>{Math.round(dataConfirm.reduce((prev, current)=>prev + current.calories, 0))} Kkal</div>
          </div>
          <div className='grid w-full grid-cols-3 gap-2 mt-2'>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total karbohidrat</p>
              <div className='w-full text-lg font-medium text-end'>{Math.round(dataConfirm.reduce((prev, current)=>prev + current.carbs, 0))} gram</div>
            </div>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total protein</p>
              <div className='w-full text-lg font-medium text-end'>{Math.round(dataConfirm.reduce((prev, current)=>prev + current.proteins, 0))} gram</div>
            </div>
            <div className='flex flex-col justify-between w-full gap-3 p-2 border-2 shadow-md rounded-xl border-primary'>
              <p className='text-sm font-medium'>Estimasi total lemak</p>
              <div className='w-full text-lg font-medium text-end'>{Math.round(dataConfirm.reduce((prev, current)=>prev + current.fats, 0))} gram</div>
            </div>
          </div>
          <div>
            <form className='flex flex-col w-full gap-2 mt-2'>
              <div>
                <div className='block mb-2'>
                  <Label htmlFor='makanan' value='Judul/nama makanan' />
                </div>
                <TextInput
                  ref={judulRef}
                  color={'red'}
                  id='makanan'
                  type='text'
                  placeholder='Makan Siang'
                  defaultValue={'Makan Siang'}
                  required
                />
              </div>
              <div>
                <div className='block mb-2'>
                  <Label htmlFor='waktu' value='Kapan kamu makan ini' />
                </div>
                <div className='flex flex-row justify-between w-full gap-2 '>
                  <Datepicker onChange={(e)=> tanggalRef.current.value = e.currentTarget.value} ref={tanggalRef} icon={''} className='flex-1' id='waktu' defaultDate={new Date()} />
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
                      ref={waktuRef}
                      type='time'
                      id='time'
                      className='bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      defaultValue={time}
                      onChange={(e)=> {console.log(e.currentTarget.value)}}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
              <button onClick={handleConfirm} className='w-full py-2 mt-3 text-lg font-semibold text-center text-white rounded-lg bg-primary px3 font-poppins'>Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}


