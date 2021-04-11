import React from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import useStore from "../../store/store"

import {BROWSER_TRANSITION_SECONDS} from "../../constants/application"

import style from "./PreviewCover.module.scss"

const PreviewCover = () => {
  const browser = useStore(state => state.browser)
  const playlists = useStore(state => state.playlists)
  const preview = useStore(state => state.preview)

  const {image, name} = playlists[browser]

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
                    src={image.startsWith("https://") ? image : `/images/${image}`}
                    alt={`${name} cover`}
                    style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                  />
                </div>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default PreviewCover