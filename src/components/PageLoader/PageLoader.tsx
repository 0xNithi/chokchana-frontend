import React from 'react'

const PageLoader: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-5xl text-purple-light">
      <img src="/images/loading.png" alt="loading" />
      กำลังโหลด...
    </div>
  )
}

export default PageLoader
