import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { collection, getDocs } from 'firebase/firestore'
import db from '../lib/firebase'

const Premium = () => {
    const [cookies, setCookie] = useCookies()
    const [token, setToken] = useState('')
    const [error, setError] = useState('')
    console.log(token)
    const handleSubmit = async ()=>{
        console.log("aaa")
        try {
            const tokenCollection = collection(db, 'tokens');
            console.log(tokenCollection)
            const tokenSnapshot = await getDocs(tokenCollection);
            console.log("tokenSnapshot")
            console.log(tokenSnapshot)
            const tokens = tokenSnapshot.docs.map(doc => doc.data().token);
            console.log(token)
            if (tokens.includes(token)) {
                setCookie('token', token, { path: '/' })
                window.location.href = '/scan'
            } 
            setError('Token tidak valid')
        } catch (error) {
            console.log(error)
            setError('Token tidak valid')
        }
        
    }
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <div className='flex w-full justify-center items-center min-h-[80vh] px-12'>
        <div className='border-[#D8D5D5] border-solid border-2 rounded-lg flex py-10 aspect-1 px-3 w-full  lg:w-1/4 justify-center items-center'>
            <div className='flex flex-col items-center justify-between w-full gap-4'>
                <Image src={'/img/logo.svg'} width={100} height={100} />
                <div className='flex justify-center w-full'>
                    <p className='text-xl font-semibold text-primary'>Masukkan kode/token</p>
                </div>
                <div className="w-full">
                    <input onChange={(e)=> setToken(e.target.value)} type="text" id="last_name" class=" border border-primary text-gray- text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray- dark:border-gray- dark:placeholder-gray- dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456AB" required />
                    {error && <p className='text-red-500'>{error}</p>}
                </div>
                <button
                    type='submit'
                    className='px-5 py-3 font-semibold text-white rounded-md w-fit bg-primary'
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Premium
