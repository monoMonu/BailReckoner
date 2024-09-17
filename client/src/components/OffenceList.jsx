import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OffenceList.module.css';

function OffenceList() {
   const [offences, setOffences] = useState([]);

   useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/api/offences`)
         .then(res => setOffences(res.data))
         .catch(err => console.error(err));
   }, []);

   return (
      <div className={styles.offenceList}>
         <h2 className={styles.title}>Offence List</h2>
         <ul className={styles.list}>
            {offences.map(offence => (
               <li key={offence._id} className={styles.offenceItem}>
                  <div className={styles.offenceName}>{offence.name}</div>
                  <div className={styles.offenceDetails}>
                     <span className={styles.label}>Section:</span> {offence.section}
                     <br />
                     <span className={styles.label}>Act:</span> {offence.act}
                     <br />
                     <span className={styles.label}>Penalty:</span> {offence.penalty}
                     <br />
                     <span className={styles.label}>Bailable:</span>
                     <span className={offence.isBailable ? styles.bailable : styles.notBailable}>
                        {offence.isBailable ? 'Yes' : 'No'}
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default OffenceList;