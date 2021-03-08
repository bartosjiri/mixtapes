import React, {useState, useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import {Store} from "../../store/Store"

import {
  TITLE_SCROLL_SPEED,
  TITLE_TRANSITION_SECONDS
} from "../../configuration/application"
import playlists from "../../configuration/playlists"

import style from "./BrowserTitle.module.scss"

const BrowserTitle = () => {
  const {playlist, detail, setDetail} = useContext(Store)
  const {title} = playlists[playlist]

  const handleClick = () => {
    if (!detail) setDetail(true)
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
                key={`${title}${detail}`}
                timeout={{
                  enter: 0,
                  exit: TITLE_TRANSITION_SECONDS * 1000
                }}
                classNames={{
                  enterActive: style.entering,
                  enter: style.entering,
                  enterDone: style.entering,
                  exitActive: style.exiting
                }}
              >
                <>
                  {!detail && (
                    <div
                      className={style.item}
                      onClick={() => handleClick()}
                    >
                      <Ticker
                        mode="chain"
                        speed={TITLE_SCROLL_SPEED}
                      >
                        {() => (
                          <h2 style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}>
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