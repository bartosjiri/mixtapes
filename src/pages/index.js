import React, {useContext} from "react"

import {Store} from "../store/Store"
import Layout from "../layout/Layout"
import PlaylistController from "../components/playlist-controller/PlaylistController"
import PlaylistTitle from "../components/playlist-title/PlaylistTitle"
import PlaylistCover from "../components/playlist-cover/PlaylistCover"

import playlists from "../configuration/playlists"

const IndexPage = () => {
  const {playlist} = useContext(Store)

  const {title, image} = playlists[playlist]

  return (
    <Layout>
      <PlaylistController />
      <PlaylistTitle
        title={title}
      />
      <PlaylistCover
        src={image}
        alt={`${title} cover`}
      />
    </Layout>
  )
}

export default IndexPage
