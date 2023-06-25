
import { use } from 'react'
import styles from './page.module.css'
import Banner from './Banner';
import { fetchStores } from '../../libs/fetchStores'
import Card from '@/components/Card'
import Link from 'next/link'

export default function Home() {
  
  const data = staticProps();
  return (
    <>
      <main className={styles.main}>
       <Banner />
        <div className={styles.storeContainer}>
          <p className={styles.storesContainerTitle}>Greater Noida Stores</p>
        <div className={styles.cardGrid}>
          {data.map((coffeeStore:any,index:number)=>{
            return   <Link key={coffeeStore.id} href={"/coffeestore/" + coffeeStore.id} >
            <Card 
              className={styles.card}
              key={coffeeStore.id}
              name= {coffeeStore.name}
              address = {coffeeStore.address}
              id={coffeeStore.id}
              imageURL= {coffeeStore.imgUrl}
              />
              </Link>
          })}
        </div>
          </div>
      </main>
    </>
  )
}
function staticProps(){
  "use Server";
  const data = use(fetchStores());
  return data;
}