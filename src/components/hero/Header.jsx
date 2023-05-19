import React from "react"
import "./header.css"

const languages = [
  "Bahasa",
  "Indonesia",
  "Deutsch",
  "English",
  "Español",
  "Français",
  "Italiano",
  "Norsk",
  "Polski",
  " Português(Brasil)",
  "Português(Europeu)",
  "Suomi",
  "Svenska",
  "Tiếng",
  "Việt",
  "Türkçe",
  "Български",
  "Русский",
  "Українська",
  "عربية",
  "فارسی",
  "हिंदी",
  "ภาษาไทย",
  "日本語",
  "正體中文",
  "简体中文",
  "한국어",
]

const Header = () => {
  return (
    <header>
      <div className="hero-section">
        <ul className="languages">
          {languages.map((language, index) => (
            <li className="lang" key={index}>
              <a href="#">{language}</a>
              <span>{index !== languages.length - 1 ? " | " : " "}</span>
            </li>
          ))}
        </ul>
        <div className="title-container">
          <img src="https://nodeschool.io/images/schoolhouse.svg" />
          <h1>NODESCHOOL</h1>
        </div>
      </div>
      <div className="description-container">
        <p className="description">
          Workshopper is the name used for the open source lesson modules
          associated with NodeSchool. All are self guided (you don't need to
          attend a workshop to do one) and most work offline.
        </p>
      </div>
    </header>
  )
}

export default Header
