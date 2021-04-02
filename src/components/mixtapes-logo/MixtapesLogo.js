import React from "react"

import useStore from "../../store/store"

import cursors from "../cursor/cursors"

import style from "./MixtapesLogo.module.scss"

const MixtapesLogo = () => {
  const setBrowser = useStore(state => state.setBrowser)
  const setCursor = useStore(state => state.setCursor)
  const setPreview = useStore(state => state.setPreview)

  const handleClick = () => {
    setBrowser(0)
    setPreview(false)
  }

  return (
    <h1
      className={style.logo}
      onClick={() => handleClick()}
      onMouseEnter={() => setCursor(cursors.arrow)}
      onMouseLeave={() => setCursor(cursors.default)}
    >
      Mixtapes
    </h1>
  )
}

export default MixtapesLogo