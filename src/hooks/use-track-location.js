"use client";
import { useContext, useState } from "react";
import {ACTION_TYPES, StoreContext} from "../store/store";

export default function useTrackLocation(){
    const [locationError, setLocationError] = useState("");
    const [isFindingLocation, setIsFindingLocation] = useState(false);
    const { dispatch } = useContext(StoreContext);
    const success = async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        dispatch({
            type : ACTION_TYPES.SET_LAT_LONG,
            payload : {latlong: `${latitude},${longitude}`}
        })
        setLocationError("");
        setIsFindingLocation(false);
    }
    const error = (error) =>{
        console.log(error);
        setLocationError(error.message);
    }
    const handleTrachLocation = () => {
        setIsFindingLocation(true);
        if(!navigator.geolocation){
            
            setLocationError("geolocation is not supported by the browser");
            setIsFindingLocation(false);
        }
        else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    return {
        locationError,
        isFindingLocation,
        handleTrachLocation
    }
}