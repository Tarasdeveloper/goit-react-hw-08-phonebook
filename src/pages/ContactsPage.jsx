import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from '../redux/authReducer';
import {
  addContactThunk,
  deleteContactThunk,
  requestContactsThunk,
  selectContactsError,
  selectContactsLoading,
  selectUserContacts,
} from '../redux/contactsReducer';
import { Loader } from '../components/Loader/Loader';
import Wrapper from 'components/Wrapper/Wrapper';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

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

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

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

      {isLoading && <Loader />}
      {error && <p>Oops, some error occured...{error}</p>}
      <Filter />
      <ul>
        {showContacts &&
          contacts.map(contact => {
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

// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import Wrapper from 'components/Wrapper/Wrapper';

// const ContactsPage = () => {
//   return (
//     <Wrapper>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Wrapper>
//   );
// };
