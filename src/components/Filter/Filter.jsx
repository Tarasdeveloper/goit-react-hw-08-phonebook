import React from 'react';
import {
  FormInput,
  FormLabel,
  FormNames,
} from 'components/ContactForm/ContactForm.styled';

const Filter = ({ setFilterText }) => {
  const handleFilterChange = event => {
    const newText = event.target.value;
    setFilterText(newText);
  };

  return (
    <FormLabel>
      <FormNames>Find contacts by name</FormNames>
      <FormInput type="text" onChange={handleFilterChange} />
    </FormLabel>
  );
};

export default Filter;
