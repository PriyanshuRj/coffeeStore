import React from 'react'
import styles from "../../styles/loading.module.css"
import { Rings } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className={styles.loader}>
        <span>
        <Rings
            height="320"
            width="320"
            // radius="9"
            color="#EA8347"
            ariaLabel="loading"
          />
        </span>
    </div>
  )
}
