import React from 'react'
import { Link } from "gatsby"
import * as styles from './GetGoing.module.css';

function GetGoing() {
  return (
    <div className={styles.getgoing_wrapper}>
        <h3>Get Going —</h3>
        <p>
          You’ll need&nbsp;<Link to="/">Node.js</Link> on your computer to get started with each of these. Then use <Link to="/">npm</Link>(it comes with Node) to install each module with the command below it. Once installed, simply type the workshopper’s name to launch.
          <br /><br />
          You will also need a <strong>Text Editor</strong>, if you don't have one already, you may want one for editing code. A few options: <Link to="/">Sublime Text</Link>, <Link to="/">Visual Studio Code</Link>, <Link to="/">Brackets</Link>.
        </p>
    </div>
  )
}

export default GetGoing