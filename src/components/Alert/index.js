import React from 'react'
import classnames from 'classnames'
import {
  oneOf,
  element,
} from 'prop-types'
import IconCheck from 'react-icons/lib/md/check'
import IconInfo from 'react-icons/lib/md/info-outline'
import IconWarning from 'react-icons/lib/md/warning'
import IconClear from 'react-icons/lib/md/clear'

import style from './style.css'

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
}) {
  const Icon = icons[type]
  const iconClassName = classnames(style.icon, style[`${base}-${type}`])

  return (
    <div className={style.alert}>
      {Icon && (
        <div className={iconClassName}>
          <Icon />
        </div>
      )}
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

Alert.propTypes = {
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
  base: 'light',
}

export default Alert
