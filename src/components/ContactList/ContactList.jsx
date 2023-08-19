import { useEffect, useState } from 'react';
import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';
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
      <Filter setFilterText={setFilterText} />
      <ListContacts>
        {isLoading && <Loader />}
        {error && <p>Oops, some error occured...{error}</p>}
        {contacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <span>{name}</span>:&nbsp;{number}
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
