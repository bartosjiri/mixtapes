import React from "react"

import useStore from "../../store/store"

import useMousePosition from "./useMousePosition"

import {GENERAL_TRANSITION_SECONDS} from "../../constants/application"

import style from "./Cursor.module.scss"

const Cursor = () => {
  const cursor = useStore(state => state.cursor)

  const {clientX, clientY, inWindow, isTouch} = useMousePosition()

  if (isTouch) {
    return null
  }

  return (
    <div className={style.cursor}>
      <div
        className={`${style.cursor_shape} ${cursor}`}
        style={{
          top: clientY,
          left: clientX,
          opacity: inWindow ? 1 : 0
        }}
      >
        <span style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}} />
        <span style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}} />
      </div>
    </div>
  )
}

export default Cursor