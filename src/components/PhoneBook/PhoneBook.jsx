import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue).toLowerCase();

  const filteredItems = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  return (
    <Container>
      <ContactList>
        {filteredItems.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ContactList>
    </Container>
  );
};

export default PhoneBook;
