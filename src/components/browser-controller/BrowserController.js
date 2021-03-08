import {useContext, useEffect} from "react"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {PROGRESS_DURATION_SECONDS} from "../../configuration/application"

const BrowserController = () => {
  const {autoplay, playlist, setPlaylist} = useContext(Store)

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        playlist === playlists.length - 1
          ? setPlaylist(0)
          : setPlaylist(playlist + 1)
      }, PROGRESS_DURATION_SECONDS * 1000)
      return () => clearInterval(interval)
    }
  }, [autoplay, playlist, setPlaylist])

  return null
}

export default BrowserController