import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UIHeader')

const HeaderTitle = ({
  children,
  theme,
}) => (
  <h1 className={theme.title}>{children}</h1>
)

HeaderTitle.propTypes = {
  theme: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(HeaderTitle)
