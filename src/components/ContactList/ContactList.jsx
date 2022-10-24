import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const sortContactsByName = () =>
  [...filterContactsOnChange()].sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  )

  return (
    <ContactListBox>
      {sortContactsByName().map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>Name: {name}</ContactListText>
          <ContactListText>Number: {number}</ContactListText>
          <ContactListBtn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Remuve
          </ContactListBtn>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

export default ContactList;
