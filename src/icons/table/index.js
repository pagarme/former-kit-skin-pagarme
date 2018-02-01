import React from 'react'
import IconArrowDown from 'emblematic-icons/svg/ChevronDown24.svg'
import IconArrowUp from 'emblematic-icons/svg/ChevronUp24.svg'
import IconLongArrowDown from 'emblematic-icons/svg/ArrowDown24.svg'
import IconLongArrowUp from 'emblematic-icons/svg/ArrowUp24.svg'
import IconSort from 'emblematic-icons/svg/OrderTable24.svg'

module.exports = {
  expand: <IconArrowDown width="12px" height="12px" />,
  collapse: <IconArrowUp width="12px" height="12px" />,
  descending: <IconLongArrowDown width="12px" height="12px" />,
  ascending: <IconLongArrowUp width="12px" height="12px" />,
  orderable: <IconSort width="12px" height="12px" />,
}
