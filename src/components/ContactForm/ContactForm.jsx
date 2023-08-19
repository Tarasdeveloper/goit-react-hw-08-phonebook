import React, { useEffect } from 'react';
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormNames,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  requestContactsThunk,
  selectUserContacts,
} from 'redux/contactsReducer';

export default function ContactForm() {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContactsThunk());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);
    dispatch(addContactThunk({ name, number }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <FormNames>Name: </FormNames>
        <FormInput
          type="text"
          name="contactName"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        <FormNames>Number: </FormNames>
        <FormInput
          type="tel"
          name="contactNumber"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}
