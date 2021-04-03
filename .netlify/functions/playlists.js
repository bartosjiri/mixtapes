require("dotenv").config()
const axios = require("axios")

const {SPOTIFY_USER_ID, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET} = process.env

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

const getUserPlaylists = async (accessToken) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists`,
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })

    return [...res.data.items]
  } catch (err) {
    console.error("[ERROR] getUserPlaylists: ", err)
    console.error("[ERROR] getUserPlaylists: ", err.response.data.error)
  }
}

exports.handler = async () => {
  try {
    const accessToken = await getAccessToken()
    const playlists = await getUserPlaylists(accessToken)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(playlists)
    }
  } catch (err) {
    console.error("[ERROR] playlists: ", err)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: `Error: ${err}`
    }
  }
}