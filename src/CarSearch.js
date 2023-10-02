import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './CarSearch.css'; // Import your CSS file

function CarSearch({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
return (
    <div className="CarSearch">
      <div className="SearchInputContainer">
        <TextField
          label="Search for cars..."
          
          size="small"
          onChange={handleSearch}
          
          className="SearchTextField"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="FilterSelectContainer">
        <FormControl size="small" className="FilterSelect">
          <Select
            value="RELEVANCE"
            
          >
            <MenuItem value="RELEVANCE">RELEVANCE</MenuItem>
            {/* Add more filter options here */}
          </Select>
        </FormControl>
        <FormControl size="small" className="FilterSelect">
          <Select
            value="ALL BRANDS"
            
          >
            <MenuItem value="ALL BRANDS">ALL BRANDS</MenuItem>
            
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default CarSearch;
