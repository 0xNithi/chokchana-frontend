import React from 'react'
import { useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import Card from '../../../components/Card'
import Divider from '../../../components/Divider'

type Props = {
  round: number
}

const PastDraw: React.FC<Props> = ({ round }) => {
  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const firstWinner: any = useContractCall({
    abi: ChokchanaLotteryInterface,
    address: LotteryAddress,
    method: 'getReward',
    args: [round, 1],
  })

  const secondWinner: any = useContractCall({
    abi: ChokchanaLotteryInterface,
    address: LotteryAddress,
    method: 'getReward',
    args: [round, 2],
  })

  const thirdWinner: any = useContractCall({
    abi: ChokchanaLotteryInterface,
    address: LotteryAddress,
    method: 'getReward',
    args: [round, 3],
  })

  return (
    <Card className="grid grid-cols-12 font-semibold mx-16">
      <div className="col-span-12 md:col-span-5 flex flex-col space-y-4 p-4">
        <div className="text-center">
          <div className="dark:text-white text-3xl">งวดที่ #{round}</div>
        </div>
        <Divider />
        <div className="mx-auto">
          <div className="flex items-center space-x-4">
            <img src="/images/chokchana-lottery.png" alt="ticket" className="w-20" />
            <div className="flex flex-col">
              <div className="text-base text-purple dark:text-purple-lightest">หมายเลขที่ชนะ</div>
              <div className="text-3xl text-purple dark:text-white">
                {firstWinner ? formatUnits(firstWinner[0], 0).replace('.0', '') : 'Loading...'}
              </div>
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
          <div className="text-lg text-purple dark:text-white">
            {secondWinner ? formatUnits(secondWinner[0], 0).replace('.0', '') : 'Loading...'}
          </div>
        </div>
        <div>
          <div className="text-purple-light">อันดับ 3</div>
          <div className="text-base text-purple dark:text-white">
            {thirdWinner ? formatUnits(thirdWinner[0], 0).replace('.0', '') : 'Loading...'}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PastDraw
