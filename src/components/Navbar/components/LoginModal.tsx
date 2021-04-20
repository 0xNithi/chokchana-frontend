import React, { Dispatch, SetStateAction } from 'react'
import { useEthers } from '@usedapp/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginUser, logoutUser } from '../../../store/actions/authActions'
import Modal from '../../Modal'

type Props = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const LoginModal: React.FC<Props> = ({ setModalOpen }) => {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.auth)
  const { account } = useEthers()
  const history = useHistory()

  const handleLogin = () => {
    dispatch(loginUser(history))
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  if (auth.user) {
    return (
      <Modal title={`ข้อมูลผู้ใช้งาน`} onDismiss={() => setModalOpen(false)}>
        <div className="flex-col">
          <img className="rounded-full mb-4" src={auth.user.photoURL} alt={auth.user.displayName} />
          <p className="mb-4">ชื่อผู้ใช้งาน: {auth.user.displayName}</p>
          {account && <p className="mb-4 truncate">กระเป๋าที่ใช้งาน: {account.substring(0, 8) + '...'}</p>}

          <button
            onClick={handleLogout}
            className="flex items-center w-full text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple rounded-3xl p-4 outline-none focus:outline-none hover:opacity-75"
          >
            ออกจากระบบ
          </button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal title="เข้าสู่ระบบ / ลงทะเบียน" onDismiss={() => setModalOpen(false)}>
      <button
        onClick={handleLogin}
        className="flex items-center w-full text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple rounded-3xl p-4 outline-none focus:outline-none hover:opacity-75"
      >
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-2">
          <path
            id="a"
            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
          <clipPath id="b">
            <use xlinkHref="#a" overflow="visible" />
          </clipPath>
          <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
          <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
          <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
          <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
        </svg>
        เข้าสู่ระบบด้วย GOOGLE
      </button>
    </Modal>
  )
}

export default LoginModal
