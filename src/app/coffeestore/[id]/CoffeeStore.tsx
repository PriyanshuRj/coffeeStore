"use client";
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import styles from "../../../../styles/store.module.css"
import cls from "classnames"
import Link from 'next/link'
import { Back, Location, Star1, Map } from 'iconsax-react'
import { StoreContext } from '@/store/store';

export default function CoffeeStorePage(initialProps: any) {
    const id = initialProps.id;
    const { state } = useContext(StoreContext);
    const [storeData, setStoreData] = useState(initialProps);
    const { coffeestores } = state;
    const handleCreateCoffeeStore = async (storeData: any) => {
        
        
        try {

            const { name, imgUrl, address,id,votes } = storeData;
            console.log(name, imgUrl, address,id)
            if(name && id){

                const body = JSON.stringify({name,
                                imgUrl,
                                address,
                                id,
                                votes
                });
                const options = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json'
                    },
                    body
                }
                const response = await fetch("/api/createCoffeeStore", 
                        options)
                const dpCoffeeStore = await response.json();
                console.log(dpCoffeeStore);
            }
        } catch (e){
            console.log("Error ",e)
        }
    }
    useEffect(() => {
        if(!initialProps.name && !initialProps.address){

            if (coffeestores.length > 0) {
                const store = coffeestores.find((store: any) => store.id == id)
                setStoreData(store);
                handleCreateCoffeeStore(store);
            }
        }
        else {
            handleCreateCoffeeStore(initialProps);
        }
    }, [id])

    const { name, imgUrl, address } = storeData;

    return (
        <div className={styles.store}>
            <Link href="/" className={styles.backtohome}>
                <Back
                    size="20"
                    color="#714625"
                    className={styles.backicon}
                />
                <p>Back to home</p>
            </Link>
            <p className={styles.name}>{name}</p>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={imgUrl ? imgUrl : "https://source.unsplash.com/random/?coffee"} alt={name ? name : "caffee"} width={500} height={500} />
                </div>
                <div className={cls('glass', styles.content)}>
                    <div className={styles.contentLine}>
                        <Location
                            size="28"
                            color="#714625"
                            variant="Bulk"
                            className={styles.contentLineLogo}
                        />
                        <span>

                            {address ? address : "Store Adress to be revieled soon"}
                        </span>
                    </div>
                    <div className={styles.contentLine}>
                        <Map
                            size="28"
                            color="#714625"
                            variant="Bulk"
                            className={styles.contentLineLogo}
                        />
                        <span>

                            Please Visit our coffee store
                        </span>
                    </div>
                    <div className={styles.contentLine}>
                        <Star1
                            size="28"
                            color="#714625"
                            variant="Bulk"
                            className={styles.contentLineLogo}
                        />
                        <span>

                            1
                        </span>
                    </div>
                    <button className={styles.upvotebutton}>
                        Up vote
                    </button>
                </div>
            </div>
        </div>
    )
}
