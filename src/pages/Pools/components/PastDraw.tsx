import React from 'react'
import Card from '../../../components/Card'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const PastDraw: React.FC<Props> = ({ pool }) => {
  return (
    <>
      <div className="relative w-96 mx-auto">
        <input
          type="text"
          className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full shadow outline-none focus:outline-none"
        />
        <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
          ค้นหา
        </button>
      </div>
      <Card className="grid grid-cols-12 font-semibold mx-16">
        <div className="col-span-12 md:col-span-5 flex flex-col space-y-4 p-4">
          <div className="text-center">
            <div className="dark:text-white text-3xl">งวดที่ #1</div>
            <div className="dark:text-white text-base">1 ม.ค. 2021 14:00 น.</div>
          </div>
          <Divider />
          <div className="mx-auto">
            <div className="flex items-center space-x-4">
              <img src="/images/chokchana-lottery.png" alt="ticket" className="w-20" />
              <div className="flex flex-col">
                <div className="text-base text-purple dark:text-purple-lightest">หมายเลขที่ชนะ</div>
                <div className="text-3xl text-purple dark:text-white">0 0 0 0 0 0 0</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/images/chokchana-lottery.png" alt="ticket" className="w-20" />
              <div className="flex flex-col">
                <div className="text-base text-purple dark:text-purple-lightest">เงินรางวัลทั้งหมด</div>
                <div className="text-2xl text-purple dark:text-white">{(1000000).toLocaleString('en-US')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 p-8 bg-gray-light dark:bg-purple m-4 rounded-xl space-y-4">
          <div className="text-purple dark:text-purple-light text-xl text-center">รางวัลอื่นๆ</div>
          <Divider />
          <div>
            <div className="text-purple-light">อันดับ 2</div>
            <div className="text-lg text-purple dark:text-white">1000000 1111111 1234567 1000000 1111111 1234567</div>
          </div>
          <div>
            <div className="text-purple-light">อันดับ 3</div>
            <div className="text-base text-purple dark:text-white">
              1000000 1111111 1234567 1000000 1111111 1234567 1000000 1111111 1234567 1234567 1000000 1111111 1234567
              1000000 1111111 1234567
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default PastDraw
