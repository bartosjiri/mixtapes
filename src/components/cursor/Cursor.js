import React, {useContext} from "react"

import {Store} from "../../store/Store"

import useMousePosition from "./useMousePosition"

import {GENERAL_TRANSITION_SECONDS} from "../../configuration/application"

import style from "./Cursor.module.scss"

const Cursor = () => {
  const {cursor} = useContext(Store)

  const {clientX, clientY} = useMousePosition()

  return (
    <div className={style.cursor}>
      <div
        className={`${style.cursor_shape} ${cursor}`}
        style={{
          top: clientY,
          left: clientX,
        }}
      >
        <span style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}} />
        <span style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}} />
      </div>

    </div>
  )
}

export default Cursor