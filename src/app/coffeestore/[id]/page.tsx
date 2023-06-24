import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { fetchStores } from '../../../../libs/fetchStores'

export default async function CoffeeStore({ params }: { params: { id: string } }) {
    console.log(params.id)
    const data = await fetchStores();
    const store = data.find((store:any) => store.id == params.id)
    console.log( store)
  return (
    <div>{store ? store.name : ""}</div>
  )
}
