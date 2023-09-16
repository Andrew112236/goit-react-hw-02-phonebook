import React, { useState } from 'react';
import styles from './ContactForm.module.css';
function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Phonebook</h1>
      <label className={styles.label}>
        Name:
        <input
          className={styles.name}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number:
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact &#128512;
      </button>
    </form>
  );
}

export default ContactForm;
