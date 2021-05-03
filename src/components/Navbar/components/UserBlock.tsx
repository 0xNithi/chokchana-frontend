import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'

import { THBTokenAddress } from '../../../config/constants/addresses'
import LoginModal from './LoginModal'

const UserBlock: React.FC = () => {
  const auth = useSelector((state: any) => state.auth)
  const [modalOpen, setModalOpen] = useState(false)
  const toggleLoginModal = () => {
    setModalOpen(!modalOpen)
  }

  const { account } = useEthers()
  const thbBalance: any = useTokenBalance(THBTokenAddress, account)

  return (
    <div className="flex">
      <button
        className="mx-1 px-4 py-1 text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple flex rounded-full focus:outline-none hover:opacity-75"
        aria-haspopup="true"
        onClick={toggleLoginModal}
      >
        <span className="sr-only">Open user menu</span>
        {auth ? auth.displayName : 'เข้าสู่ระบบ / ลงทะเบียน'}
      </button>
      {auth && (
        <div className="mx-1 px-4 py-1 text-base text-cyan-dark dark:text-cyan font-extrabold bg-gray-light dark:bg-purple flex rounded-full focus:outline-none hover:opacity-75">
          {thbBalance && `${formatUnits(thbBalance, 18)} ฿`}
          {!account && 'โปรดเชื่อมต่อกระเป๋า'}
          {account && !thbBalance && 'กำลังโหลด...'}
        </div>
      )}
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
    </div>
  )
}

export default UserBlock
