import React, {useContext} from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import {Store} from "../../store/Store"

import {TITLE_TRANSITION_SECONDS} from "../../configuration/application"
import playlists from "../../configuration/playlists"

import style from "./DetailCover.module.scss"

const DetailCover = () => {
  const {playlist, detail} = useContext(Store)

  const {image, title} = playlists[playlist]

  return (
    <div className={style.cover}>
      <div className={style.container}>
        <SwitchTransition>
          <CSSTransition
            key={detail}
            timeout={{
              // enter: TITLE_TRANSITION_SECONDS * 1000,
              // exit: 0
              enter: TITLE_TRANSITION_SECONDS * 1000,
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
              {detail && (
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
    </div >
  )
}

export default DetailCover