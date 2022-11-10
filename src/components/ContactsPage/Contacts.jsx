import {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsAPI';
import { selectFilter } from 'redux/filter/filterSelectors';
import { toastOptions } from 'utils/toastOptions';
import { getFilteredContacts } from 'utils/getFilteredContacts';

import {
  Phonebook,
  Header,
  Subtitle,
  Wrapper,
  List,
  ErrorMessage,
  Title,
  Wrap,
} from 'components/ContactsPage/Contacts.styled';
import { ContactForm } from 'components/ContactsPage/ContactForm';
import { Filter } from 'components/ContactsPage/Filter';
import { ContactList } from 'components/ContactsPage/ContactList';
import { ContactsSpinner } from 'components/ContactsPage/ContactsSpinner';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export function Contacts() {
  const [deletedContactId, setDeletedContactId] = useState(null);
  const filter = useSelector(selectFilter);

  const { data: contacts, isLoading } = useGetContactsQuery({
    refetchOnMountOrArgChange: true,
  });
  const [addContact, { isLoading: addContactLoading }] = useAddContactMutation();
  const [deleteContact, { isLoading: deleteContactLoading }] = useDeleteContactMutation();

  const addNewContact = async values => {
    for (const contact of filteredContacts) {
      if (contact.name.toLowerCase() === values.name.toLowerCase()) {
        return toast.error(`${contact.name} is already in contacts`, toastOptions);
      }
    }
    const response = await addContact(values);
    if (response.error)
      return toast.error(
        `Happen mistake while adding a contact, Please reload the page`,
        toastOptions
      );
    return toast.success(`${values.name} added to contacts`, toastOptions);
  };

  const removeContact = async (id, contactName) => {
    setDeletedContactId(id);
    const response = await deleteContact(id);
    if (response.error)
      return toast.error(
        `Happen mistake while deleting a contact, Please reload the page`,
        toastOptions
      );
    toast.success(`${contactName} deleted from contacts`, toastOptions);
    return setDeletedContactId(null);
  };

  const filteredContacts = getFilteredContacts(contacts, filter);
  const isLoadingContacts = isLoading || addContactLoading || deleteContactLoading;
  const isShowingError = !isLoading && filteredContacts && filteredContacts.length === 0;

  return (
    <Wrapper>
      <Phonebook>
        <Header>Phonebook</Header>
        <ContactForm addContact={addNewContact} isLoading={isLoadingContacts} />
        <Subtitle>Find Contact</Subtitle>
        <Filter />
      </Phonebook>

      {isShowingError && !addContactLoading && <ErrorMessage>No Contacts</ErrorMessage>}

      {isShowingError && addContactLoading && (
        <Wrap>
          <Title>Contacts</Title>
          <ContactsSpinner size={'65'} />
        </Wrap>
      )}

      {!isShowingError && (
        <Wrap>
          <Title>Contacts</Title>
          {(addContactLoading || isLoading) && <ContactsSpinner size={isLoading ? '100' : '65'} />}
          <List>
            {contacts && (
              <ContactList
                contacts={filteredContacts}
                deleteContact={removeContact}
                deletedContactId={deletedContactId}
                isDeleteContactLoading={deleteContactLoading}
                isLoading={isLoadingContacts}
              />
            )}
          </List>
        </Wrap>
      )}
    </Wrapper>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
  deletedContactId: PropTypes.string,
  isDeleteContactLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
};
