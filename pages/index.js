import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'

import { benefitOne, benefitTwo } from '../components/data'
import Video from '../components/video'
import Benefits from '../components/benefits'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Faq from '../components/faq'
import PopupWidget from '../components/popupWidget'
import Hero2 from '../components/Hero2'
import Manfaat from '../components/Manfaat'
import ProdukKami from '../components/ProdukKami'
import ProgramDiet from '../components/ProgramDiet'
import Pembelian from '../components/Pembelian'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { collection, getDocs } from 'firebase/firestore'
import db from '../lib/firebase'
import { useRouter } from 'next/router'


const Home = () => {
  const [cookies, setCookie] = useCookies()
  const router = useRouter()
  useEffect(() => {
    AOS.init();

    async function checkToken(){
      if (cookies.token) {
        const tokenCookie = cookies.token
        const tokenCollection = collection(db, 'tokens');
        const tokenSnapshot = await getDocs(tokenCollection);
        const tokens = tokenSnapshot.docs.map(doc => doc.data().token);
        if (tokens.includes(tokenCookie)) {
            router.push('/home');
          }
      }
  }
  checkToken()
    
  }, [])
  return (
    <>
      <Head>
        <title>Nutriplate</title>
        <meta name='description' content='Nutriplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero2 />
      <Manfaat />
      {/* <ProdukKami /> */}
      <ProgramDiet />
      <Pembelian />
      <Footer />
      <PopupWidget />
    </>
  )
}

export default Home

export const getServerSideProps = async ({ req, res }) => {
  const cookies = req.cookies
  async function checkToken(){
    if (cookies.token) {
      const tokenCookie = cookies.token
      const tokenCollection = collection(db, 'tokens');
      const tokenSnapshot = await getDocs(tokenCollection);
      const tokens = tokenSnapshot.docs.map(doc => doc.data().token);
      console.log(tokens)
      if (tokens.includes(tokenCookie)) {
        res.writeHead(302, { location: `/home` });
        res.end();
        return {props:{}}
        }
    }
    return {props:{}}
  }
  return checkToken()
}