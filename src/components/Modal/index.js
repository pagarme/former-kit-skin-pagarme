import React from 'react'
import { node, bool, string, func, element } from 'prop-types'

import ReactModal from 'react-modal'

import style from './style.css'

const Modal = ({
  children,
  isOpen,
  onRequestClose,
}) => (
  <ReactModal
    isOpen={isOpen}
    role="dialog"
    parentSelector={() => document.body}
    overlayClassName={style.overlay}
    className={style.modal}
    onRequestClose={onRequestClose}
  >
    <div className={style.modalFrame}>
      {children}
    </div>
  </ReactModal>
)


Modal.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  onRequestClose: func,
}

Modal.defaultProps = {
  onRequestClose: null,
}

const ModalTitle = ({ title, icon }) => (
  <div className={style.modalTitle}>
    <div className={style.titleIcon}>{icon}</div>
    <h2 className={style.titleElement}>{title}</h2>
  </div>
)

ModalTitle.propTypes = {
  title: string.isRequired,
  icon: element,
}

ModalTitle.defaultProps = {
  icon: null,
}

const ModalActions = ({ children }) => (
  <div className={style.modalActions}>{children}</div>
)

ModalActions.propTypes = {
  children: node.isRequired,
}

const ModalContent = ({ children }) => (
  <div className={style.modalContent}>{children}</div>
)

ModalContent.propTypes = {
  children: node.isRequired,
}

export {
  Modal,
  ModalTitle,
  ModalActions,
  ModalContent,
}
