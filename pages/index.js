import Head from 'next/head'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp 2</title>
      </Head>
      <Sidebar />
    </div>
  )
}
