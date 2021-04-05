const getAccessToken = require("../../src/util/spotify-api/getAccessToken")
const getUserPlaylists = require("../../src/util/spotify-api/getUserPlaylists")

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