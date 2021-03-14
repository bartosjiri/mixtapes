import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import {BROWSER_TRANSITION_SECONDS} from "../../configuration/application"

import style from "./PreviewText.module.scss"

const PreviewText = () => {
  const {playlists, browser, preview} = useContext(Store)

  const {title} = playlists[browser]

  return (
    <div className={style.text}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <SwitchTransition>
            <CSSTransition
              key={preview}
              timeout={{
                // enter: BROWSER_TRANSITION_SECONDS * 1000,
                // exit: 0
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
                  <div className={style.content}>
                    <div className={style.title}>
                      <div className={style.placeholder}>{title}</div>
                      <span style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}>{title}</span>
                      <span style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}>{title}</span>
                      <span style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}>{title}</span>
                      <span style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}>{title}</span>
                    </div>
                    <div
                      className={style.info}
                      style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                    >
                      <span>Drum & bass</span>
                      <span>123 tracks</span>
                    </div>
                    <div
                      className={style.artists}
                      style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                    >
                      {/* <span>Dimension</span>
                      <span>Fiction</span>
                      <span>The&nbsp;Document&nbsp;One</span>
                      <span>Hybrid&nbsp;Minds</span>
                      <span>S.P.Y</span>
                      <span>Changing&nbsp;Faces</span>
                      <span>Lelekovo</span>
                      <span>and&nbsp;98&nbsp;more</span> */}
                      <span>Dimension</span>
                      <span>Fiction</span>
                      <span>The Document One</span>
                      <span>Hybrid Minds</span>
                      <span>S.P.Y</span>
                      <span>Changing Faces</span>
                      <span>Lelekovo</span>
                      <span>Tantrum Desire</span>
                      <span>Polaris</span>
                      <span>Culture Shock</span>
                      <span>and 98 more</span>
                    </div>
                  </div>
                )}
              </>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  )
}

export default PreviewText