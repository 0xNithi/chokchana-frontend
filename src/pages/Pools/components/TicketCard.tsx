import React from 'react'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const TicketCard: React.FC<Props> = ({ pool }) => {
  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <div className="text-2xl dark:text-purple-light">ค้นหาหมายเลขสลากของคุณ</div>
      <Divider />
      <div className="relative w-full">
        <input
          type="text"
          className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
        />
        <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
          ซื้อสลาก
        </button>
      </div>
      <div className="w-full bg-gray-light dark:bg-purple font-semibold p-4 rounded-3xl">
        <div className="text-lg text-purple dark:text-purple-light text-center">เลขคล้าย</div>
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
          <div className="bg-purple-lightest dark:bg-purple-dark border-2 border-purple dark:border-purple-light rounded-xl p-2 tracking-widest text-center text-white dark:text-gray">
            100110
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
