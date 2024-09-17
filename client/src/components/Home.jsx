import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
   return (
      <div className={styles.home}>
         <h1 className={styles.title}>Welcome to Bail Reckoner</h1>
         <p className={styles.description}>
            Bail Reckoner is an innovative digital solution designed to assist undertrial prisoners,
            legal aid providers, and judicial authorities in streamlining the bail process.
         </p>
         <div className={styles.ctaButtons}>
            <Link to="/bail-application" className={styles.ctaButton}>Apply for Bail</Link>
            <Link to="/offences" className={styles.ctaButton}>View Offence List</Link>
         </div>
         <section className={styles.features}>
            <h2>Key Features</h2>
            <ul className={styles.featuresList}>
               <li className={styles.featureItem}>Simplified bail application process</li>
               <li className={styles.featureItem}>Comprehensive offence database</li>
               <li className={styles.featureItem}>Automated eligibility assessment</li>
               <li className={styles.featureItem}>User-friendly interface for all stakeholders</li>
            </ul>
         </section>
      </div>
   );
};

export default Home;