import PropTypes from 'prop-types';
import { Container } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <Container>
      <p>
        {contact.name}:<span>{contact.number}</span>
      </p>
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
