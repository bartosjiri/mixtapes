const axios = require("axios")
const fs = require("fs")
const path = require('path');
const yaml = require("js-yaml")


const userConfigPath = path.join(__dirname, "../../../configuration/user.yml")
const userConfig = yaml.load(fs.readFileSync(userConfigPath, "utf-8"))

const getUserPlaylists = async (accessToken) => {
  if (!userConfig.id) {
    console.log("[ERROR] getUserPlaylists: Missing Spotify user ID!")
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
    console.log("[ERROR] getUserPlaylists: ", err)
    console.log("[ERROR] getUserPlaylists: ", err.response.data.error)
  }
}

module.exports = getUserPlaylists