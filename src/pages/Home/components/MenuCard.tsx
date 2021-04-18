import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: React.ReactNode
}

const MenuCard: React.FC<Props> = ({ to, children }) => {
  return (
    <Link to={to}>
      <div className="flex flex-auto p-8 bg-gray-light dark:bg-purple rounded-3xl items-center space-x-8">
        {children}
      </div>
    </Link>
  )
}

export default MenuCard
