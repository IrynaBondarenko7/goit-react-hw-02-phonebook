import { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Layout/Layout';
import { ContactList } from './Contacts/Contacts-list';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  addContact = value => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, value] };
    });
  };
  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} searchContact={this.changeFilter} />
        <ContactList
          contacts={filtredContacts}
          deleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
Filter.propTypes = {
  filter: PropTypes.string,
  searchContact: PropTypes.func,
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
