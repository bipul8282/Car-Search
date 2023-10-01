import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./CarSearch.css"
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function CarSearch({ setSearchTerm }) {

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="CarSearch">
      <TextField
        label="Search for cars..."
        variant="outlined"
        size="small"
        onChange={handleSearch}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl variant="outlined" size="small" style={{ marginLeft: '8px' }}>
        <Select
          value="RELEVANCE" // Set the default value to "RELEVANCE"
        
          displayEmpty
          inputProps={{ 'aria-label': 'Filter' }}
          variant="filled" // Set the variant to "filled"
        >
          <MenuItem value="RELEVANCE">RELEVANCE</MenuItem>
          {/* Add more filter options here */}
        </Select>
      </FormControl>
      <FormControl variant="outlined" size="small" style={{ marginLeft: '8px' }}>
        <Select
          value="ALL BRANDS" // Set the default value to "ALL BRANDS"
        
          displayEmpty
          inputProps={{ 'aria-label': 'Filter' }}
          variant="filled" // Set the variant to "filled"
        >
          <MenuItem value="ALL BRANDS">ALL BRANDS</MenuItem>
          {/* Add more filter options here */}
        </Select>
      </FormControl>
    </div>
  );
}

export default CarSearch;
