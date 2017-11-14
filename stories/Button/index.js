import React from 'react'

import IconAdd from 'react-icons/lib/fa/plus'

import { storiesOf } from '@storybook/react'

import Button from '../../src/components/Button'
import styles from './style.css'

storiesOf('Buttons', module)
  .add('all', () => (
    <div className={styles.container}>
      <h2>Default Button</h2>

      <div className={styles.spacingAround}>
        <Button>Call to Action</Button>
        <Button color="red">Call to Action</Button>
        <Button color="silver">Call to Action</Button>
      </div>

      <h2>Gradient</h2>
      <div className={styles.spacingAround}>
        <Button variant="gradient">Call to Action</Button>
        <Button color="red" variant="gradient">Call to Action</Button>
      </div>

      <h2>Outline Button</h2>

      <div className={styles.spacingAround}>
        <Button variant="outline">Call to Action</Button>
        <Button color="red" variant="outline">Call to Action</Button>
        <Button color="silver" variant="outline">Call to Action</Button>
      </div>

      <h2>Clean Button</h2>

      <div className={styles.spacingAround}>
        <Button variant="clean">Call to Action</Button>
        <Button color="red" variant="clean">Call to Action</Button>
        <Button color="silver" variant="clean">Call to Action</Button>
      </div>

      <h2>All buttons with icons</h2>

      <div className={styles.spacingAround}>
        <Button><IconAdd />Call to Action</Button>
        <Button color="red"><IconAdd />Call to Action</Button>
        <Button color="silver"><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="gradient"><IconAdd />Call to Action</Button>
        <Button color="red" variant="gradient"><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="outline"><IconAdd />Call to Action</Button>
        <Button color="red" variant="outline"><IconAdd />Call to Action</Button>
        <Button color="silver" variant="outline"><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="clean"><IconAdd />Call to Action</Button>
        <Button color="red" variant="clean"><IconAdd />Call to Action</Button>
        <Button color="silver" variant="clean"><IconAdd />Call to Action</Button>
      </div>

      <h2>Sizes</h2>

      <div className={styles.spacingAround}>
        <Button size="extra-small">extra-small</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button size="small">small</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button>Default</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button size="large">Default</Button>
      </div>

      <h2>All disabled</h2>

      <div className={styles.spacingAround}>
        <Button disabled><IconAdd />Call to Action</Button>
        <Button color="red" disabled><IconAdd />Call to Action</Button>
        <Button color="silver" disabled><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="gradient" disabled><IconAdd />Call to Action</Button>
        <Button color="red" variant="gradient" disabled><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="outline" disabled><IconAdd />Call to Action</Button>
        <Button color="red" variant="outline" disabled><IconAdd />Call to Action</Button>
        <Button color="silver" variant="outline" disabled><IconAdd />Call to Action</Button>
      </div>

      <div className={styles.spacingAround}>
        <Button variant="clean" disabled><IconAdd />Call to Action</Button>
        <Button color="red" variant="clean" disabled><IconAdd />Call to Action</Button>
        <Button color="silver" variant="clean" disabled><IconAdd />Call to Action</Button>
      </div>
    </div>
  ))
