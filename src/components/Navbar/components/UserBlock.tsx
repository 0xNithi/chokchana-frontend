import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LoginModal from './LoginModal'

const UserBlock: React.FC = () => {
  const auth = useSelector((state: any) => state.auth)
  const [modalOpen, setModalOpen] = useState(false)
  const toggleLoginModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <button
        className="px-4 py-1 text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple flex rounded-full focus:outline-none hover:opacity-75"
        aria-haspopup="true"
        onClick={toggleLoginModal}
      >
        <span className="sr-only">Open user menu</span>
        {auth.user ? auth.user.displayName : 'เข้าสู่ระบบ / ลงทะเบียน'}
      </button>
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </>
  )
}

export default UserBlock
