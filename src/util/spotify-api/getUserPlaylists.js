require("dotenv").config()
const axios = require("axios")
const path = require("path")
const req = require('require-yml')

const userConfigPath = process.env.LAMBDA_TASK_ROOT
  ? path.resolve(process.env.LAMBDA_TASK_ROOT, "./configuration/user.yml")
  : path.join(__dirname, "../../../configuration/user.yml")
const userConfig = req(userConfigPath)

const getUserPlaylists = async (accessToken) => {
  if (!userConfig.id) {
    console.error("[ERROR] getUserPlaylists: Missing Spotify user ID!")
  }

  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/users/${userConfig.id}/playlists`,
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

module.exports = getUserPlaylists