import React from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import useStore from "../../store/store"

import {BROWSER_TRANSITION_SECONDS} from "../../constants/application"

import style from "./BrowserCover.module.scss"

const BrowserCover = () => {
  const browser = useStore(state => state.browser)
  const playlists = useStore(state => state.playlists)
  const preview = useStore(state => state.preview)

  const {name, image} = playlists[browser]

  return (
    <div className={style.cover}>
      <div className={style.container}>
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={`${image}${preview}`}
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
                <div className={style.item}>
                  <img
                    src={image.startsWith("https://") ? image : `images/${image}`}
                    alt={`${name} cover`}
                    style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
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
              dur={`${BROWSER_TRANSITION_SECONDS}s`}
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