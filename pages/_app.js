import { ThemeProvider } from 'next-themes'
import '../css/tailwind.css'
import { DataProvider } from '../context/DataContext'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeProvider>
  )
}

export default MyApp
