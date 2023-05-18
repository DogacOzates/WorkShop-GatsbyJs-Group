import React from 'react'
import { Link } from "gatsby"
import * as styles from './ElectivesContent.module.css';

const articleContentsLeft = [
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

const articleContentsRight = [
  {
    title: "Shader School",
    description: "Learn the fundamentals of graphics programming using GLSL shaders.",
    code: "npm install -g shader-school",
  },
  {
    title: "Bytewiser",
    description: "Learn how to manipulate binary data in node.js and HTML5 browsers.",
    code: "npm install -g bytewiser",
  },
  {
    title: "Browserify Adventure",
    description: "Use npm modules and node-style require() in the browser with browserify.",
    code: "npm install -g browserify-adventure",
  },
  {
    title: "Intro to WebGL",
    description: "Get started with three.js and WebGL.",
    code: "npm install -g introtowebgl",
  },
  {
    title: "Count to 6",
    description: "Learn how to use some features from ES6, the next version of JavaScript.",
    code: "npm install -g count-to-6",
  },
  {
    title: "Kick off Koa",
    description: "Getting started with Koa, the next generation web framework for Node.js.",
    code: "npm install -g kick-off-koa",
  },
  {
    title: "LololoDash",
    description: "Learn Lo-Dash (fork of underscore) to handle your arrays and objects simple!",
    code: "npm install -g lololodash",
  },
  {
    title: "learnyoucouchdb",
    description: "Learn about CouchDB - the database that completely embraces the web",
    code: "npm install -g learnyoucouchdb",
  },
  {
    title: "learnuv",
    description: "Learn uv for fun and profit, a self guided workshop to the library that powers Node.js.",
    code: "npm install -g learnuv",
  },
  {
    title: "Learn Generators",
    description: "An Intro to JavaScript ES6 Generators.",
    code: "npm install -g learn-generators",
  },
  {
    title: "learnyoureact",
    description: "Let's learn React.js and server side rendering!",
    code: "npm install -g learnyoureact",
  },
  {
    title: "perfschool",
    description: "Find your way through the web performance optimization maze!",
    code: "npm install -g perfschool",
  },
  {
    title: "Web Audio School",
    description: "Learn the Web Audio API by completing a series of interactive lessons with a focus on music.",
    code: "npm install -g web-audio-school",
  },
  {
    title: "torrential",
    description: "A set of lessons to show you how to create a simple p2p bittorrent network",
    code: "npm install -g torrential",
  },
  {
    title: "Thinking in React",
    description: "Learn React's philosophy by building a UI from scratch.",
    code: "npm install -g thinking-in-react",
  },
  {
    title: "Post-mortem debugging",
    description: "Learn how to use post-mortem debugging on SmartOS to efficiently debug Node.js applications in production.",
    code: "npm install -g node-debug-school",
  },
  {
    title: "Seneca in practice",
    description: "Learn how to leverage SenecaJs microservice toolkit.",
    code: "npm install -g seneca-in-practice",
  },
  {
    title: "LESS is more",
    description: "Learn the fundamentals of the LESS CSS preprocessor.",
    code: "npm install -g less-is-more",
  },
  {
    title: "JavaScript best practices",
    description: "Learn the best practices of writing clean JavaScript code.",
    code: "npm install -g js-best-practices",
  },
  {
    title: "Scope Chains & Closures",
    description: "Learn the details of Scope, Scope Chains, Closures, and Garbage Collection.",
    code: "npm i @workshoppers/scope-chains-closures -g",
  }

];


function ElectivesHeadline() {
  return (
    <>
    <div className={styles.third}>
    {articleContentsLeft.map((elem, index) => (
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
    {articleContentsRight.map((elem, index) => (
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