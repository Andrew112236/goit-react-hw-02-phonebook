import React from 'react';
import styles from './Filter.module.css';

export default function Filter({ filter, handleFilterChange }) {
  return (
    <div>
      <label className={styles.label}>
        Filter contacts by name:
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
}
