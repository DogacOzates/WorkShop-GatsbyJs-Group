import React from 'react';
import { Link } from 'gatsby';
// import styles from './Electives.module.css';
import * as styles from './Electives.module.css';
import ElectivesHeadline from '../ElectivesHeadline/ElectivesHeadline';
import ElectivesContent from '../ElectivesContent/ElectivesContent';

const Electives = () => {
  return (
    <div className={styles.container}>
      <ElectivesHeadline />
      <ElectivesContent />
    </div>
  );
};

export default Electives;