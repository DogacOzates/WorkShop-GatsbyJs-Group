import React from 'react'
import * as styles from './Term.module.css';

function Term() {
    return (
      <div className={styles.third}>
        <div className={styles.term}>
          <div className={styles.chrome}>
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.close}`} />
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.min}`} />
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.max}`} />
          </div>
          <div className={styles.shell}>
            <code>npm install -g learnyounode</code>
            <code>learnyounode</code>
          </div>
        </div>
      </div>
    );
  };   

export default Term