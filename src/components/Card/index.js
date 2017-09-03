import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'


const Card = ({ children }) => (
  <div className={style.card}>
    {children}
  </div>
)

const CardTitle = ({ children }) => (
  <div className={style.title}>
    <h3>{children}</h3>
  </div>
)

const CardText = ({ children }) => (
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
}

CardTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

CardText.propTypes = {
  children: PropTypes.string.isRequired,
}

CardGraphic.propTypes = {
  children: PropTypes.node.isRequired,
}

CardActions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export {
  Card,
  CardText,
  CardGraphic,
  CardTitle,
  CardActions,
}

