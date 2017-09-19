import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  ifElse,
  is,
  always,
  merge,
} from 'ramda'

import style from './style.css'


const Card = ({ children }) => (
  <div className={style.card}>
    {children}
  </div>
)

const CardTitle = ({ title, icon, children, onClick }) => {
  const titleContent = (
    <div className={style.title}>
      {icon}
      <h3>{title}</h3>

      {children}
    </div>
  )

  const cardTitleClasses = classnames(style.titlePadding, {
    [style.cursor]: onClick,
  })

  const defaultProps = {
    className: cardTitleClasses,
  }

  const isInteractiveProps = {
    role: 'button',
    tabIndex: '0',
    onClick,
    onKeyUp: onClick,
  }

  const getProps = ifElse(
    is(Function),
    () => merge(defaultProps, isInteractiveProps),
    always(defaultProps)
  )

  return (
    <div
      {...getProps(onClick)}
    >
      {titleContent}
    </div>
  )
}

const CardContent = ({ children }) => (
  <div className={style.content}>
    {children}
  </div>
)

const CardGraphic = ({ children }) => (
  <div className={style.graphic}>
    {children}
  </div>
)

const CardActions = ({ children }) => (
  <div className={style.actions}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

CardTitle.defaultProps = {
  icon: null,
  children: null,
  onClick: null,
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}

CardGraphic.propTypes = {
  children: PropTypes.node.isRequired,
}

CardActions.propTypes = {
  children: PropTypes.node.isRequired,
}

export {
  Card,
  CardContent,
  CardGraphic,
  CardTitle,
  CardActions,
}

