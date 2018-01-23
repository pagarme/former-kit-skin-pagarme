import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import IconArrowDown from 'react-icons/lib/md/arrow-downward'

const applyThemr = themr('UIHeader')

const HeaderMenu = ({
  children,
  theme,
  onClick,
}) => (
  <div
    className={theme.menu}
    onClick={onClick}
    role="button"
    tabIndex="0"
  >
    {children}
    <IconArrowDown />
  </div>
)

HeaderMenu.propTypes = {
  theme: PropTypes.shape({
    menu: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default applyThemr(HeaderMenu)
