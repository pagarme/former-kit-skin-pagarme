import React from 'react'
import { shallow } from 'enzyme'

import SearchField from './index'

describe('SearchField', () => {
  it('should call onChange', () => {
    const onChange = jest.fn()

    const component = shallow(
      <SearchField
        onChange={onChange}
        value=""
      />
    )

    component.find('input')
      .simulate('change', {
        target: { value: 'target' },
      })

    expect(onChange).toHaveBeenCalledWith('target')
  })

  it('should not call onChange when disabled', () => {
    const onChange = jest.fn()

    const component = shallow(
      <SearchField
        onChange={onChange}
        value=""
        disabled
      />
    )

    component.find('input')
      .simulate('change', {
        target: { value: 'target' },
      })

    expect(onChange).not.toHaveBeenCalledWith('target')
  })
})
