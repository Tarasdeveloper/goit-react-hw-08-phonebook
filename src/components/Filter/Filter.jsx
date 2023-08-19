import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ setFilterText }) => {
  const handleFilterChange = event => {
    const newText = event.target.value;
    setFilterText(newText);
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" onChange={handleFilterChange} />
    </FilterLabel>
  );
};

export default Filter;
