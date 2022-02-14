import axios from "axios";



const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8888";

/** API Class.
 *Generic API helper class. Good for making different types of requests. Can add authorization header for JWTs or w/e
 */

class VegasApi {


  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    // const headers = { "Access-Control-Allow-Origin": "*" };
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
    //   let message = err.response.data.error.message;
    //   throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes


  static async getAvailableHotels(){
      let res = await this.request("api/hotels")
      console.log(res, "this is res of get all hotels")
      return res
  }

//   Hard to test this without a more full backend, but for the Venetian it works. Other handles would need to be 
  static async getHotel(hotelHandle){
      hotelHandle = hotelHandle.toLowerCase()
      let res = await this.request(`api/hotels/${hotelHandle}`)

      // Might want this someday?
      // let imgRes = await this.request(`assets/images/map_${hotelHandle}.png`)
      return res;
  }


}

export default VegasApi;