import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header() {
  return (
    <div className={styles.content}>
      <h1 className={styles.siteTitle}>
        <Link to="/">Kanban</Link>
      </h1>
    </div>
  );
}

export default Header;
