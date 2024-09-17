import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={styles.navbar}>
         <div className={`container ${styles.navContainer}`}>
            <Link to="/" className={styles.logo}>Bail Reckoner</Link>
            <ul className={styles.navList}>
               <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
               <li className={styles.navItem}><Link to="/bail-application" className={styles.navLink}>Apply for Bail</Link></li>
               <li className={styles.navItem}><Link to="/offences" className={styles.navLink}>Offence List</Link></li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;