import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {BROWSER_TRANSITION_SECONDS} from "../../configuration/application"
import cursors from "../cursor/cursors"

import style from "./PreviewText.module.scss"

const PreviewText = () => {
  const {setCursor, browser, preview, setPreview} = useContext(Store)

  const {url, title, genre, tracks, artists} = playlists[browser]

  return (
    <div
      className={`${style.text} ${preview ? style.active : ""}`}
      onClick={() => setPreview(false)}
      onMouseEnter={() => setCursor(cursors.cross)}
    >
      <div className={style.container}>
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
                <a
                  className={style.content}
                  href={url}
                  target="_blank"
                  onMouseEnter={() => setCursor(cursors.play)}
                  onMouseLeave={() => setCursor(cursors.cross)}
                >
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
                    <span>{genre}</span>
                    <span>{tracks} tracks</span>
                  </div>
                  <div
                    className={style.artists}
                    style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                  >
                    {artists && artists.map(a => (
                      <span key={a}>{a}</span>
                    ))}
                  </div>
                </a>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default PreviewText