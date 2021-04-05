import React from "react"
import {SwitchTransition, CSSTransition} from "react-transition-group"

import useStore from "../../store/store"

import {BROWSER_TRANSITION_SECONDS} from "../../constants/application"
import cursors from "../cursor/cursors"

import style from "./PreviewNavigation.module.scss"

const PreviewNavigation = () => {
  const setBrowser = useStore(state => state.setBrowser)
  const setCursor = useStore(state => state.setCursor)
  const browser = useStore(state => state.browser)
  const playlists = useStore(state => state.playlists)
  const preview = useStore(state => state.preview)

  const handleClick = (modifier) => {
    if (browser + modifier < 0) {
      return setBrowser(playlists.length - 1)
    }
    if (browser + modifier > playlists.length - 1) {
      return setBrowser(0)
    }
    setBrowser(browser + modifier)
  }

  return (
    <div className={style.navigation}>
      <SwitchTransition>
        <CSSTransition
          key={preview}
          timeout={{
            enter: BROWSER_TRANSITION_SECONDS * 1000,
            exit: BROWSER_TRANSITION_SECONDS * 1000
          }}
          classNames={{
            enterActive: style.entering,
            enter: style.entering,
            enterDone: style.entering,
            exitActive: style.exiting
          }}
        >
          <>
            {preview && (
              <div className={style.container}>
                <div
                  className={style.previous}
                  style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                  onMouseEnter={() => setCursor(cursors.previous)}
                  onMouseLeave={() => setCursor(cursors.default)}
                  onClick={() => handleClick(-1)}
                >
                  <svg
                    className={style.arrow}
                    width="16"
                    height="16"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M370.523 65.593L382.371 77.0584L374.964 84.4645L361.464 97.9644L335.464 123.964L311.464 147.964L283.964 175.464L258.464 200.964L233.464 225.964L213.964 245.464L210.429 249L213.964 252.536L236.964 275.536L261.964 300.536L287.464 326.036L311.964 350.536L336.964 375.536L361.464 400.036L373.464 412.036L383.429 422L371.464 433.964L357.964 447.464L344.964 460.464L337.5 467.929L328.536 458.964L316.536 446.964L305.036 435.464L290.536 420.964L279.036 409.464L266.536 396.964L256.036 386.464L240.536 370.964L228.536 358.964L216.036 346.464L204.536 334.964L190.536 320.964L179.036 309.464L165.536 295.964L153.536 283.964L140.536 270.964L128.036 258.464L118.571 249L126.036 241.536L139.536 228.036L152.036 215.536L164.536 203.036L176.536 191.036L189.036 178.536L202.536 165.036L214.536 153.036L226.536 141.036L239.036 128.536L252.536 115.036L264.536 103.036L278.036 89.5355L290.536 77.0355L302.536 65.0355L314.036 53.5355L327.036 40.5355L335.633 31.9377L345.57 41.1381L358.001 53.0717L370.464 65.5355L370.493 65.5645L370.523 65.593Z" />
                  </svg>
                </div>
                <div
                  className={style.next}
                  style={{animationDuration: `${BROWSER_TRANSITION_SECONDS}s`}}
                  onMouseEnter={() => setCursor(cursors.next)}
                  onMouseLeave={() => setCursor(cursors.default)}
                  onClick={() => handleClick(1)}
                >
                  <svg
                    className={style.arrow}
                    width="16"
                    height="16"
                    viewBox="0 0 500 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M129.977 434.407L118.129 422.942L125.536 415.536L139.036 402.036L165.036 376.036L189.036 352.036L216.536 324.536L242.036 299.036L267.036 274.036L286.536 254.536L290.071 251L286.536 247.464L263.536 224.464L238.536 199.464L213.036 173.964L188.536 149.464L163.536 124.464L139.036 99.9645L127.036 87.9645L117.071 78L129.036 66.0355L142.536 52.5355L155.536 39.5355L163 32.0711L171.964 41.0355L183.964 53.0355L195.464 64.5355L209.964 79.0355L221.464 90.5355L233.964 103.036L244.464 113.536L259.964 129.036L271.964 141.036L284.464 153.536L295.964 165.036L309.964 179.036L321.464 190.536L334.964 204.036L346.964 216.036L359.964 229.036L372.464 241.536L381.929 251L374.464 258.464L360.964 271.964L348.464 284.464L335.964 296.964L323.964 308.964L311.464 321.464L297.964 334.964L285.964 346.964L273.964 358.964L261.464 371.464L247.964 384.964L235.964 396.964L222.464 410.464L209.964 422.964L197.964 434.964L186.464 446.464L173.464 459.464L164.867 468.062L154.93 458.862L142.499 446.928L130.036 434.465L130.007 434.436L129.977 434.407Z" />
                  </svg>

                </div>
              </div>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default PreviewNavigation