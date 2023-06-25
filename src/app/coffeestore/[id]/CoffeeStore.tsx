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

    useEffect(() => {
        if (coffeestores.length > 0) {
            const store = coffeestores.find((store: any) => store.id == id)
            setStoreData(store);
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
                    <Image className={styles.image} src={imgUrl} alt={name} width={500} height={500} />
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
