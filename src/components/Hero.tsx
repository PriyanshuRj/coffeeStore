import React from 'react'
import styles from "../../styles/hero.module.css"
import Image from 'next/image'
export default function Hero({handleOnBannerBtnClick, locationError}:{handleOnBannerBtnClick:any, locationError: string}) {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.titleText}>

                    <p className={styles.title}>
                        <span>
                            Midnight
                        </span>
                        <span>
                            Frappuccino
                        </span>
                    </p>
                    <p className={styles.description}>Discover exceptional coffee beans from across the globe, each with a unique story and flavor profile, curated for your indulgence.</p>
                    <button className={styles.viewStorButton} onClick={handleOnBannerBtnClick}>
                        View Stores nearby
                    </button>
                    {locationError.length ? <p className='error'>{locationError}</p> : undefined}
                </div>
                <Image className={styles.heroImage} src="/static/hero.png" alt="hero banner" height={400} width={300} />
            </div>

        </div>
    )
}
