import axios from "axios"

const fetchPlaylists = async () => {
  const endpointHost = `${window.location.protocol}//${process.env.NODE_ENV === 'development' ? "localhost:9000" : window.location.host}`

  try {
    const res = await axios({
      method: "GET",
      url: `${endpointHost}/.netlify/functions/playlists`
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