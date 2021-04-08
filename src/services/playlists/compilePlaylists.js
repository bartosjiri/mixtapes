import playlistsConfig from "../../../configuration/playlists.yml"

const compilePlaylists = (fetchedPlaylists) => {
  if (!playlistsConfig && !playlistsConfig.length) {
    console.error("[ERROR] compilePlaylists: Invalid playlists config!")
    return
  }

  if (!fetchedPlaylists && !fetchedPlaylists.length) {
    console.error("[ERROR] compilePlaylists: Invalid incoming playlists!")
    return
  }

  let playlists = []

  fetchedPlaylists.forEach((fetchedItem, i) => {
    const playlistConfig = playlistsConfig.find(configItem => configItem.id === fetchedItem.id)

    if (!playlistConfig) {
      return
    }

    if (!playlistConfig.genre) {
      console.error("[ERROR] compilePlaylists: Missing genre value for playlist config: ", playlistConfig)
    }

    if (!playlistConfig.artists || !playlistConfig.artists.length) {
      console.error("[ERROR] compilePlaylists: Invalid artists value for playlist config: ", playlistConfig)
    }

    playlists.push({
      id: fetchedItem.id,
      name: playlistConfig.name || fetchedItem.name,
      image: playlistConfig.image || fetchedItem.images[0]?.url,
      genre: playlistConfig.genre,
      artists: playlistConfig.artists,
      tracks: fetchedItem.tracks?.total,
      order: playlistConfig.order || i + 1
    })
  })

  return playlists.sort((a, b) => {return a.order - b.order})
}

export default compilePlaylists