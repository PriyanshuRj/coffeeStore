"use client";
import { useState, useEffect , useContext  } from 'react'
import styles from './page.module.css'
import Hero from '../components/Hero'
import { fetchStores } from '../../libs/fetchStores'
import Card from '@/components/Card'
import useTrackLocation from "../hooks/use-track-location";
import {ACTION_TYPES, StoreContext} from "../store/store";
import Link from 'next/link'
import Loading from '@/components/Loading';
export default function Banner() {
  
  const { dispatch, state } = useContext(StoreContext);
  const { coffeestores, latlong } = state;


  const [coffeeStoresError, setCoffeeStoresError] = useState("");

  useEffect(() => {
    async function getCoffeStores(){
      if(latlong){
        const stores = await fetchStores(latlong, 20);
        dispatch({
          type : ACTION_TYPES.SET_COFFEE_STORES,
          payload : {coffeeStores: stores}
        })
        
      }
      
    }
    getCoffeStores();
   
}, [latlong])

  const { locationError, isFindingLocation, handleTrachLocation } =  useTrackLocation();

  const handleOnBannerBtnClick = () => {

    handleTrachLocation();
  };

  
  return (
    <>
    {isFindingLocation? <Loading /> : undefined}
     <Hero handleOnBannerBtnClick={handleOnBannerBtnClick} locationError={locationError}/>
        {coffeestores.length ? <div className={styles.storeContainer}>
          <p className={styles.storesContainerTitle}>Stores Near Me</p>
        <div className={styles.cardGrid}>
          {coffeestores.map((coffeeStore:any,index:number)=>{
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
          </div> : <></>}
    </>
      )
}
