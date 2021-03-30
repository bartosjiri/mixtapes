import React, {memo, useContext} from "react"

import {Store} from "../../store/Store"

import {GENERAL_TRANSITION_SECONDS} from "../../configuration/application"
import cursors from "../cursor/cursors"

import style from "./SpotifyLink.module.scss"

const SpotifyLink = () => {
  const {setCursor} = useContext(Store)

  return (
    <a
      className={style.spotify}
      href="https://open.spotify.com/user/21gi2l2todfet7ujsdtofnn5y"
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setCursor(cursors.arrow)}
      onMouseLeave={() => setCursor(cursors.default)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 427.652 427.652"
        style={{transitionDuration: `${GENERAL_TRANSITION_SECONDS}s`}}
      >
        <path d="M213.826,0C95.733,0,0,95.733,0,213.826s95.733,213.826,213.826,213.826s213.826-95.733,213.826-213.826S331.919,0,213.826,0zM306.886,310.32c-2.719,4.652-7.612,7.246-12.638,7.247c-2.506,0-5.044-0.645-7.364-2c-38.425-22.456-82.815-26.065-113.295-25.138c-33.763,1.027-58.523,7.692-58.769,7.76c-7.783,2.126-15.826-2.454-17.961-10.236c-2.134-7.781,2.43-15.819,10.209-17.962c1.116-0.307,27.76-7.544,64.811-8.766c21.824-0.72,42.834,0.801,62.438,4.52c24.83,4.71,47.48,12.978,67.322,24.574C308.612,294.393,310.96,303.349,306.886,310.32zM334.07,253.861c-3.22,5.511-9.016,8.583-14.97,8.584c-2.968,0-5.975-0.763-8.723-2.369c-45.514-26.6-98.097-30.873-134.2-29.776c-39.994,1.217-69.323,9.112-69.614,9.192c-9.217,2.515-18.746-2.906-21.275-12.124c-2.528-9.218,2.879-18.738,12.093-21.277c1.322-0.364,32.882-8.937,76.77-10.384c25.853-0.852,50.739,0.949,73.96,5.354c29.412,5.58,56.241,15.373,79.744,29.108C336.115,234.995,338.897,245.603,334.07,253.861zM350.781,202.526c-3.641,0-7.329-0.936-10.7-2.906c-108.207-63.238-248.572-25.643-249.977-25.255c-11.313,3.117-23.008-3.527-26.124-14.839c-3.117-11.312,3.527-23.008,14.839-26.124c1.621-0.447,40.333-10.962,94.166-12.737c31.713-1.044,62.237,1.164,90.72,6.567c36.077,6.844,68.987,18.856,97.815,35.704c10.13,5.92,13.543,18.931,7.623,29.061C365.193,198.757,358.084,202.526,350.781,202.526z" />
      </svg>
    </a>
  )
}

export default memo(SpotifyLink)
