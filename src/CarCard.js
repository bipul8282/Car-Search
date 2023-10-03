import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'; // Updated icon import
import SpeedIcon from '@mui/icons-material/Speed';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './CarCard.css';

function CarCard({ car }) {
  const commonIconClass = "BlueIcon"; // Common class for all icons
  const commonBoxClass = "CommonBox"; // Common class for all boxes
  const blueButtonClass = "BlueButton"; // Class for blue button background

  // CSS style for blue icons
  const blueIconStyle = {
    color: 'skyblue',
  };

  return (
    <div className={`CarCard ${commonBoxClass}`}>
      <div className={`CarCardHeader ${commonBoxClass}`}>
        <img src={car.imageUrl} alt={car.name} />
        <h2>
          {car.name} <span className={`ButtonLabel ${commonBoxClass}`}>{car.year}</span>
        </h2>
      </div>
      <p>
        {car.brand.includes('4 People') && (
          <>
            <PeopleIcon className={commonIconClass} style={blueIconStyle} /> {car.brand.split('4 People')[0]} 4 people
            <LocalGasStationIcon className={commonIconClass} style={blueIconStyle} /> {car.brand.split('4 People')[1]} Hybrid
          </>
        )}
        {!car.brand.includes('4 People') && car.brand}
      </p>
      {car.brand.includes('4 People') && (
        <div className={`AdditionalIcons ${commonBoxClass}`}>
          <SpeedIcon className={commonIconClass} style={blueIconStyle} /> {car.mileage}
          <MotionPhotosAutoIcon className={commonIconClass} style={blueIconStyle} /> Automation
        </div>
      )}

      <hr className={`Divider ${commonBoxClass}`} />
      <div>
        {/* Display the price */}
        <h1>
          {car.price}
          <FavoriteBorderIcon className={`${commonIconClass} BlueFavoriteIcon`} />
          <button className={`RentButton ${commonBoxClass} ${blueButtonClass}`}>Rent now</button>
        </h1>
      </div>
      {/* Add Pagination component */}
      {/* ... */}
    </div>
  );
}

export default CarCard;
