import React from 'react';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <Section title={'Statistics'}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <div className={css.name}>{contact.name}</div>
            <div>{contact.number}</div>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
