import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Hero from '../../components/Hero'
export default function Home() {
  return (
    <>
    <Head>
    <title>My page title</title>
    </Head>
    <main className={styles.main}>
      <Hero />
    </main>
    </>
  )
}
