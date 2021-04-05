import axios from "axios"

import applicationConfig from "../../../configuration/application.yml"

const fetchPlaylists = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `${applicationConfig.domain}/.netlify/functions/playlists`
    })

    return res.data
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[ERROR] fetchPlaylists: ", err)
    }
    return null
  }
}

export default fetchPlaylists