import React from "react"

import style from "./PlaylistCover.module.scss"

const PlaylistCover = ({children, src, alt}) => (
  <div className={style.cover}>
    <div className={style.container}>
      <div className={style.image}>
        <img src={src} alt={alt} />
        {children}
      </div>
    </div>
  </div>
)

export default PlaylistCover