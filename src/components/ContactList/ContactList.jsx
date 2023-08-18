// import { useEffect } from 'react';
// import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, getContacts } from 'redux/operations';

// const ContactList = () => {
//   const { contacts, filterTerm, isFetching, error } = useSelector(
//     state => state.phonebook
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContacts());
//   }, [dispatch]);

//   const contactsFilteredByName = contacts?.filter(contact =>
//     contact.name.toLowerCase().includes((filterTerm || '').toLowerCase())
//   );
//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   return (
//     <ListContacts>
//       {isFetching && <p>Loading data...</p>}
//       {contacts.length === 0 && !isFetching && (
//         <p>There are no contacts found!</p>
//       )}
//       {contacts.length > 0 &&
//         !isFetching &&
//         contactsFilteredByName.map(({ id, name, number }) => {
//           return (
//             <ContactsItem key={id}>
//               <span>{name}</span>:&nbsp;{number}
//               <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
//                 Delete
//               </DeleteBtn>
//               {!!error && <div className="error">{error.message}</div>}
//             </ContactsItem>
//           );
//         })}
//     </ListContacts>
//   );
// };

// export default ContactList;
