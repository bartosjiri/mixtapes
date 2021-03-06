import React from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {TITLE_TRANSITION_SECONDS} from "../../configuration/application"

import style from "./PlaylistCover.module.scss"

const PlaylistCover = ({src, alt}) => (
  <div className={style.cover}>
    <div className={style.container}>
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={src}
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
          <div className={style.item}>
            <img
              src={`images/${src}`}
              alt={alt}
              style={{animationDuration: `${TITLE_TRANSITION_SECONDS}s`}}
            />
          </div>
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

export default PlaylistCover