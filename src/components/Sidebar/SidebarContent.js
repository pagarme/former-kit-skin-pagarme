import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UISidebar')

const SidebarContent = ({ theme, children }) => (
  <div className={theme.content}>
    {children}
  </div>
)

SidebarContent.propTypes = {
  theme: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(SidebarContent)
