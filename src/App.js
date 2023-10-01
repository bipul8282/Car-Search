import React, { useState } from 'react';
import "./App.css";
import CarSearch from './CarSearch';
import CarCard from './CarCard';
import Pagination from './Pagination';


function App() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Car 1', brand: 'Brand 1', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'Car 2', brand: 'Brand 2', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 3, name: 'Car 3', brand: 'Brand 3', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'Car 4', brand: 'Brand 4', imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlHxZnxPQnRoatMenX5AZdrB1Xyc5EsAt2Q&usqp=CAU" },
    { id: 2, name: 'Car 5', brand: 'Brand 5', imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tt60-thI2n73ooBQQTqbJVW6Af-T0227_Q&usqp=CAU" },
    { id: 2, name: 'Car 6', brand: 'Brand 6' , imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolmBoxPQ1MQCpvppCl_2z6FT1blmltNIUUA&usqp=CAU"},
    // Add more cars here...
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Filter cars based on the search term
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className="App">
      
      <CarSearch setSearchTerm={setSearchTerm} />
      <div className="CarGrid">
        {currentCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
