import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BailApplication.module.css';

function BailApplication() {
   const [offences, setOffences] = useState([]);
   const [selectedOffences, setSelectedOffences] = useState([]);
   const [prisonerId, setPrisonerId] = useState('');
   const [imprisonmentDuration, setImprisonmentDuration] = useState(0);

   useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/api/offences`)
         .then(res => setOffences(res.data))
         .catch(err => console.error(err));
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`${import.meta.env.VITE_API_URL}/api/bail-applications`, {
         prisonerId,
         offences: selectedOffences,
         imprisonmentDuration
      })
         .then(res => {
            console.log('Bail application submitted:', res.data);
            // Add success message or redirect
         })
         .catch(err => console.error(err));
   };

   return (
      <div className={styles.bailApplication}>
         <h2 className={styles.title}>Bail Application</h2>
         <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
               <label htmlFor="prisonerId" className={styles.label}>Prisoner ID</label>
               <input
                  id="prisonerId"
                  type="text"
                  placeholder="Enter Prisoner ID"
                  value={prisonerId}
                  onChange={(e) => setPrisonerId(e.target.value)}
                  className={styles.input}
               />
            </div>
            <div className={styles.inputGroup}>
               <label htmlFor="offences" className={styles.label}>Select Offences</label>
               <select
                  id="offences"
                  multiple
                  value={selectedOffences}
                  onChange={(e) => setSelectedOffences(Array.from(e.target.selectedOptions, option => option.value))}
                  className={styles.select}
               >
                  {offences.map(offence => (
                     <option key={offence._id} value={offence._id}>
                        {offence.name} - {offence.section}
                     </option>
                  ))}
               </select>
            </div>
            <div className={styles.inputGroup}>
               <label htmlFor="imprisonmentDuration" className={styles.label}>Imprisonment Duration (days)</label>
               <input
                  id="imprisonmentDuration"
                  type="number"
                  placeholder="Enter duration in days"
                  value={imprisonmentDuration}
                  onChange={(e) => setImprisonmentDuration(parseInt(e.target.value))}
                  className={styles.input}
               />
            </div>
            <button type="submit" className={styles.submitButton}>Submit Application</button>
         </form>
      </div>
   );
}

export default BailApplication;