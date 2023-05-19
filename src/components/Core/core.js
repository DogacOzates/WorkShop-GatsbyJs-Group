import * as React from "react"
import Seo from ".../components/seo"
import "./core.css"

const links = [
  {
    text: "javascripting",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Learn the basics of JavaScript. No previous programming experience required.",
    code: "npm install -g javascripting"
  },
  {
    text: "git-it",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Learn Git and GitHub basics.",
    code: "npm install -g git-it"
  },
  {
    text: "Elementary Electron",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description: "Make a desktop application using Node and Chromium with Electron.",
    code: "npm install -g elementary-electron"
  },
  {
    text: "learnyounode",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Learn the basics of node: asynchronous i/o, http.",
    code: "npm install -g learnyounode"
  },
  {
    text: "How to npm",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Learn how to use and create npm modules.",
    code: "npm install -g how-to-npm"
  },
  {
    text: "stream-adventure",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description: "Learn to compose streaming interfaces with .pipe().",
    code: "npm install -g stream-adventure"
  },
  {
    text: "how-to-markdown",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description: "Learn how to start using Markdown — a lightweight markup language with plain-text-formatting syntax.",
    code: "npm install -g how-to-markdown"
  },
  {
    text: "learnyouhtml",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description: "Learn how to create your first web page.",
    code: "npm install -g learnyouhtml"
  },
]

const Core = () => (
  <div className="parent">
    <div className="title">
      <h1>Core</h1>
      <p className="intro">
        These workshoppers focus on essential skills for working with Node.js.
      </p>
      <p>
        Stuck? Ask a question in the <a>discussion</a>.
      </p>
    </div>

    <div className="skills">
      {links.map((link) => (
        <div key={link.url} className="skill">
          <div className="listItemTitle">
            <a className="listItemLink" href={`${link.url}`}>
              {link.text} ↗
            </a>
          </div>

          <p className="listItemDescription">{link.description}</p>
          <pre className="listItemCode">{link.code}</pre>
        </div>
      ))}
    </div>
  </div>
);

export const Head = () => <Seo title="Home" />

export default Core
