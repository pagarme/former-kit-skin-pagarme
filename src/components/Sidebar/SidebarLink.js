import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { themr } from 'react-css-themr'
import IconArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'

const applyThemr = themr('UISidebar')

const Arrow = ({ active }) => (
  active
    ? <IconArrowUp />
    : <IconArrowDown />
)

Arrow.propTypes = {
  active: PropTypes.bool.isRequired,
}

const SidebarLink = ({
  theme,
  title,
  subtitle,
  children,
  onClick,
  active,
  icon,
  collapsed,
}) => (
  <li
    className={classNames(theme.link, {
      [theme.active]: active,
    })}
  >
    <div
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <div className={theme.title}>
        <span className={theme.icon}>{icon}</span>
        {!collapsed && title}
        {(!collapsed && !subtitle && children) && <Arrow active={active} />}
      </div>

      {subtitle &&
        <div className={theme.subtitle}>
          <span>{subtitle}</span>
          {children && <Arrow active={active} />}
        </div>
      }
    </div>

    {active && children}
  </li>
)

SidebarLink.propTypes = {
  theme: PropTypes.shape({
    link: PropTypes.string,
    active: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
  }),
  active: PropTypes.bool,
  children: PropTypes.node,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  collapsed: PropTypes.bool,
}

SidebarLink.defaultProps = {
  theme: {},
  active: false,
  children: null,
  onClick: null,
  subtitle: '',
  icon: null,
  collapsed: false,
}

export default applyThemr(SidebarLink)
