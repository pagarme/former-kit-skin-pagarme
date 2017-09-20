
import React from 'react'

import { storiesOf } from '@storybook/react'
import { range } from 'ramda'

import { Grid, Row, Col } from '../../src/components/Grid'
import CardSample from './CardSample'

import '../../src/styles/index.css'
import style from './style.css'

const maxColumns = 12
const equalDistributionExamples = [1, 2, 3, 4, 6, 12]

storiesOf('Grid', module)
  .add('Flexible', () => (
    <div className={style.background}>
      <Grid>
        <Row>
          {range(0, 2).map(i => (
            <Col
              key={i}
              tv={2}
              desktop={2}
              tablet={2}
              palm={2}
            >
              <CardSample size={2} />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  ))
