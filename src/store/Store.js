import React, {createContext, useState} from "react"

import cursors from "../components/cursor/cursors"

export const Store = createContext()

const Provider = ({children}) => {
  const [cursor, setCursor] = useState(cursors.default)
  const [autoplay, setAutoplay] = useState(true)
  const [browser, setBrowser] = useState(0)
  const [preview, setPreviewInternal] = useState(false)

  const setPreview = (state) => {
    setAutoplay(!state)
    setPreviewInternal(state)
  }

  return (
    <Store.Provider value={{
      cursor,
      setCursor,
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