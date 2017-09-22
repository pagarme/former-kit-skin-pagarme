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


const Card = ({ className, children }) => (
  <div className={classnames(className, style.card)}>
    {children}
  </div>
)

const CardTitle = ({ title, icon, className, children, onClick }) => {
  const titleContent = (
    <div className={classnames(className, style.title)}>
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

const CardContent = ({ className, children }) => (
  <div className={classnames(className, style.content)}>
    {children}
  </div>
)

const CardGraphic = ({ className, children }) => (
  <div className={classnames(className, style.graphic)}>
    {children}
  </div>
)

const CardActions = ({ className, children }) => (
  <div className={classnames(className, style.actions)}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Card.defaultProps = {
  className: null,
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

CardTitle.defaultProps = {
  icon: null,
  className: null,
  children: null,
  onClick: null,
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardContent.defaultProps = {
  className: null,
}

CardGraphic.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardGraphic.defaultProps = {
  className: null,
}

CardActions.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardActions.defaultProps = {
  className: null,
}

export {
  Card,
  CardContent,
  CardGraphic,
  CardTitle,
  CardActions,
}

