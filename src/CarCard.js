import React from 'react';

function CarCard({ car }) {
  return (
    <div className="CarCard">
      <div className="CarImage">
        <img src={car.imageUrl} alt={car.name} />
      </div>
      <div className="CarDetails">
        <h2>{car.name}</h2>
        <p>Brand: {car.brand}</p>
      </div>
    </div>
  );
}

export default CarCard;
