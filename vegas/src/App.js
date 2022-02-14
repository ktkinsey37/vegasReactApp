import './App.css';
import VegasApi from "./VegasApi"
import {useEffect, useState} from "react"
import HotelField from "./Hotel/HotelField"
import HotelsList from "./HotelsList/HotelsList"


function App() {

  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState({});
  const [isLoading, setLoading] = useState([true]);


  // useEffect loads list of hotels and the Venetian. To scale this, you'd want to useparams, but I'm doing it all here for this.
  useEffect(() => {
    async function getAllHotelsOnLoad() {

      // Make the request
      let hotels = await VegasApi.getAvailableHotels()

      // Retrieves hotel array from returned object, sorts alphabetically
      hotels = hotels.list.sort((a,b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    // Removes duplicate hotels by code
      hotels = hotels.filter((v,i,a)=>a.findIndex(t=>(t.code===v.code))===i)

    // Sets the array of hotels in state
      setHotels(hotels)

    // Make the request for the individual hotel
    let hotel = await VegasApi.getHotel("Venetian")
    
    // Set hotel in state
    setHotel(hotel)

    setLoading(false)
    }
    getAllHotelsOnLoad()
  }, []);

  if (isLoading){
    return (
      <div >
        Loading...
      </div>
    );
  }

  return (
    <div >
      <header >
          <HotelsList hotels={hotels} hotel={hotel}/>
          <HotelField hotel={hotel}/>
      </header>
    </div>
  );
}

export default App;
