import React, {useState} from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import {TITLE_SCROLL_SPEED} from "../../configuration/application"

import style from "./PlaylistTitle.module.scss"

const PlaylistTitle = ({title}) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <div className={style.title}>
      <div className={style.container}>
        <PageVisibility onChange={handleVisibilityChange}>
          {pageIsVisible && (
            <Ticker
              mode="chain"
              speed={TITLE_SCROLL_SPEED}
            >
              {() => (
                <h2>{title}</h2>
              )}
            </Ticker>
          )}
        </PageVisibility>
      </div>
    </div >
  )
}

export default PlaylistTitle