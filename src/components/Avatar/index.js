import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import classnames from 'classnames'
import FaUser from 'react-icons/lib/fa/user-md'

const applyThemr = themr('UIAvatar')

const Avatar = ({
  theme,
  photo,
  size,
}) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt="Foto de perfil"
        width={size}
        height={size}
        className={theme.avatar}
      />
    )
  }

  return (
    <div className={classnames(theme.avatar, theme.placeholder)}>
      <FaUser size={size} />
    </div>
  )
}


Avatar.propTypes = {
  theme: PropTypes.shape({
    avatar: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  size: PropTypes.number,
  photo: PropTypes.string,
}

Avatar.defaultProps = {
  theme: {},
  photo: null,
  size: 26,
}

export default applyThemr(Avatar)
