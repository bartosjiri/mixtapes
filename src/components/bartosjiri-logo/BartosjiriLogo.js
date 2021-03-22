import React, {memo, useContext} from "react"

import {Store} from "../../store/Store"

import {GENERAL_TRANSITION_SECONDS} from "../../configuration/application"
import cursors from "../cursor/cursors"

import style from "./BartosjiriLogo.module.scss"

const BartosjiriLogo = () => {
  const {setCursor} = useContext(Store)

  return (
    <a
      className={style.logo}
      href="https://bartosjiri.com"
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setCursor(cursors.up)}
      onMouseLeave={() => setCursor(cursors.default)}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1840 1840"
        style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}}
      >
        <path d="M0 420 320 420 640 1420 320 1420Z" />
        <path d="M867.2,880 L720,420 L400,420 L547.2,880 L867.2,880 Z M892.8,960 L1040,1420 L720,1420 L572.8,960 L892.8,960 Z" />
        <path d="M1292.8,960 L1440,1420 L1120,1420 L972.8,960 L1292.8,960 Z" />
        <path d="M1200 420 1520 420 1840 1420 1520 1420Z" />
      </svg>
    </a>
  )
}

export default memo(BartosjiriLogo)