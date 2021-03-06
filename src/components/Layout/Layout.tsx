import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="max-w-7xl w-full mx-auto py-6 px-2">{children}</div>
}

export default Layout
