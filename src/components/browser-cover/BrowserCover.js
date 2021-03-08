import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import {TITLE_TRANSITION_SECONDS} from "../../configuration/application"
import playlists from "../../configuration/playlists"

import style from "./BrowserCover.module.scss"

const BrowserCover = () => {
  const {playlist, detail} = useContext(Store)

  const {title, image} = playlists[playlist]

  return (
    <div className={style.cover}>
      <div className={style.container}>
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={`${image}${detail}`}
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
                <div className={style.item}>
                  <img
                    src={`images/${image}`}
                    alt={`${title} cover`}
                    style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}
                  />
                </div>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <svg>
        <filter
          id="coverFilter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.1"
            result="feTurb"
          >
            <animate
              attributeName="baseFrequency"
              values="0.1 0.1; 0.1 0.3"
              dur={`${TITLE_TRANSITION_SECONDS}s`}
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="feTurb"
            scale="100"
            result="feDisplMap"
          />
        </filter>
      </svg>
    </div>
  )
}

export default BrowserCover