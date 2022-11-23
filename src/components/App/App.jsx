import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prev => [...prev, { id: nanoid(), ...newContact }]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const handleFilterInput = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={handleAddContact} />
      <SubTitle>Contacts:</SubTitle>
      <Filter text={filter} onInput={handleFilterInput} />
      <PhoneBook
        contacts={filterContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;

