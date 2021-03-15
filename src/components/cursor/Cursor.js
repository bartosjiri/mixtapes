import React, {useContext} from "react"

import {Store} from "../../store/Store"

import useMousePosition from "./useMousePosition"

import style from "./Cursor.module.scss"

const Cursor = () => {
  const {cursor} = useContext(Store)

  const {clientX, clientY} = useMousePosition()

  return (
    <div className={style.cursor}>
      <div
        // @DEBUG:
        className={`${style.container} ${cursor ? style.chevron : style.cross}`}

        style={{
          top: clientY,
          left: clientX
        }}
      />

      {/* @TODO: Alternative */}
      {/* <svg>
        <defs>
          <clipPath id="cursorCross" clipPathUnits="objectBoundingBox">
            <polygon points="302.500 0.000, 302.500 197.500, 500.000 197.500, 500.000 302.500, 302.500 302.500, 302.500 500.000, 197.500 500.000, 197.500 302.500, 0.000 302.500, 0.000 197.500, 197.500 197.500, 197.500 0.000, 302.500 0.000" />
          </clipPath>
          <clipPath id="cursorChevron" clipPathUnits="objectBoundingBox">
            <polygon points="406.500 92.000, 407.000 92.000, 407.000 92.500, 407.000 196.500, 407.000 197.000, 407.000 500.000, 302.000 500.000, 302.000 197.000, 0.000 197.000, 0.000 92.000, 302.000 92.000, 302.500 92.000, 406.500 92.000" />
          </clipPath>
        </defs>
      </svg> */}
    </div>
  )
}

export default Cursor