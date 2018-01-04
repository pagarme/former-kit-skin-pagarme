import React from 'react'
import classNames from 'classnames'

import {
  oneOf,
  element,
  shape,
  string,
} from 'prop-types'

import IconCheck from 'react-icons/lib/md/check'
import IconInfo from 'react-icons/lib/md/info-outline'
import IconWarning from 'react-icons/lib/md/warning'
import IconClear from 'react-icons/lib/md/clear'

import { themr } from 'react-css-themr'

const applyThemr = themr('UIAlert')

const icons = {
  success: IconCheck,
  info: IconInfo,
  warning: IconWarning,
  error: IconClear,
}

function Alert ({
  type,
  children,
  base,
  theme,
}) {
  const Icon = icons[type]
  const iconClassName = classNames(
    theme.icon,
    theme[base],
    theme[type]
  )

  return (
    <div className={theme.alert}>
      {Icon && (
        <div className={iconClassName}>
          <Icon />
        </div>
      )}
      <div className={theme.content}>
        {children}
      </div>
    </div>
  )
}

Alert.propTypes = {
  theme: shape({
    alert: string,
    icon: string,
    content: string,
    light: string,
    dark: string,
    warning: string,
    info: string,
    error: string,
    success: string,
  }),
  type: oneOf([
    'warning',
    'info',
    'error',
    'success',
  ]).isRequired,
  children: element.isRequired,
  base: oneOf([
    'dark',
    'light',
  ]),
}

Alert.defaultProps = {
  theme: {},
  base: 'light',
}

export default applyThemr(Alert)
