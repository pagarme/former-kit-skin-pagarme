/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon, getStorybook } from '@storybook/react'
import createPercyAddon from '@percy-io/percy-storybook'


const { percyAddon, serializeStories } = createPercyAddon()

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
setAddon(percyAddon)

serializeStories(getStorybook)

