import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const Filter = ({ filter, onFilterContacts }) => {
  return (
    <Section title={'Filter'}>
      <input
        value={filter}
        type="text"
        name="filter"
        required
        onChange={onFilterContacts}
      />
    </Section>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
