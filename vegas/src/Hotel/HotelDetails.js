import React, { useState } from "react";
import './HotelDetails.css';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';


function HotelDetails({hotel}) {
  const [styleHidden, setStyleHidden] = useState("hotelDetailsHidden");
  const [showMore, setShowMore] = useState(false)
  const details = hotel.details

    // Toggles details display by changing the style through state
    function toggleText(){
      setShowMore(!showMore)
      styleHidden === "hotelDetailsHidden" ? setStyleHidden("hotelDetails") : setStyleHidden("hotelDetailsHidden")
    }

    return (
      <div>
        <div id="hotelDetailsField" className={styleHidden}>
          {details.map((detail) => 
            <div>
              <span className="detailLabel">{detail.label}:</span>
              <br/>
              <span>{detail.value}</span>
              <br/>
              <br/>
            </div>)}
        </div>
        <a className="detailsAnchor" onClick={toggleText}>{showMore ? "SHOW FEWER DETAILS" : "VIEW MORE DETAILS"}</a>
        <a className="descriptionAnchor" onClick={toggleText}>{showMore ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}</a>
      </div>
    );
  }

  export default HotelDetails;