import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
  onDismiss?: () => void
}

const Modal: React.FC<Props> = ({ title, children, onDismiss }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col rounded-3xl shadow-lg bg-white dark:bg-gray-darkest outline-none focus:outline-none relative z-50">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray rounded-t">
              <h3 className="text-2xl dark:text-gray-light font-semibold">{title}</h3>
              <button
                className="w-8 h-8 ml-4 text-black dark:text-cyan float-right text-3xl font-semibold outline-none focus:outline-none"
                onClick={onDismiss}
              >
                ×
              </button>
            </div>
            <div className="flex p-6">{children}</div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={onDismiss} />
        </div>
      </div>
    </>
  )
}

export default Modal
