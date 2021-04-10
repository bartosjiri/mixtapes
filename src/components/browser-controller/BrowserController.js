import {useEffect} from "react"
import {useReadyStateEffect} from "react-ready-state-effect"

import useStore from "../../store/store"

import {BROWSER_DURATION_SECONDS} from "../../constants/application"

const BrowserController = () => {
  const setAutoplay = useStore(state => state.setAutoplay)
  const setBrowser = useStore(state => state.setBrowser)
  const autoplay = useStore(state => state.autoplay)
  const browser = useStore(state => state.browser)
  const playlists = useStore(state => state.playlists)

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        browser === playlists.length - 1
          ? setBrowser(0)
          : setBrowser(browser + 1)
      }, BROWSER_DURATION_SECONDS * 1000)
      return () => clearInterval(interval)
    }
  }, [autoplay, browser, setBrowser, playlists.length])

  useEffect(() => {
    setAutoplay(false)
  }, [setAutoplay])

  useReadyStateEffect(() => {
    setAutoplay(true)
  }, [])

  return null
}

export default BrowserController