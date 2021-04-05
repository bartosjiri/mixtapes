const getAccessToken = require("./src/util/spotify-api/getAccessToken")
const getUserPlaylists = require("./src/util/spotify-api/getUserPlaylists")

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const {createNode} = actions

  const accessToken = await getAccessToken()
  const playlists = await getUserPlaylists(accessToken)

  const nodeId = "mixtapesPlaylists"

  const nodeContent = JSON.stringify(playlists)
  const nodeMeta = {
    id: createNodeId(nodeId),
    parent: null,
    children: [],
    internal: {
      type: nodeId,
      mediaType: "text/html",
      content: nodeContent,
      contentDigest: createContentDigest(nodeContent)
    }
  }

  const node = {playlists, ...nodeMeta}
  createNode(node)
}