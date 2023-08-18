import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { requestContactsThunk } from 'redux/contactsReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(requestContactsThunk(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterContactsByName}
      />
    </FilterLabel>
  );
};

export default Filter;
