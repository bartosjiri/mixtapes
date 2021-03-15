import React from 'react'
import PropTypes from 'prop-types'

import Head from '../util/head/Head'
import Header from './header/Header'
import Footer from './footer/Footer'

import Cursor from "../components/cursor/Cursor"

const Layout = ({
  title, children, ...props
}) => (
  <>
    <Head title={title} />
    <Header />
    <main {...props}>
      {children}
    </main>
    <Footer />
    <Cursor />
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Layout