import React from 'react'
import * as styles from './TermResult.module.css';

function Term() {
    return (
      <div className={styles.third}>
        <div className={styles.termres}>
          <div className={styles.chrome}>
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.close}`} />
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.min}`} />
          <span className={`${styles.btn} ${styles.btnTerm} ${styles.max}`} />
          </div>
          <div className={styles.shell}>
            <div className={styles.workshopper}>
              <code>» HELLO WORLD</code>
              <code>» BABY STEPS</code>
              <code>» MY FIRST I/O!</code>
            </div>
          </div>
        </div>
      </div>
    );
  };   

export default Term