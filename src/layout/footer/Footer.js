import React from "react"

import BrowserProgress from "../../components/browser-progress/BrowserProgress"

import style from "./Footer.module.scss"

const Header = () => (
  <footer className={style.footer}>
    <div className={style.progress}>
      <BrowserProgress />
    </div>
  </footer>
)

export default Header