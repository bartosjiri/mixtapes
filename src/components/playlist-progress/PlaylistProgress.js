import React, {useContext} from "react"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {PROGRESS_DURATION_SECONDS} from "../../configuration/application"

import style from "./PlaylistProgress.module.scss"

const PlaylistProgress = () => {
  const {autoplay, setAutoplay, playlist} = useContext(Store)

  return (
    <div
      className={`${style.progress} ${autoplay ? style.active : ""}`}
      onClick={() => setAutoplay(!autoplay)}
    >
      <span className={style.current}>
        {(playlist + 1).toString().padStart(2, '0')}
      </span>
      <div className={style.bar}>
        <div
          key={playlist}
          className={style.value}
          style={{animationDuration: `${PROGRESS_DURATION_SECONDS}s`}}
        />
      </div>
      <span className={style.total}>
        {playlists.length.toString().padStart(2, '0')}
      </span>
    </div>
  )
}

export default PlaylistProgress