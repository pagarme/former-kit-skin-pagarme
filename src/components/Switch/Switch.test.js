import React from 'react'
import { shallow } from 'enzyme'

import Switch from './index'

describe('Switch', () => {
  const onChange = jest.fn()

  it('should trigger onChange', () => {
    const component = shallow(
      <Switch
        onChange={onChange}
      />
    )
    component.find('input').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })

  it('Should render on default translation', () => {
    const component = shallow(
      <Switch
        checked
        onChange={onChange}
      />
    )

    expect(component.find('span').text()).toBe('on')
  })

  it('Should render on label in portuguese', () => {
    const component = shallow(
      <Switch
        checked
        onChange={onChange}
        strings={{
          on: 'ligado',
        }}
      />
    )

    expect(component.find('span').text()).toBe('ligado')
  })

  it('Should render off label in portuguese', () => {
    const component = shallow(
      <Switch
        onChange={onChange}
        strings={{
          off: 'desligado',
        }}
      />
    )

    expect(component.find('span').text()).toBe('desligado')
  })
})
