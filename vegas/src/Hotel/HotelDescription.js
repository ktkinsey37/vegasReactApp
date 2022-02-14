import React, {useEffect, useState, useContext} from "react";
import './HotelDescription.css';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';



function HotelDescription({hotel}) {
  const [styleHidden, setStyleHidden] = useState("hotelDescriptionHidden");
  const [showMore, setShowMore] = useState(false)

  
    // Toggles description display by changing css style
    function toggleText(){
      setShowMore(!showMore)
      styleHidden === "hotelDescriptionHidden" ? setStyleHidden("hotelDescription") : setStyleHidden("hotelDescriptionHidden")
    }

    // Breaks up the description by paragraphs to render it better
    let description = hotel.description.split("\n")


    return (
      <div>
        <div id="hotelDescriptionField" className={styleHidden}>
            {description.map((p) => <p>{p}</p>)}
        </div>
        <a className="descriptionAnchor" onClick={toggleText}>{showMore ? `HIDE FULL DESCRIPTION` : `SHOW FULL DESCRIPTION`}</a>
        <a className="descriptionAnchor" onClick={toggleText}>{showMore ? <IoIosArrowDropupCircle/> : <IoIosArrowDropdownCircle/>}</a>
      </div>
    );
  }

  export default HotelDescription;