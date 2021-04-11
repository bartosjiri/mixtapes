import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import useStore from "../../store/store"

import colorsStyle from '../../styles/colors.scss'

const Head = ({title}) => {
  const metaVersion = '8cyudgr5pu89ausk'
  const metaURL = "https://mixtapes.bartosjiri.com"

  const playlists = useStore(state => state.playlists)

  return (
    <Helmet>
      <html lang="en" />
      <title>Mixtapes — bartosjiri</title>
      <meta httpEquiv="Content-Type" content="text/html" />
      <meta name="description" content="Mixtapes & playlists by bartosjiri" />
      <meta name="author" content="bartosjiri" />
      <meta property="og:title" content="Mixtapes" />
      <meta property="og:description" content="Mixtapes & playlists by bartosjiri" />
      <meta property="og:image" content={`${metaURL}/meta/og-image.jpg?v=${metaVersion}`} />
      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1257" />
      <meta property="og:url" content={metaURL} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/meta/apple-touch-icon.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/meta/favicon-32x32.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/meta/favicon-16x16.png?v=${metaVersion}`} />
      <link rel="manifest" href={`/meta/site.webmanifest?v=${metaVersion}`} />
      <link rel="mask-icon" href={`/meta/safari-pinned-tab.svg?v=${metaVersion}`} color={colorsStyle.meta_brand} />
      <link rel="shortcut icon" href={`/meta/favicon.ico?v=${metaVersion}`} />
      <meta name="msapplication-TileColor" content={colorsStyle.meta_background} />
      <meta name="theme-color" content={colorsStyle.meta_background} />
      {playlists && playlists.length && playlists.map(item => {
        if (item.image) {
          const {id, image} = item
          return (
            <link
              key={id}
              rel="prefetch"
              href={image.startsWith("https://") ? image : `/images/${image}`}
              as="image"
            />
          )
        }
        return null
      })}
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string
}

export default Head