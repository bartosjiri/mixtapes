import React from "react"

import BartosjiriLogo from "../../components/bartosjiri-logo/BartosjiriLogo"

import style from "./Header.module.scss"

const Header = () => (
  <header className={style.header}>
    <div className={style.logo}>
      <h1>Mixtapes</h1>
    </div>
    <div className={style.author}>
      <BartosjiriLogo />
    </div>
  </header>
)

export default Header