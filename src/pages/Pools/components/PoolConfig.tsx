import React from 'react'
import Card from '../../../components/Card'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const ConfigPool: React.FC<Props> = ({ pool }) => {
  return (
    <div className="grid grid-cols-12 gap-12">
      <Card className="col-span-12 md:col-span-5 flex flex-col px-12 py-8 space-y-6 items-center">
        <div className="text-2xl dark:text-purple-light">ตั้งค่ากองสลาก</div>
        <Divider />
        <div className="w-full">
          <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลางวดถัดไปออกรางวัล</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลาล็อกก่อนออกรางวัล</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลาล็อกก่อนออกรางวัล</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
      </Card>
      <Card className="col-span-12 md:col-span-7 flex flex-col px-12 py-8 space-y-6 items-center">
        <div className="text-2xl dark:text-purple-light">กำหนดรางวัล</div>
        <Divider />
        <div className="w-full flex items-center justify-center space-x-4">
          <div className="text-3xl dark:text-purple-light">1#</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center space-x-4">
          <div className="text-3xl dark:text-purple-light">2#</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center space-x-4">
          <div className="text-3xl dark:text-purple-light">3#</div>
          <div className="relative">
            <input
              type="text"
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
              บันทึก
            </button>
          </div>
        </div>
        <button className="btn py-2 px-6 text-white text-xl text-center bg-cyan">ออกรางวัล</button>
      </Card>
    </div>
  )
}

export default ConfigPool
