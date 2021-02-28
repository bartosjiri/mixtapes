import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import colorsStyle from '../../styles/colors.scss'

const Head = ({title}) => {
  const metaVersion = 'X2qwnlHzxX'

  return (
    <Helmet>
      <html lang="en" />
      <title>Mixtapes — bartosjiri</title>
      <meta httpEquiv="Content-Type" content="text/html" />
      <meta name="description" content="@TODO: Description" />
      <meta name="author" content="@TODO: Author" />
      <meta property="og:title" content="@TODO: Title" />
      <meta property="og:description" content="@TODO: Description" />
      <meta property="og:image" content={`https://@TODO: URL/meta/og-image.jpg?v=${metaVersion}`} />
      <meta property="og:image:width" content="1321" />
      <meta property="og:image:height" content="691" />
      <meta property="og:url" content="https://@TODO: URL" />
      <link rel="apple-touch-icon" sizes="180x180" href={`./meta/apple-touch-icon.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`./meta/favicon-32x32.png?v=${metaVersion}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`./meta/favicon-16x16.png?v=${metaVersion}`} />
      <link rel="manifest" href={`./meta/site.webmanifest?v=${metaVersion}`} />
      <link rel="mask-icon" href={`./meta/safari-pinned-tab.svg?v=${metaVersion}`} color={colorsStyle.meta_brand} />
      <link rel="shortcut icon" href={`./meta/favicon.ico?v=${metaVersion}`} />
      <meta name="msapplication-TileColor" content={colorsStyle.meta_background} />
      <meta name="theme-color" content={colorsStyle.meta_background} />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string
}

export default Head