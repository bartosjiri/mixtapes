const React = require('react')

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents
}) => {
  setHeadComponents([
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>
  ])
  setPreBodyComponents([
    <noscript key="noscript">
      <div id="noscript">
        <h2>This website works best with JavaScript enabled, not using it may result in limited funcitonality.</h2>
      </div>
    </noscript>,
  ])
}