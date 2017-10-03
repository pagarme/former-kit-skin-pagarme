import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CheckboxGroupExamples from './examples/CheckboxGroup'
import DropdownExamples from './examples/Dropdown'
import InputExamples from './examples/Input'
import RadioGroupExamples from './examples/RadioGroup'

import style from './style.css'


storiesOf('Forms', module)
  .add('Inputs', () => (
    <div className={style.container}>
      <InputExamples />
    </div>
  ))
  .add('Dropdown', () => (
    <div className={style.container}>
      <DropdownExamples />
    </div>
  ))
  .add('Checkbox Group', () => (
    <div className={style.container}>
      <CheckboxGroupExamples />
    </div>
  ))
  .add('Radio Group', () => (
    <div className={style.container}>
      <RadioGroupExamples />
    </div>
  ))
