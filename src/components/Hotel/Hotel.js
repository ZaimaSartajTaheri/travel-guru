import React from 'react';
import './Hotel.css';
const Hotel = (props) => {
    const {image,name,guestNo,bedrooms,beds,baths,facilities,rating,price,totalPrice}=props.hotel
    return (
      <div className="singleHotel">
        <div>
          <img className="hotelImage" src={image} alt="hotel"></img>
        </div>
        <div className="hotelInfo">
          <h6>{name}</h6>
          <div className="facilities">
              <p>{guestNo} guest </p>
              <p>{bedrooms} bedrooms </p>
              <p>{beds} beds </p>
              <p>{baths} baths </p>
          </div>
          <p>{facilities}</p>
          <div className="ratingPrice">
              <p>⭐{rating}</p>
              <p>$<span className="priceBold">{price}</span>/night</p>
              <p>$<span className="priceBold">{totalPrice}</span>total</p>
          </div>
        </div>
      </div>
    );
};
export default Hotel;