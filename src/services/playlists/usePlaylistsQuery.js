import {graphql, useStaticQuery} from "gatsby"

const usePlaylistsQuery = () => {
  const data = useStaticQuery(graphql`
    query Playlists {
      allMixtapesPlaylists {
        nodes {
          playlists {
            id
            name
            images {
              url
            }
            tracks {
              total
            }
          }
        }
      }
    }
  `)

  return data?.allMixtapesPlaylists?.nodes[0]?.playlists || []
}

export default usePlaylistsQuery