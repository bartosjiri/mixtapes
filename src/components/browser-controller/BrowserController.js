import {useContext, useEffect} from "react"

import {Store} from "../../store/Store"

import playlists from "../../configuration/playlists"
import {BROWSER_DURATION_SECONDS} from "../../constants/application"

const BrowserController = () => {
  const {autoplay, browser, setBrowser} = useContext(Store)

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        browser === playlists.length - 1
          ? setBrowser(0)
          : setBrowser(browser + 1)
      }, BROWSER_DURATION_SECONDS * 1000)
      return () => clearInterval(interval)
    }
  }, [autoplay, browser, setBrowser])

  return null
}

export default BrowserController