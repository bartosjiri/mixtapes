import React, {createContext, useState} from "react"

import playlists from "../configuration/playlists"

export const Store = createContext()

const Provider = ({children}) => {
  const [autoplay, setAutoplay] = useState(true)
  const [browser, setBrowser] = useState(0)
  const [preview, setPreviewInternal] = useState(false)

  console.log("[@DEBUG] Store - autoplay: ", autoplay)
  console.log("[@DEBUG] Store - browser: ", browser)
  console.log("[@DEBUG] Store - preview: ", preview)

  const setPreview = (state) => {
    setAutoplay(!state)
    setPreviewInternal(state)
  }

  return (
    <Store.Provider value={{
      playlists,
      autoplay,
      setAutoplay,
      browser,
      setBrowser,
      preview,
      setPreview
    }}>
      {children}
    </Store.Provider>
  )
}

export default ({element}) => (
  <Provider>
    {element}
  </Provider>
)