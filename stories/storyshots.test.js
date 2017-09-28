import initStoryshots, { snapshotWithOptions } from '@storybook/addon-storyshots'
import MockDate from 'mockdate'
import React from 'react'

MockDate.set(1506815400000)

function createNodeMock (element) {
  if (element.type) {
    return {
      __consolidated_events_handlers__: null,
      addEventListener: () => 1,
      querySelectorAll: () => [],
      style: {
        height: 0,
      },
    }
  }

  return null
}

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock,
  }),
})

jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    querySelector: () => null,
  }),
}))

global.getComputedStyle = () => ({
  styleSheets: {},
})

jest.mock('react-modal', () => (
  // eslint-disable-next-line react/prop-types
  ({ children }) => (
    <div className="modal">{children}</div>
  )
))
