import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterText } from 'redux/contactsReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filterValue);

  const handleFilterChange = event => {
    const newText = event.target.value;
    dispatch(setFilterText(newText)); // Диспатчите действие для обновления текста фильтра в состоянии
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};

export default Filter;
