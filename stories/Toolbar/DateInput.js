import React from 'react'
import { instanceOf } from 'prop-types'

import { storiesOf } from '@storybook/react'

import moment from 'moment'

import Toolbar from '../../src/components/Toolbar'
import DateInput from '../../src/components/Toolbar/DateInput'

import presets from './datePresets'
import style from './style.css'


class DateInputState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dates: {
        start: props.start,
        end: props.end,
      },
    }

    this.handleDatesChange = this.handleDatesChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentWillReceiveProps ({ start, end }) {
    this.setState({ dates: { start, end } })
  }

  handleReset () {
    const { start, end } = this.props
    this.setState({ dates: { start, end } })
  }

  handleDatesChange (dates) {
    this.setState({ dates })
  }

  render () {
    const { dates } = this.state

    return (
      <div>
        <Toolbar>
          <DateInput
            presets={presets}
            dates={dates}
            onChange={this.handleDatesChange}
            active={dates.start && dates.end && true}
            limits={{
              lower: moment('01-01-2013', 'DD-MM-YYYY'),
              upper: moment('01-01-2025', 'DD-MM-YYYY'),
            }}
          />
          <button onClick={this.handleReset}>
            Reset dates
          </button>
        </Toolbar>

      </div>
    )
  }
}

DateInputState.propTypes = {
  start: instanceOf(moment),
  end: instanceOf(moment),
}

DateInputState.defaultProps = {
  start: null,
  end: null,
}

storiesOf('Toolbar', module)
  .add('DateInput', () => (
    <div className={style.main}>
      <h1>DateInput usage</h1>

      <section>
        <h2>Minimal setup</h2>
        <DateInputState />
      </section>

      <section>
        <h2>Specifying single day as initial dates</h2>
        <DateInputState start={moment()} end={moment()} />
      </section>

      <section>
        <h2>Specifying date range as initial dates</h2>
        <DateInputState start={moment().add(-7, 'days')} end={moment()} />
      </section>

      <section>
        <h2>Specifying null end as initial dates</h2>
        <DateInputState start={moment().add(-7, 'days')} />
      </section>
    </div>
  ))

