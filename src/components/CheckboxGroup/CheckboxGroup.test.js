import React from 'react'
import { mount } from 'enzyme'

import CheckboxGroup from './index'

describe('CheckboxGroup', () => {
  const options = [
    {
      label: 'Prédio',
      value: 'predio',
    },
    {
      label: 'Casa',
      value: 'casa',
    },
    {
      label: 'Sofá',
      value: 'sofa',
    },
  ]

  const values = ['sofa']

  const { value } = options[0]

  it('should trigger onChange', () => {
    const onChange = jest.fn()

    const component = mount(
      <CheckboxGroup
        options={options}
        name="pessoas"
        onChange={onChange}
        values={values}
        error="error"
        success="success"
      />
    )

    component
      .find('input')
      .first()
      .simulate('change')

    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenLastCalledWith(['sofa', value])

    component
      .find('input')
      .first()
      .simulate('change')

    expect(onChange).toHaveBeenLastCalledWith(['sofa'])
  })

  it('should not trigger onChange', () => {
    const onChange = jest.fn()

    const component = mount(
      <CheckboxGroup
        options={options}
        name="pessoas"
        onChange={onChange}
        values={values}
        disabled
        error="error"
        success="success"
      />
    )

    component
      .find('input')
      .first()
      .simulate('change')

    expect(onChange).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenLastCalledWith(['sofa', value])
  })
})

