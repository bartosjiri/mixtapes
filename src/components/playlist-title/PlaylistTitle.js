import React, {useState} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import {
  TITLE_SCROLL_SPEED,
  TITLE_TRANSITION_SECONDS
} from "../../configuration/application"

import style from "./PlaylistTitle.module.scss"

const PlaylistTitle = ({title}) => {
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
                key={title}
                timeout={{
                  enter: 0,
                  exit: TITLE_TRANSITION_SECONDS * 1000
                }}
                classNames={{
                  enterActive: style.entering,
                  exitActive: style.exiting
                }}
              >
                <div className={style.item}>
                  <Ticker
                    mode="chain"
                    speed={TITLE_SCROLL_SPEED}
                  >
                    {() => (
                      <h2 style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}>{title}</h2>
                    )}
                  </Ticker>
                </div>
              </CSSTransition>
            </SwitchTransition>
          )}
        </PageVisibility>
      </div>
    </div >
  )
}

export default PlaylistTitle