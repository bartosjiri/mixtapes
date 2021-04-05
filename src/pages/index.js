import React, {useEffect} from "react"

import useStore from "../store/store"

import compilePlaylists from "../util/playlists/compilePlaylists"
import usePlaylistsQuery from "../util/playlists/usePlaylistsQuery"
import fetchPlaylists from "../util/playlists/fetchPlaylists"

import Layout from "../layout/Layout"
import Browser from "../components/browser/Browser"
import Preview from "../components/preview/Preview"

const IndexPage = () => {
  const setPlaylists = useStore(state => state.setPlaylists)

  setPlaylists(compilePlaylists(usePlaylistsQuery()))
  useEffect(() => {
    (async () => {
      const fetchedPlaylists = await fetchPlaylists()
      if (fetchedPlaylists) {
        setPlaylists(compilePlaylists(fetchedPlaylists))
      }
    })()
  }, [])

  return (
    <Layout>
      <Browser />
      <Preview />
    </Layout>
  )
}

export default IndexPage