import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
