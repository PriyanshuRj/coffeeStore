import React from 'react'
import { fetchStores } from '../../../../libs/fetchStores'
import CoffeeStorePage from './CoffeeStore'
export default async function CoffeeStore({ params }: { params: { id: string } }) {
  const data = await fetchStores();
  const store = data.find((store: any) => store.id == params.id)
  return (
    <CoffeeStorePage {...store} id={params.id} />
  )
}
