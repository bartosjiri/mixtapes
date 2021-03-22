import React from "react"

import BrowserProgress from "../../components/browser-progress/BrowserProgress"
import SpotifyLink from "../../components/spotify-link/SpotifyLink"

import style from "./Footer.module.scss"

const Header = () => (
  <footer className={style.footer}>
    <div className={style.progress}>
      <BrowserProgress />
    </div>
    <div className={style.spotify}>
      <SpotifyLink />
    </div>
  </footer>
)

export default Header