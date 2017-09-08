import {
  number,
  bool,
  func,
  element,
  oneOfType,
  string,
  node,
  oneOf,
  arrayOf,
} from 'prop-types'

import TabItem from './TabItem'

const variantList = ['just-text', 'text-icon', 'just-icon']
const variantDefault = 'text-icon'

export const TabItemPropTypes = {
  key: number,
  selected: bool,
  onTabChange: func,
  onClick: func,
  icon: element,
  text: string,
  children: oneOfType([
    string,
    node,
    arrayOf(node),
  ]).isRequired,
  variant: oneOf(variantList),
}

export const TabItemDefaultProps = {
  key: null,
  selected: false,
  onClick: null,
  onTabChange: null,
  icon: null,
  text: null,
  variant: variantDefault,
}

export const TabBarPropTypes = {
  variant: oneOf(variantList),
  children: oneOfType([TabItem]).isRequired,
  index: number,
}

export const TabBarDefaultProps = {
  variant: variantDefault,
  index: 0,
}

