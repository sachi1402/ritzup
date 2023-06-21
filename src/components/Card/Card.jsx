import React from 'react';
import './Card.scss';
import { BsFillFlagFill } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { RiStarFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
function Card({ img, loc, orignalprice, rating, discountedprice, Noreview, title, comment }) {
  const Navigate  = useNavigate();

  const handleClick = () => {
    // Redirect to /propertydetails with additional query parameters
    Navigate(`/Propertydetails?id=${title}&location=${loc}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img  className="card-image"src={img} alt={title} />
      <h1 className="card-title">{title}</h1>
      <div className="card-location-r1">
        <div>
          <FaMapMarkerAlt /> {loc}
        </div>
        <div className="card-location-rupieediscount" style={{'color': 'red'}}>
          <FaRupeeSign />
          {orignalprice}
        </div>
      </div>
      <div className="card-review-r2">
        <div className="card-review-r2-star-cont" style={{'color':'#F1450E'} }>
          <RiStarFill style={{'color':'gold',marginRight:"0.3vw"}} />
          <RiStarFill  style={{'color':'gold',marginRight:"0.3vw"}}/>
          <RiStarFill  style={{'color':'gold',marginRight:"0.3vw"}}/>
          <RiStarFill  style={{'color':'gold',marginRight:"0.3vw"}}/> {rating}
        </div>
        <div className="card-review-after-discount"
          style={{
            'width': '89px',
            'height': '19px',
            'font-family': 'Roboto',
            'font-style': 'normal',
            'font-weight': '400',
            'font-size': '14px',
            'line-height': '19px',
            'color': '#222222'
          }}
        >After discount</div>
      </div>
      <div className="card-rating-r3">
        <div>
          {comment} {Noreview}
        </div>
        <div>
          <FaRupeeSign />
          {discountedprice}
        </div>
      </div>
    </div>
  );
}

export default Card;
