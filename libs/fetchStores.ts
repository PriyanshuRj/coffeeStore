
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey : process.env.NEXT_PUBLIC_UNSPASH_ACCESS_API_KEY ? process.env.NEXT_PUBLIC_UNSPASH_ACCESS_API_KEY : ""
})

const getUrlForCoffeeStores = (latLong:string, query:string, limit:number) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};
export async function fetchStores(
    latLong = "28.4845966,77.5132065",
    limit = 6
){
    const photos = await unsplash.search.getPhotos({
      query : "coffee shop",
      perPage : 30,
      page: 1
    });
    var unsplashResults: string[] = [];
    if(photos && photos.response)  unsplashResults = photos.response.results.map((result,index) => result.urls["small"]);
    const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_FOURPLACE_API_KEY ? process.env.NEXT_PUBLIC_FOURPLACE_API_KEY : "",
        },
      };
    
      const response = await fetch(
        getUrlForCoffeeStores(latLong, "coffee", limit),
        options
      );
      const data = await response.json();
      return  data.results.map((result: any, index: number) => {
        const neighborhood = result.location.neighborhood;
        return {
            id: result.fsq_id,
            address: result.location.address,
            name: result.name,
            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
            imgUrl:  unsplashResults.length > index ? unsplashResults[index] : "https://source.unsplash.com/random/?coffee",
          };
      })
}