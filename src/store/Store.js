import React, {createContext, useState} from "react"

export const Store = createContext()

const Provider = ({children}) => {
  const [autoplay, setAutoplay] = useState(true)
  const [playlist, setPlaylist] = useState(0)
  const [detail, setDetailInternal] = useState(false)

  console.log("[@DEBUG] Store - autoplay: ", autoplay)
  console.log("[@DEBUG] Store - playlist: ", playlist)
  console.log("[@DEBUG] Store - detail: ", detail)

  const setDetail = (state) => {
    setAutoplay(!state)
    setDetailInternal(state)
  }

  return (
    <Store.Provider value={{
      autoplay,
      setAutoplay,
      playlist,
      setPlaylist,
      detail,
      setDetail
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