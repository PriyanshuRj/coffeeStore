import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Hero from '../components/Hero'
import { fetchStores } from '../../libs/fetchStores'
import Card from '@/components/Card'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'

export default async function Home() {
  const data = await fetchStores();
  // console.log(data)
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <main className={styles.main}>
        <Hero />
        <div className={styles.cardGrid}>
          {data.map((coffeeStore:any,index:number)=>{
            return   <Link href={"/coffeestore/" + coffeeStore.id} >
            <Card 
              className={styles.card}
              name= {coffeeStore.name}
              address = {coffeeStore.address}
              id={coffeeStore.id}
              imageURL="https://source.unsplash.com/random/?coffee"
              />
              </Link>
          })}
        </div>
      </main>
    </>
  )
}
