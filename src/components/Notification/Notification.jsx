import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

export const Notification = ({ message }) => {
  return <Section title={message}></Section>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
