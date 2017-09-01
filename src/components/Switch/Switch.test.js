import React from 'react'
import { shallow } from 'enzyme'

import Switch from './index'

describe('Switch', () => {
  const onChange = jest.fn()

  const component = shallow(
    <Switch
      onChange={onChange}
    />
  )

  it('should trigger onChange', () => {
    component.find('input').simulate('change')
    expect(onChange).toHaveBeenCalled()
  })
})
