import React, {useContext} from "react"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import cursors from "../cursor/cursors"

import style from "./PreviewNavigation.module.scss"

const PreviewNavigation = () => {
  const {setCursor, browser, setBrowser, preview} = useContext(Store)

  const handleClick = (modifier) => {
    if (browser + modifier < 0) {
      return setBrowser(playlists.length - 1)
    }
    if (browser + modifier > playlists.length - 1) {
      return setBrowser(0)
    }
    setBrowser(browser + modifier)
  }

  return (
    <div className={style.navigation}>
      {preview && (
        <>
          <div
            className={`${style.container} ${style.container_previous}`}
            onMouseEnter={() => setCursor(cursors.previous)}
            onMouseLeave={() => setCursor(cursors.default)}
            onClick={() => handleClick(-1)}
          >
            {/* <span className={style.arrow} /> */}
          </div>
          <div
            className={`${style.container} ${style.container_next}`}
            onMouseEnter={() => setCursor(cursors.next)}
            onMouseLeave={() => setCursor(cursors.default)}
            onClick={() => handleClick(1)}
          >
            {/* <span className={style.arrow} /> */}
          </div>
        </>
      )}
    </div>
  )
}

export default PreviewNavigation