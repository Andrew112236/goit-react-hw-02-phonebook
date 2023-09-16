import React from 'react';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li className={styles.label} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete &#x1F610;
          </button>
        </li>
      ))}
    </ul>
  );
}
