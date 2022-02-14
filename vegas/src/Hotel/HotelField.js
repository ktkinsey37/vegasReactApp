import React, {useEffect, useState, useContext} from "react";
import './HotelDetails.css';
import HotelDetails from "./HotelDetails";
import HotelDescription from "./HotelDescription"
import HotelLocation from "./HotelLocation";
import { ImLocation } from 'react-icons/im';
import "./HotelField.css"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaThumbsUp } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'



function HotelField({hotel}) {
  const [hotelInfoField, setHotelInfoField] = useState(<HotelDescription hotel={hotel}/>)
  

    // Shows the hotel description by rendering the component on click, also alters navlink
    function showDescription(){
      setHotelInfoField(<HotelDescription hotel={hotel}/>)
      let element = document.getElementById("descriptionNavlink");
      let otherElement = document.getElementById("detailsNavlink");
      let otherElement1 = document.getElementById("locationNavlink")
      otherElement.classList.remove("navlinkSelected")
      otherElement1.classList.remove("navlinkSelected")
      element.classList.add("navlinkSelected")
    }

    // This and following function work as above
    function showDetails(){
      setHotelInfoField(<HotelDetails hotel={hotel}/>)
      let element = document.getElementById("detailsNavlink");
      let otherElement = document.getElementById("descriptionNavlink");
      let otherElement1 = document.getElementById("locationNavlink")
      otherElement.classList.remove("navlinkSelected")
      otherElement1.classList.remove("navlinkSelected")
      element.classList.add("navlinkSelected")
    }

    function showLocation(){
        setHotelInfoField(<HotelLocation hotel={hotel}/>)
        let element = document.getElementById("locationNavlink");
        let otherElement = document.getElementById("detailsNavlink");
        let otherElement1 = document.getElementById("descriptionNavlink")
        otherElement.classList.remove("navlinkSelected")
        otherElement1.classList.remove("navlinkSelected")
        element.classList.add("navlinkSelected")
    }

    // Dynamically generates star rating. Could pretty easily add partial stars.
    let starArr = []
    let stars = Math.ceil(parseFloat(hotel.starRating))
    for (let i = 0; i < stars;i++){
        starArr.push('.')
    }

    return (
      <div className='hotelField'>
        <div className="hotelHeader">
            <div className="hotelName">
                <span>
                {hotel.name.toUpperCase()}</span> {starArr.map((x) => <AiFillStar className='starRating'/>)}
            </div>

            <div className="roomPrice">
                <span className="price">${hotel.price}</span>
                <br/>
                HOTEL ROOMS FROM
            </div>
            <br/>
            <a onClick={showLocation}><ImLocation/> Strip</a> &nbsp;&nbsp;
            <BsFillTelephoneFill/> {hotel.phoneNumber} &nbsp;&nbsp;
            <FaThumbsUp/>  Best Price Guarantee
            <br/>
            <br/>
        </div>

        <div className="navbar">
            <a onClick={showDescription}>
                <div id="descriptionNavlink" className="navlink">
                        DESCRIPTION
                </div>
            </a>
            <a onClick={showDetails}>
                <div id="detailsNavlink" className="navlink">
                        DETAILS
                </div>
            </a>
            <a onClick={showLocation}>
                <div id="locationNavlink" className="navlink">
                            LOCATION
                </div>
            </a>
        </div>
        <br/>
        <br/>
        <div id="hotelInfoField" className="hotelInfo">
        {hotelInfoField}
      </div>
      </div>
    );
  }

  export default HotelField;