import React from 'react';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const Phonebook = ({ name, number, onAddContact, onChangeFiled }) => {
  return (
    <Section title={'Phonebook'}>
      <form>
        <div className={css.label}>Name</div>
        <input
          value={name}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          onChange={onChangeFiled}
        />

        <div className={css.label}>Number</div>
        <input
          value={number}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeFiled}
        />

        <button type="submit" onClick={onAddContact} className={css.button}>
          Add contact
        </button>
      </form>
    </Section>
  );
};

Phonebook.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onChangeFiled: PropTypes.func.isRequired,
};
