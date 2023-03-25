import '@/styles/globals.css'
import Layout from '../layouts/default/index'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => {return <Layout>{page}</Layout>})
  return (
    <SessionProvider
        options={{
            staleTime: 0,
            refetchInterval: 0
        }}
        session={pageProps.session} >
        {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
)
}
