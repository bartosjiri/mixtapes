import React, {useState, useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import {Store} from "../../store/Store"

import {
  BROWSER_SCROLL_SPEED,
  BROWSER_TRANSITION_SECONDS
} from "../../configuration/application"

import style from "./BrowserTitle.module.scss"

const BrowserTitle = () => {
  // const {playlists, browser, preview, setPreview} = useContext(Store)

  // @DEBUG:
  const {setCursor, playlists, browser, preview, setPreview} = useContext(Store)


  const {title} = playlists[browser]

  const handleClick = () => {
    if (!preview) setPreview(true)
  }

  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <div className={style.title}>
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

                      // @DEBUG:
                      onMouseEnter={() => setCursor(1)}
                      onMouseLeave={() => setCursor(0)}

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