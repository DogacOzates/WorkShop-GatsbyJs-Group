import React from 'react'
import { Link } from "gatsby"
import * as styles from './ElectivesContent.module.css';

const articleContents = [
  {
    title: "Functional Javascript",
    description: "Learn how to write a functional javascript application using React and Redux",
    code: "npm install -g functional-javascript-workshop",
  },
  {
    title: "Level Me Up Scotty!",
    description: "Learn to use leveldb, a simple key/value store with a vibrant package.",
    code: "npm install -g levelmeup",
  },
  {
    title: "ExpressWorks",
    description: "Learn the basics of the Express.js framework.",
    code: "npm install -g expressworks",
  },
  {
    title: "Make Me Hapi",
    description: "Learn all about hapi through a series of challenges.",
    code: "npm install -g makemehapi",
  },
  {
    title: "Promise It Won't Hurt",
    description: "Learn to use promises in JavaScript to handle async operations.",
    code: "npm install -g promise-it-wont-hurt",
  },
  {
    title: "Async You",
    description: "Learn to use the async package.",
    code: "npm install -g async-you",
  },
  {
    title: "NodeBot Workshop",
    description: "Make robots with the johnny-five api.",
    code: "npm install -g nodebot-workshop",
  },
  {
    title: "Going Native",
    description: "An exploration of Node.js from the underside: native C++ add-ons.",
    code: "npm install -g goingnative",
  },
  {
    title: "Planet Proto",
    description: "Understanding JavaScript Prototypes",
    code: "npm install -g planetproto",
  },
  {
    title: "WebGL Workshop",
    description: "Learn the basics of WebGL in small, manageable chunks.",
    code: "npm install -g webgl-workshop",
  },
  {
    title: "ESNext Generation",
    description: "Intro to ES6 Iterators, their use, and how they relate to Generators.",
    code: "npm install -g esnext-generation",
  },
  {
    title: "Tower of babel",
    description: "Show you through a series of exercises that introduce you to ES6 features.",
    code: "npm install -g tower-of-babel",
  },
  {
    title: "learnyoumongo",
    description: "Getting started with MongoDB and Node.js",
    code: "npm install -g learnyoumongo",
  },
  {
    title: "regex-adventure",
    description: "Parse text with regular expressions",
    code: "npm install -g regex-adventure",
  },
  {
    title: "learn-sass",
    description: "Learn the basics of SASS",
    code: "npm install -g learn-sass",
  },
  {
    title: "Pattern Lab Workshop",
    description: "Learn the basics of Pattern Lab.",
    code: "npm install -g pattern-lab-workshop",
  },
  {
    title: "learnyoubash",
    description: "Learn you how to use the terminal and write your first Bash script.",
    code: "npm install -g learnyoubash",
  },
  {
    title: "Currying in JavaScript",
    description: "Learn currying concept and creating a currying function in JavaScript.",
    code: "npm install -g currying-workshopper",
  },
  {
    title: "bacon-love",
    description: "Learn concepts of Functional and Reactive Programming using the Bacon.js library.",
    code: "npm install -g bacon-love",
  }
];

const articleContents2 = [
  {
    title: "Functional Javascript",
    description: "Learn how to write a functional javascript application using React and Redux",
    code: "npm install -g functional-javascript-workshop",
  },
  {
    title: "Level Me Up Scotty!",
    description: "Learn to use leveldb, a simple key/value store with a vibrant package.",
    code: "npm install -g levelmeup",
  },
  {
    title: "ExpressWorks",
    description: "Learn the basics of the Express.js framework.",
    code: "npm install -g expressworks",
  },
  {
    title: "Make Me Hapi",
    description: "Learn all about hapi through a series of challenges.",
    code: "npm install -g makemehapi",
  },
  {
    title: "Promise It Won't Hurt",
    description: "Learn to use promises in JavaScript to handle async operations.",
    code: "npm install -g promise-it-wont-hurt",
  },
  {
    title: "Async You",
    description: "Learn to use the async package.",
    code: "npm install -g async-you",
  },
  {
    title: "NodeBot Workshop",
    description: "Make robots with the johnny-five api.",
    code: "npm install -g nodebot-workshop",
  },
  {
    title: "Going Native",
    description: "An exploration of Node.js from the underside: native C++ add-ons.",
    code: "npm install -g goingnative",
  },
  {
    title: "Planet Proto",
    description: "Understanding JavaScript Prototypes",
    code: "npm install -g planetproto",
  },
  {
    title: "WebGL Workshop",
    description: "Learn the basics of WebGL in small, manageable chunks.",
    code: "npm install -g webgl-workshop",
  },
  {
    title: "ESNext Generation",
    description: "Intro to ES6 Iterators, their use, and how they relate to Generators.",
    code: "npm install -g esnext-generation",
  },
  {
    title: "Tower of babel",
    description: "Show you through a series of exercises that introduce you to ES6 features.",
    code: "npm install -g tower-of-babel",
  },
  {
    title: "learnyoumongo",
    description: "Getting started with MongoDB and Node.js",
    code: "npm install -g learnyoumongo",
  },
  {
    title: "regex-adventure",
    description: "Parse text with regular expressions",
    code: "npm install -g regex-adventure",
  },
  {
    title: "learn-sass",
    description: "Learn the basics of SASS",
    code: "npm install -g learn-sass",
  },
  {
    title: "Pattern Lab Workshop",
    description: "Learn the basics of Pattern Lab.",
    code: "npm install -g pattern-lab-workshop",
  },
  {
    title: "learnyoubash",
    description: "Learn you how to use the terminal and write your first Bash script.",
    code: "npm install -g learnyoubash",
  },
  {
    title: "Currying in JavaScript",
    description: "Learn currying concept and creating a currying function in JavaScript.",
    code: "npm install -g currying-workshopper",
  },
  {
    title: "bacon-love",
    description: "Learn concepts of Functional and Reactive Programming using the Bacon.js library.",
    code: "npm install -g bacon-love",
  },

];


function ElectivesHeadline() {
  return (
    <>
    <div className={styles.third}>
    {articleContents.map((elem, index) => (
      <div className={styles.elective_contentwrapper}>
        <h4>
          <Link to="#">{elem.title}</Link>
        </h4>
        <p>{elem.description}</p>
        <code>{elem.code}</code>
      </div>
    ))}
    </div>
    <div className={styles.third}>
    {articleContents2.map((elem, index) => (
      <div className={styles.elective_contentwrapper}>
        <h4>
          <Link to="#">{elem.title}</Link>
        </h4>
        <p>{elem.description}</p>
        <code>{elem.code}</code>
      </div>
    ))}
    </div>
    </>
  );
};

export default ElectivesHeadline

// function ElectivesHeadline() {
//   return (
//     <div className={styles.elective_contentwrapper}>
//       <h4>
//         <Link>Functional Javascript</Link>
//       </h4>
//       <p>Learn fundamental functional programming features of JavaScript in vanilla ES5.</p>
//       <code>npm install -g functional-javascript-workshop</code>
//     </div>
//   )
// }

// export default ElectivesHeadline