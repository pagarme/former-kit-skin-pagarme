import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UISidebar')

const SidebarHeader = ({ theme, children }) => (
  <header className={theme.header}>
    {children}
  </header>
)

SidebarHeader.propTypes = {
  theme: PropTypes.shape({
    header: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(SidebarHeader)
