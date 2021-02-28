import React, {useEffect} from "react"
import {navigate} from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    typeof window !== undefined && navigate("/")
  }, [])


  return (
    <p>@TODO</p>
  )
}

export default NotFoundPage
