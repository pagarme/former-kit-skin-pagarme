import React from 'react'

import { storiesOf } from '@storybook/react'

import '../../src/styles/index.css'
import style from './style.css'

import {
  Card,
  CardTitle,
  CardText,
  CardGraphic,
  CardActions,
} from '../../src/components/Card'

import Button from '../../src/components/Button'


const TitleText = () => (
  <div className={style.showcase}>
    <Card>
      <CardTitle>
        Lorem ipsum dolor sit amet
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        venenatis placerat lacus et pretium. Aenean porttitor mi odio, vel
        blandit nulla malesuada et. Duis a tellus quis est iaculis accumsan.
        In diam est, egestas eu lobortis eu, laoreet ut tortor. Sed mattis
        sapien vel malesuada sodales. Curabitur hendrerit purus sed ex
        feugiat hendrerit. Vivamus eleifend odio a congue consectetur.
      </CardText>
    </Card>
  </div>
)

const TitleTextActions = () => (
  <div className={style.showcase}>
    <Card>
      <CardTitle>
        Lorem ipsum dolor sit amet
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        venenatis placerat lacus et pretium. Aenean porttitor mi odio, vel
        blandit nulla malesuada et. Duis a tellus quis est iaculis accumsan.
        In diam est, egestas eu lobortis eu, laoreet ut tortor. Sed mattis
        sapien vel malesuada sodales. Curabitur hendrerit purus sed ex
        feugiat hendrerit. Vivamus eleifend odio a congue consectetur.
      </CardText>
      <CardActions>
        <Button>Action</Button>
        <Button>Action</Button>
        <Button>Action</Button>
        <Button>Action</Button>
      </CardActions>
    </Card>
  </div>
)

const GraphicTitleTextActions = () => (
  <div className={style.showcase}>
    <Card>
      <CardGraphic>
        <img
          src="https://maxicharts.com/wp-content/uploads/2017/07/banner-1544x500.png"
          alt="placeholder"
        />
      </CardGraphic>
      <CardTitle>
        Lorem ipsum dolor sit amet
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        venenatis placerat lacus et pretium. Aenean porttitor mi odio, vel
        blandit nulla malesuada et. Duis a tellus quis est iaculis accumsan.
        In diam est, egestas eu lobortis eu, laoreet ut tortor. Sed mattis
        sapien vel malesuada sodales. Curabitur hendrerit purus sed ex
        feugiat hendrerit. Vivamus eleifend odio a congue consectetur.
      </CardText>
      <CardActions>
        <Button>Action</Button>
        <Button>Action</Button>
        <Button>Action</Button>
        <Button>Action</Button>
      </CardActions>
    </Card>
  </div>
)


storiesOf('Cards', module)
  .add(
    'Title and text',
    TitleText
  )
  .add(
    'Title, text and actions',
    TitleTextActions
  )
  .add(
    'Graphic, title, text and actions',
    GraphicTitleTextActions
  )

