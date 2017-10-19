import React from 'react'

import { storiesOf } from '@storybook/react'

import Tag from '../../src/components/Tag'

import style from './style.css'

const tags = [
  'lorem',
  'ipsum',
  'dolor',
  'amet',
  'consetetur',
]

storiesOf('Tags', module)
  .add('default', () => (
    <section>
      <p>Only style</p>
      <div className={style.tags}>
        {tags.map(title =>
          <Tag key={title}>{title}</Tag>)
        }
      </div>
    </section>
  ))
