import React from "react"

import BrowserController from "../browser-controller/BrowserController"
import BrowserCover from "../browser-cover/BrowserCover"
import BrowserTitle from "../browser-title/BrowserTitle"

const Browser = () => (
  <>
    <BrowserController />
    <BrowserCover />
    <BrowserTitle />
  </>
)

export default Browser