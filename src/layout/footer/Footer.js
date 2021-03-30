import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import BrowserProgress from "../../components/browser-progress/BrowserProgress"
import SpotifyLink from "../../components/spotify-link/SpotifyLink"

import {Store} from "../../store/Store"

import {BROWSER_TRANSITION_SECONDS} from "../../configuration/application"

import style from "./Footer.module.scss"

const Header = () => {
  const {preview} = useContext(Store)

  return (
    <footer className={style.footer}>
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={preview}
          timeout={{
            enter: 0,
            exit: BROWSER_TRANSITION_SECONDS * 1000
          }}
          classNames={{
            enterActive: style.footerEntering,
            enter: style.footerEntering,
            enterDone: style.footerEntering,
            exitActive: style.footerExiting
          }}
        >
          <>
            {!preview && (
              <div
                className={style.container}
                style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
              >
                <div className={style.progress}>
                  <BrowserProgress />
                </div>
                <div className={style.spotify}>
                  <SpotifyLink />
                </div>
              </div>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </footer>
  )
}

export default Header