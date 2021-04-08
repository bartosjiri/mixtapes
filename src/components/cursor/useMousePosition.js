import {useState, useEffect, useCallback} from "react"

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0
  })
  const [inWindow, setInWindow] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const updatePosition = event => {
    const {clientX, clientY} = event

    setPosition({
      clientX,
      clientY
    })
  }

  const checkTouchDevice = () => {
    return window.matchMedia("(pointer: coarse)").matches
  }

  const handleMouseOver = useCallback(() => {
    setInWindow(true)
    setIsTouch(checkTouchDevice)
  }, [])

  const handleMouseOut = useCallback(() => {
    setInWindow(false)
    setIsTouch(checkTouchDevice)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsTouch(checkTouchDevice)
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false)
    document.addEventListener("mouseenter", updatePosition, false)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [handleMouseOver, handleMouseOut, handleMouseDown])

  return {
    ...position,
    inWindow,
    isTouch
  }
}

export default useMousePosition