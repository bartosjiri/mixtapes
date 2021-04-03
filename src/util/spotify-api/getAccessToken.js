require("dotenv").config()
const axios = require("axios")

const {SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET} = process.env

const getAccessToken = async () => {
  const clientCreds = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")

  try {
    const res = await axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${clientCreds}`
      },
      data: "grant_type=client_credentials"
    })

    return res.data.access_token
  } catch (err) {
    console.error("[ERROR] getAccessToken: ", err)
    console.error("[ERROR] getAccessToken: ", err.response.data.error)
  }
}

module.exports = getAccessToken