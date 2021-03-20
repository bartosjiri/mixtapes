import {useState, useEffect} from "react"

const useMousePosition = () => {
  // @TODO: Hide when out of window
  // @TODO: Disable for mobile
  // @TODO: Implement requestAnimationFrame?

  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0
  })

  const updatePosition = event => {
    const {clientX, clientY} = event

    setPosition({
      clientX,
      clientY
    })
  }

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false)
    document.addEventListener("mouseenter", updatePosition, false)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", updatePosition)
    }
  }, [])

  return position
}

export default useMousePosition