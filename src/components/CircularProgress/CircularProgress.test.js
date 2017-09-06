import React from 'react'
import { shallow } from 'enzyme'

import CircularProgress from './index'

describe('CircularProgress', () => {
  it('should mount basic component', () => {
    shallow(
      <CircularProgress
        label="Lorem Label"
        percent={25}
      />
    )
  })

  it('should mount with disabled', () => {
    shallow(
      <CircularProgress
        disabled
        label="Lorem Label"
        percent={75}
      />
    )
  })
})
