import React from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const useModal = (modal: React.ReactNode) => {
  const { handlePresent, handleDismiss } = React.useContext(ModalContext)
  const onPresentCallback = React.useCallback(() => {
    handlePresent(modal)
  }, [modal, handlePresent])

  return { onPresentCallback, handleDismiss }
}
export default useModal
