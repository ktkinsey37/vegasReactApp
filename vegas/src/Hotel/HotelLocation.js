import React from "react";
import { ImLocation } from 'react-icons/im';



function HotelLocation({hotel}) {

    // Load image
    let src = "http://localhost:8888" + hotel.media[1].href

    return (
      <div className="locationDiv">
        <br/>
        <ImLocation/> {hotel.location.address}, {hotel.location.city}, {hotel.location.state}, {hotel.location.postalCode}
        <br/>
        <img src={src}></img>
      </div>
    );
  }

  export default HotelLocation;