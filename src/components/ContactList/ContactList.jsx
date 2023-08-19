import { useEffect, useState } from 'react';
import {
  ContactsItem,
  ContactsName,
  ContactsNumber,
  DeleteBtn,
  ListContacts,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import {
  deleteContactThunk,
  requestContactsThunk,
  selectContactsError,
  selectContactsLoading,
  selectUserContacts,
} from 'redux/contactsReducer';
import Filter from 'components/Filter/Filter';

const ContactList = () => {
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
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <ListContacts>
        <Filter setFilterText={setFilterText} />
        {isLoading && <Loader />}
        {error && <p>Oops, some error occured...{error}</p>}
        {contacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <ContactsName>{name}: </ContactsName>
                <ContactsNumber>{number}</ContactsNumber>
                <DeleteBtn
                  onClick={() => handleDeleteContact(id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  delete &times;
                </DeleteBtn>
                {!!error && <div>{error.message}</div>}
              </ContactsItem>
            );
          })}
      </ListContacts>
    </>
  );
};

export default ContactList;
