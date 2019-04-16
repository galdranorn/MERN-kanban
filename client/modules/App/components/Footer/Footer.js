import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>Copyright <a href="https://github.com/galdranorn">galdranorn</a> 2019</p>
      <p>See full code on <a href="https://github.com/galdranorn/MERN-kanban">GitHub!</a></p>
    </div>
  );
}

export default Footer;
