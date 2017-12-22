import React from 'react'
import { mount } from 'enzyme'

import Toolbar from './index'

describe('<Toolbar />', () => {
  it('should mount', () => {
    mount(
      <Toolbar>
        I am the children.
      </Toolbar>
    )
  })
})
