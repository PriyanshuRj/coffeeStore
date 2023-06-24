"use client";
import { useState, useEffect , useContext  } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import Hero from '../components/Hero'
import { fetchStores } from '../../libs/fetchStores'
import Card from '@/components/Card'
import useTrachLocation from "../hooks/use-track-location";
import {ACTION_TYPES, StoreContext} from "../store/store";
import Link from 'next/link'

export default async function Home() {
  
  const { dispatch, state } = useContext(StoreContext);
  const { coffeeStores, latlong } = state;
 


  const [coffeeStoresError, setCoffeeStoresError] = useState("");
  //  console.log(latlong, coffeeStoresError)
  const handleOnBannerBtnClick = () => {
    console.log("called",latlong, coffeeStoresError)
    handleTrachLocation();
    setCoffeeStoresError("jguh")
  };

  useEffect(() => {
    console.log("these ",latlong)
}, [latlong])

  const { locationError, isFindingLocation, handleTrachLocation } = await useTrachLocation();


  const data = await fetchStores();

  return (
    <>
      <main className={styles.main}>
        cc {coffeeStoresError}
        <Hero handleOnBannerBtnClick={handleOnBannerBtnClick}/>
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
      </main>
    </>
  )
}
