import React from 'react';
import * as styles from './TermContainer.module.css';
import Term from '../Term/Term';
import TermResult from '../TermResult/TermResult';
import GetGoing from '../GetGoing/GetGoing';

const TermContainer = () => {
  return (
    <div className={styles.container}>
      <Term />
      <TermResult />
      <GetGoing />
    </div>
  );
};

export default TermContainer;