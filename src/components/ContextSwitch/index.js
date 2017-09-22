import React from 'react'
import classnames from 'classnames'
import {
  arrayOf,
  string,
  func,
} from 'prop-types'

import style from './style.css'

function getClassName (selected, item) {
  return classnames(
    style.item,
    { [style.selected]: selected === item }
  )
}

const ContextSwitch = ({
  items,
  selected,
  onChange,
  name,
}) => (
  <div className={style.root}>
    {items.map((item, index) => (
      <label
        key={`context-switch-${item}`}
        className={getClassName(selected, item)}
        htmlFor={`${style.item}-${item}-${index}`}
      >
        <input
          className={style.itemInput}
          id={`${style.item}-${item}-${index}`}
          name={`${style.item}-${name}`}
          value={item}
          type="radio"
          checked={selected === item}
          onChange={() => onChange(item, index)}
        />

        <span className={style.itemLabel}>{item}</span>
      </label>
    ))}
  </div>
)

ContextSwitch.propTypes = {
  items: arrayOf(string).isRequired,
  selected: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
}

ContextSwitch.defaultProps = {
  selected: '',
}

export default ContextSwitch
