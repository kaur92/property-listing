import React from "react";
import { numberWithCommas } from "../../utils/StringFormatter";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const {
    image,
    status,
    askingPrice,
    numberOfBedrooms,
    propertyType,
    address,
  } = property;

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={image} alt=""></img>
          {status && <div className="status status-active">Active</div>}
          {!status && <div className="status status-inactive">Inactive</div>}
        </div>
        <div className="card-details">
          <div className="price">
            <label>Asking Price</label>
            <span>£{numberWithCommas(askingPrice)}</span>
          </div>
          <div className="bathroom">
            <label>{`${numberOfBedrooms} bed ${propertyType} for sale`}</label>
          </div>
          <div className="address">
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
