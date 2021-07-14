import Head from 'next/head'
import Header from '../components/Header'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Next.JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Aguardando Deploy</h1>
      </main>
    </div>
  )
}
