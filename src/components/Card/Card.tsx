import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={`bg-white dark:bg-gray-darkest rounded-3xl shadow ${className}`}>{children}</div>
}

export default Card
