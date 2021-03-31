import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {BROWSER_TRANSITION_SECONDS} from "../../configuration/application"

import style from "./PreviewCover.module.scss"

const PreviewCover = () => {
  const {browser, preview} = useContext(Store)

  const {image, title} = playlists[browser]

  return (
    <div className={style.cover}>
      <div className={style.container}>
        <SwitchTransition>
          <CSSTransition
            key={`${browser}${preview}`}
            timeout={{
              enter: BROWSER_TRANSITION_SECONDS * 1000,
              exit: BROWSER_TRANSITION_SECONDS * 1000
            }}
            classNames={{
              enterActive: style.entering,
              enter: style.entering,
              enterDone: style.entering,
              exitActive: style.exiting
            }}
          >
            <>
              {preview && (
                <div className={style.image}>
                  <img
                    src={`images/${image}`}
                    alt={`${title} cover`}
                    style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                  />
                </div>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div >
  )
}

export default PreviewCover