import { Container, Title, SubTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts:</SubTitle>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? <PhoneBook /> : 'You have no contacts saved'}
    </Container>
  );
};

export default App;
