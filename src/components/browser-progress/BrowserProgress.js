import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {
  TITLE_TRANSITION_SECONDS,
  PROGRESS_DURATION_SECONDS
} from "../../configuration/application"

import style from "./BrowserProgress.module.scss"

const BrowserProgress = () => {
  const {autoplay, setAutoplay, playlist, detail} = useContext(Store)

  return (
    <div
      className={style.progress}
      onClick={() => setAutoplay(!autoplay)}
    >
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={detail}
          timeout={{
            enter: 0,
            exit: TITLE_TRANSITION_SECONDS * 1000
          }}
          classNames={{
            enterActive: style.progressEntering,
            enter: style.progressEntering,
            enterDone: style.progressEntering,
            exitActive: style.progressExiting
          }}
        >
          <>
            {!detail && (
              <div
                className={`${style.container} ${autoplay ? style.active : ""}`}
                style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}
              >
                <div className={style.value}>
                  <span className={style.placeholder}>00</span>
                  <SwitchTransition mode="in-out">
                    <CSSTransition
                      key={playlist}
                      timeout={{
                        enter: 0,
                        exit: TITLE_TRANSITION_SECONDS * 1000
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
                        style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}
                      >
                        {(playlist + 1).toString().padStart(2, '0')}
                      </span>
                    </CSSTransition>
                  </SwitchTransition>
                </div>
                <div className={style.bar}>
                  <div
                    key={playlist}
                    className={style.fill}
                    style={{animationDuration: `${PROGRESS_DURATION_SECONDS}s`}}
                  />
                </div>
                <div className={style.value}>
                  <span className={style.placeholder}>00</span>
                  <span className={style.total}>
                    {playlists.length.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default BrowserProgress