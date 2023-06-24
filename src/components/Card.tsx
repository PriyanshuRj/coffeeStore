import React from 'react'
import cls from 'classnames'
import styles from "../../styles/card.module.css"
import Image from 'next/image'
export default function Card(props: any) {
  return (
    <div key={props.id} className={cls('glass', styles.card)}>
      <p className={styles.cardTitle}>{props.name}</p>
      <Image className={styles.image} src={props.imageURL} alt={props.name} height={500} width={500} />
    </div>
  )
}
