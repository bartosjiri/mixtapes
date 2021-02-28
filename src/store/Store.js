import React, {createContext, useState} from "react"

export const Store = createContext()

const Provider = ({children}) => {
  const [playlist, setPlaylist] = useState(0)
  const [detail, setDetail] = useState(false)

  console.log("[@DEBUG] Store - playlist: ", playlist)
  console.log("[@DEBUG] Store - detail: ", detail)

  return (
    <Store.Provider value={{
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