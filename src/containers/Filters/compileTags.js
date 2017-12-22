import {
  apply,
  applySpec,
  eqBy,
  flatten,
  head,
  innerJoin,
  last,
  map,
  objOf,
  pipe,
  prop,
} from 'ramda'

// compileTags(options, values)
const compileTags = pipe(
  Array.of,
  applySpec([
    pipe(
      head,
      map(prop('items')),
      flatten
    ),
    pipe(
      last,
      flatten,
      map(objOf('value'))
    ),
  ]),
  apply(innerJoin(eqBy(prop('value'))))
)

export default compileTags
