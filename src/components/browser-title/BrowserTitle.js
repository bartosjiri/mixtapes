import React, {useState} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import useStore from "../../store/store"

import playlists from "../../configuration/playlists"
import {
  BROWSER_SCROLL_SPEED,
  BROWSER_TRANSITION_SECONDS
} from "../../constants/application"
import cursors from "../cursor/cursors"

import style from "./BrowserTitle.module.scss"

const BrowserTitle = () => {
  const setCursor = useStore(state => state.setCursor)
  const setPreview = useStore(state => state.setPreview)
  const browser = useStore(state => state.browser)
  const preview = useStore(state => state.preview)

  const {title} = playlists[browser]

  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  const handleClick = () => {
    if (!preview) setPreview(true)
  }

  return (
    <div
      className={style.title}
      onMouseEnter={() => setCursor(cursors.default)}
    >
      <div className={style.container}>
        <PageVisibility onChange={handleVisibilityChange}>
          {pageIsVisible && (
            <SwitchTransition mode="in-out">
              <CSSTransition
                key={`${title}${preview}`}
                timeout={{
                  enter: 0,
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
                  {!preview && (
                    <div
                      className={style.item}
                      onClick={() => handleClick()}
                      onMouseEnter={() => setCursor(cursors.enter)}
                      onMouseLeave={() => setCursor(cursors.default)}
                    >
                      <Ticker
                        mode="chain"
                        speed={BROWSER_SCROLL_SPEED}
                      >
                        {() => (
                          <h2 style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}>
                            {title}
                          </h2>
                        )}
                      </Ticker>
                    </div>
                  )}
                </>
              </CSSTransition>
            </SwitchTransition>
          )}
        </PageVisibility>
      </div>
    </div >
  )
}

export default BrowserTitle