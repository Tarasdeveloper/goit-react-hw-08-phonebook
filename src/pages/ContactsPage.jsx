import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
  selectContactsError,
  selectContactsLoading,
  selectUserContacts,
} from '../redux/contactsReducer';
import Loader from 'components/Loader/Loader';
import Wrapper from 'components/Wrapper/Wrapper';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    dispatch(requestContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);
    dispatch(addContactThunk({ name, number }));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          <p>Name: </p>
          <input name="contactName" type="text" required />
        </label>
        <br />
        <label>
          <p>Number: </p>
          <input name="contactNumber" type="text" required />
        </label>
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>

      <Filter setFilterText={setFilterText} />

      {isLoading && <Loader />}
      {error && <p>Oops, some error occured...{error}</p>}
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <h3>Name: {contact.name}</h3>
              <p>Number: {contact.number}</p>
              <button
                onClick={() => handleDeleteContact(contact.id)}
                type="button"
                aria-label="Delete contact"
              >
                delete &times;
              </button>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default ContactsPage;
