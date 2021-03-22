import React from "react"

import MixtapesLogo from "../../components/mixtapes-logo/MixtapesLogo"
import BartosjiriLogo from "../../components/bartosjiri-logo/BartosjiriLogo"

import style from "./Header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <MixtapesLogo />
      </div>
      <div className={style.author}>
        <BartosjiriLogo />
      </div>
    </header>
  )
}

export default Header