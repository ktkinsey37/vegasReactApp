import React from "react";
import "./HotelsList.css"
import { IoIosArrowDropleftCircle } from 'react-icons/io';


function HotelsList({hotels, hotel}) {


    console.log(hotel)

    // Get the image
    let src = "http://localhost:8888" + hotel.media[0].href

    return (
      <div className="hotelsList">
      <span className="leaveLink">
        <IoIosArrowDropleftCircle/> SEE ALL LAS VEGAS HOTELS
      </span>

        <br/>
        <br/>
        <img src={src}></img>
        <div className="hotelsListBox">
            {hotels.map((hotel) => 
            <div>
                <div className="hotelListNamebox">
                                <p className="hotelListName">{hotel.name}</p>
                </div>

                <div className="hotelListPriceBox">
                    <p className="hotelListPrice"> ${hotel.price}</p>
                </div>

            </div>)}
        </div>

      </div>
    );
  }

  export default HotelsList;