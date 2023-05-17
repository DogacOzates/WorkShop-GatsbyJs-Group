import React from 'react'
import { Link } from "gatsby"
import * as styles from './ElectivesHeadline.module.css';

function ElectivesHeadline() {
  return (
    <div className={styles.elective_leftwrapper}>
        <h3>Electives</h3>
        <p>Workshoppers on popular libraries or styles of writing Node.js.<br /><br />Stuck? Ask a question in the&nbsp;
        <Link
            to="/"
            >
            discussion.
        </Link>
        </p>
    </div>
  )
}

export default ElectivesHeadline