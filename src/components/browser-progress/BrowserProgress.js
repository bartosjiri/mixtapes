import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {
  BROWSER_DURATION_SECONDS,
  BROWSER_TRANSITION_SECONDS
} from "../../constants/application"
import cursors from "../cursor/cursors"

import style from "./BrowserProgress.module.scss"

const BrowserProgress = () => {
  const {setCursor, autoplay, setAutoplay, browser, setPreview, preview} = useContext(Store)

  const handleClick = () => {
    if (preview) {
      setPreview(false)
      return setCursor(cursors.pause)
    }
    setCursor(autoplay ? cursors.play : cursors.pause)
    setAutoplay(!autoplay)
  }

  const handleMouseEnter = () => {
    if (preview) {
      return setCursor(cursors.play)
    }
    setCursor(autoplay ? cursors.pause : cursors.play)
  }

  return (
    <div
      className={style.progress}
      onClick={() => handleClick()}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => setCursor(cursors.default)}
    >
      <div
        className={`${style.container} ${autoplay ? style.active : ""}`}
        style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
      >
        <div className={style.value}>
          <span className={style.placeholder}>00</span>
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={browser}
              timeout={{
                enter: 0,
                exit: BROWSER_TRANSITION_SECONDS * 1000
              }}
              classNames={{
                enterActive: style.valueEntering,
                enter: style.valueEntering,
                enterDone: style.valueEntering,
                exitActive: style.valueExiting
              }}
            >
              <span
                className={style.current}
                style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
              >
                {(browser + 1).toString().padStart(2, '0')}
              </span>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={style.bar}>
          <div
            key={browser}
            className={style.fill}
            style={{animationDuration: `${BROWSER_DURATION_SECONDS}s`}}
          />
        </div>
        <div className={style.value}>
          <span className={style.placeholder}>00</span>
          <span className={style.total}>
            {playlists.length.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BrowserProgress