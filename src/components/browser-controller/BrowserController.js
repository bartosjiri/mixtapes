import {useEffect} from "react"

import useStore from "../../store/store"

import playlists from "../../configuration/playlists"
import {BROWSER_DURATION_SECONDS} from "../../constants/application"

const BrowserController = () => {
  const setBrowser = useStore(state => state.setBrowser)
  const autoplay = useStore(state => state.autoplay)
  const browser = useStore(state => state.browser)

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