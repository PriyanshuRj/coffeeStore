const getUrlForCoffeeStores = (latLong:string, query:string, limit:number) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};
export async function fetchStores(
    latLong = "28.4845966,77.5132065",
    limit = 6
){
    const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: process.env.FOURPLACE_API_KEY ? process.env.FOURPLACE_API_KEY : "",
        },
      };
    
      const response = await fetch(
        getUrlForCoffeeStores(latLong, "coffee", limit),
        options
      );
      const data = await response.json();
      return data.results ? data.results.map((result: any, index: string) => {
        const neighborhood = result.location.neighborhood;
        return {
            id: result.fsq_id,
            address: result.location.address,
            name: result.name,
            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
            imgUrl:  null,
          };
      }) : []
}