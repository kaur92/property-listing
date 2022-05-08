import React from "react";
import { usePropertySearch } from "../../hooks/usePropertySearch";
import LoadingSpinner from "../LoadingSpinner";
import PropertyCard from "../PropertyCard";
import ErrorMessage from "../ErrorMessage";
import "./PropertyList.css";

const PropertyList = () => {
  const { isLoading, properties, serverError } = usePropertySearch();
  const renderProperty = (
    <>
      {serverError && <ErrorMessage />}
      {properties.length && (
        <>
          <div className="title">
            <h3>Properties you may like</h3>
          </div>
          <section className="cards">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </section>
        </>
      )}
      {!properties.length && (
        <div>
          <div className="title">
            <h3>No property found</h3>
          </div>
        </div>
      )}
    </>
  );

  return (isLoading ? <LoadingSpinner /> : renderProperty);
};

export default PropertyList;
