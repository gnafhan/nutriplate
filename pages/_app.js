import { ThemeProvider } from 'next-themes'
import '../css/tailwind.css'
import { DataProvider } from '../context/DataContext'
import { ConfirmDataProvider } from '../context/ConfirmDataContext'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      <DataProvider>
        <ConfirmDataProvider>
          <Component {...pageProps} />
        </ConfirmDataProvider>
      </DataProvider>
    </ThemeProvider>
  )
}

export default MyApp
