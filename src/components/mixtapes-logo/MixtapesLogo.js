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

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) handleClick()
  }

  return (
    <div
      className={style.logo}
      onClick={() => handleClick()}
      onMouseEnter={() => setCursor(cursors.arrow)}
      onMouseLeave={() => setCursor(cursors.default)}
      role="button"
      tabIndex="0"
      onKeyUp={(e) => handleKeyUp(e)}
    >
      <h1>Mixtapes</h1>
    </div>
  )
}

export default MixtapesLogo