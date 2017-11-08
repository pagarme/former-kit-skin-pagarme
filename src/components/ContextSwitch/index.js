import React from 'react'
import {
  arrayOf,
  string,
  func,
} from 'prop-types'

import style from './style.css'

const ContextSwitch = ({
  items,
  selected,
  onChange,
  name,
}) => (
  <div className={style.root}>
    {items.map((item, index) => (
      <label
        key={`context-switch-${name}-label-${item}`}
        className={style.item}
        htmlFor={`context-switch-${name}-input-${item}`}
      >
        <input
          className={style.itemInput}
          id={`context-switch-${name}-input-${item}`}
          name={`context-switch-${name}-input`}
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
