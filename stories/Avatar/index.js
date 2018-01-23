import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from '../../src/components/Avatar'

storiesOf('Avatar', module)
  .add('All types', () => (
    <div>
      <Avatar />
      <Avatar height={100} width={100} />
      <Avatar
        photo="https://i.imgur.com/V9mgrCp.jpg"
      />
      <Avatar
        photo="https://i.imgur.com/V9mgrCp.jpg"
        height={100}
        width={100}
      />
    </div>
  ))

