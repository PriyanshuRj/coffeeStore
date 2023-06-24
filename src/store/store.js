"use client"
import React, { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const ACTION_TYPES = {
    SET_LAT_LONG : "SET_LAT_LONG",
    SET_COFFEE_STORES : "SET_COFFEE_STPRES"
}

const storeReducer = (state, action) =>{
    switch(action.type){
        case ACTION_TYPES.SET_LAT_LONG:
            state.latlong = action.payload.latlong;
            return state
        case ACTION_TYPES.SET_COFFEE_STORES:
            return { ...state, coffeestores : action.payload.coffeeStores}
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const StoreProvider = ({children}) =>{
    const initialState = {
        latlong: "",
        coffeestores : []
    }
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
