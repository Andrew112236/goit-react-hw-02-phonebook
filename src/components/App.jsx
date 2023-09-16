import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  // Initial state
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  // Name alert with filter and submit function

  handleSubmit = ({ name, number }) => {
    if (this.isContactNameDuplicate(name)) {
      alert(`Contact with name "${name}" already exists.`);
      return;
    }

    const newContact = { id: Date.now().toString(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  isContactNameDuplicate(name) {
    const lowercaseName = name.toLowerCase();

    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === lowercaseName
    );
  }

  // Delete function

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter)
    );

    return (
      <div>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
