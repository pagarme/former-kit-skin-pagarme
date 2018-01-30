const React = require('react')
const IconArrowDown = require('react-icons/lib/md/keyboard-arrow-down')
const IconArrowUp = require('react-icons/lib/md/keyboard-arrow-up')
const IconLongArrowDown = require('react-icons/lib/fa/long-arrow-down')
const IconLongArrowUp = require('react-icons/lib/fa/long-arrow-up')
const IconSort = require('react-icons/lib/fa/sort')

module.exports = {
  expand: <IconArrowDown />,
  collapse: <IconArrowUp />,
  descending: <IconLongArrowDown />,
  ascending: <IconLongArrowUp />,
  orderable: <IconSort />,
}
