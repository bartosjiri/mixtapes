import React from "react"

import PlaylistProgress from "../../components/playlist-progress/PlaylistProgress"

import style from "./Footer.module.scss"

const Header = () => (
  <footer className={style.footer}>
    <div className={style.progress}>
      <PlaylistProgress />
    </div>
  </footer>
)

export default Header