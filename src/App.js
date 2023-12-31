import React, { useState } from 'react';
import "./App.css";
import CarSearch from './CarSearch';
import CarCard from './CarCard';
import Pagination from './Pagination';

function App() {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota RAV4', brand: '4 People ', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.TnrOwhGnEbJmnZGnccC0ygHaEK&pid=Api&P=0&h=220', price: '$440/month',year:"2021",mileage: '6.1km/l-Litre' },
    { id: 2, name: 'BMW 3 Series', brand: '4 People ', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.uQIJb1TyA7jlthe248QeFgHaEK&pid=Api&P=0&h=220', price: '$350/month',year:"2019",mileage: '8.2km/l-Litre' },
    { id: 3, name: 'Volkswagen-T-Cross', brand: '4 People ', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.LhESEQZVsp7U97qif0dTGAHaEK&pid=Api&P=0&h=220', price: '$400/month',year:"2020",mileage: '5.3km/l-Litre'},
    { id: 4, name: 'Cadillac Escalade', brand: '4 People ', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.4OUfx4_c0G5tAFo8NM6R_AHaEK&pid=Api&P=0&h=220', price: '$620/month',year:"2020",mileage: '7.7km/l-Litre' },
    { id: 5, name: 'BMW 4 Series GTI', brand: '4 People ', imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.2TAGk_SjzyZDSTp7FioKEwHaEK&pid=Api&P=0&h=220', price: '$530/month',year:"2021",mileage: '7.6km/l-Litre' },
    { id: 6, name: 'BMW 4 Series', brand: '4 People ', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QLzLDAUKxXGwfBMAEnRfhAHaEK&pid=Api&P=0&h=220', price: '$490/month',year:"2019",mileage: '7.2km/l-Litre'},
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

 
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
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
