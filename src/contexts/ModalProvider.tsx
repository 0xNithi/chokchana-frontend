import React from 'react'
import Modal from '../components/Modal'

type ContextProps = {
  handlePresent: (node: React.ReactNode) => void
  handleDismiss: () => void
}

const ModalContext = React.createContext<ContextProps>({
  handlePresent: (node: React.ReactNode) => {},
  handleDismiss: () => {},
})

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalNode, setModalNode] = React.useState<React.ReactNode>()

  const handlePresent = (node: React.ReactNode) => {
    setModalNode(node)
    setIsOpen(true)
  }

  const handleDismiss = () => {
    setModalNode(undefined)
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ handlePresent, handleDismiss }}>
      {isOpen &&
        React.isValidElement(modalNode) &&
        React.cloneElement(modalNode, {
          onDismiss: handleDismiss,
        })}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
