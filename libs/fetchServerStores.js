'use server'
import {use} from 'react'
import {fetchStores} from "./fetchStores";
export default function getStores(){
    'use server'
    const data = use(fetchStores());
    return data;
  }