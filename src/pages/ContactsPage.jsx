import Wrapper from 'components/Wrapper/Wrapper';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <Wrapper>
      <ContactForm />
      <ContactList />
    </Wrapper>
  );
};

export default ContactsPage;
