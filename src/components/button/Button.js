import React from "react"

import useStore from "../../store/store"

import {GENERAL_TRANSITION_SECONDS} from "../../constants/application"
import cursors from "../cursor/cursors"

import style from "./Button.module.scss"

const Button = ({
  href,
  target,
  className,
  children,
  ...props
}) => {
  const setCursor = useStore(state => state.setCursor)

  return (
    <a
      href={href}
      target={target}
      rel={target && "noreferren noopener"}
      className={`${style.button} ${className || ""}`}
      onMouseEnter={() => setCursor(cursors.arrow)}
      onMouseLeave={() => setCursor(cursors.default)}
      {...props}
    >
      <div
        className={style.container}
        style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}}
      >
        {children}
      </div>
    </a>
  )
}

export default Button