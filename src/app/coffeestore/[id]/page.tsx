import React from 'react'
import Image from 'next/image'
import { fetchStores } from '../../../../libs/fetchStores'
import styles from "../../../../styles/store.module.css"
import cls from "classnames"
import Link from 'next/link'
import { Back, Location, Star1, Map } from 'iconsax-react'
export default async function CoffeeStore({ params }: { params: { id: string } }) {
  console.log(params.id)
  const data = await fetchStores();
  const store = data.find((store: any) => store.id == params.id)
  console.log(store)
  return (
    <div className={styles.store}>
      <Link href="/" className={styles.backtohome}>
        <Back
          size="20"
          color="#714625"
          className={styles.backicon}
        />
        <p >Back to home</p>
      </Link>
      <p className={styles.name}>{store.name}</p>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={store.imgUrl} alt={store.name} width={500} height={500} />
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

              {store.address ? store.address : "Store Adress to be revieled soon"}
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
