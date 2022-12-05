import React from 'react';
import { Notification } from './Notification/Notification';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filteredContacts: [],
      name: '',
      number: '',
      filter: '',
    };
    this.onAddContact = this.onAddContact.bind(this);
    this.onChangeFiled = this.onChangeFiled.bind(this);
    this.onFilterContacts = this.onFilterContacts.bind(this);
    this.onDeleteContact = this.onDeleteContact.bind(this);
  }

  componentDidMount() {
    let storageContacts = localStorage.getItem('contacts');
    let parsedContacts = JSON.parse(storageContacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let filteredContacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    if (prevState.filteredContacts.length !== filteredContacts.length) {
      this.setState({
        filteredContacts: filteredContacts,
      });
    }
  }

  onAddContact() {
    let isNameAlreadyExist = this.state.contacts.filter(
      item => item.name === this.state.name
    ).length;
    if (isNameAlreadyExist) {
      alert(this.state.name + ' is already in contacts');
    } else {
      let newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
        name: '',
        number: '',
      });
      localStorage.setItem(
        'contacts',
        JSON.stringify([...this.state.contacts, newContact])
      );
    }
  }

  onChangeFiled(opt) {
    this.setState({
      [opt.target.name]: opt.target.value,
    });
  }

  onFilterContacts(opt) {
    this.setState({
      filter: opt.target.value,
    });
  }

  onDeleteContact(id) {
    let newContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: [...newContacts],
    });
    localStorage.setItem('contacts', JSON.stringify([...newContacts]));
  }

  render() {
    return (
      <div>
        <Phonebook
          name={this.state.name}
          number={this.state.number}
          onAddContact={this.onAddContact}
          onChangeFiled={this.onChangeFiled}
        />
        <Filter
          filter={this.state.filter}
          onFilterContacts={this.onFilterContacts}
        />
        {this.state.contacts.length ? (
          <Contacts
            contacts={this.state.filteredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        ) : (
          <Notification message="There is no contacts" />
        )}
      </div>
    );
  }
}
