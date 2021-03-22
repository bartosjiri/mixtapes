import React, {memo, useContext} from "react"

import {Store} from "../../store/Store"

import cursors from "../cursor/cursors"

import style from "./MixtapesLogo.module.scss"

const MixtapesLogo = () => {
  const {setCursor, setBrowser, setPreview} = useContext(Store)

  const handleClick = () => {
    setBrowser(0)
    setPreview(false)
  }

  return (
    <h1
      className={style.logo}
      onClick={() => handleClick()}
      onMouseEnter={() => setCursor(cursors.up)}
      onMouseLeave={() => setCursor(cursors.default)}
    >
      Mixtapes
    </h1>
  )
}

export default memo(MixtapesLogo)