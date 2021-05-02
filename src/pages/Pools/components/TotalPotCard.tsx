import React from 'react'
import { useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const TotalPotCard: React.FC<Props> = ({ pool }) => {
  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const curRound: any = useContractCall({
    abi: ChokchanaLotteryInterface,
    address: LotteryAddress,
    method: 'getCurRound',
    args: [],
  })

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex">
        <img src="/images/thb-token.png" alt="thb-token" className="w-20" />
        <div className="flex flex-col font-semibold ml-4">
          {curRound ? (
            <>
              <div className="text-base text-purple-dark dark:text-purple-light">งวดที่ {`${curRound}`}</div>
              <div className="text-xl text-purple-dark dark:text-purple-light">เงินรางวัลรวม</div>
              <div className="text-xl dark:text-gray-light">{(1000000).toLocaleString('en-US')} THB</div>
            </>
          ) : (
            <div className="space-y-2">
              <div className="animate-pulse bg-purple-light rounded-xl w-16 h-4"></div>
              <div className="animate-pulse bg-purple-light rounded-xl w-32 h-6"></div>
              <div className="animate-pulse bg-white rounded-xl w-36 h-6"></div>
            </div>
          )}
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-4 font-semibold overflow-y-auto max-h-64">
        <div className="col-span-1 text-purple-dark dark:text-purple-light">อันดับ</div>
        <div className="col-span-1 text-purple-dark dark:text-purple-light text-right">รางวัล</div>
        <div className="col-span-1 dark:text-gray-light">1</div>
        <div className="col-span-1 dark:text-gray-light text-right">
          {curRound ? (
            (1000000).toLocaleString('en-US')
          ) : (
            <div className="animate-pulse bg-white rounded-xl w-24 h-4 ml-auto"></div>
          )}
        </div>
        <div className="col-span-1 dark:text-gray-light">2</div>
        <div className="col-span-1 dark:text-gray-light text-right">
          {curRound ? (
            (500000).toLocaleString('en-US')
          ) : (
            <div className="animate-pulse bg-white rounded-xl w-20 h-4 ml-auto"></div>
          )}
        </div>
        <div className="col-span-1 dark:text-gray-light">3</div>
        <div className="col-span-1 dark:text-gray-light text-right">
          {curRound ? (
            (300000).toLocaleString('en-US')
          ) : (
            <div className="animate-pulse bg-white rounded-xl w-20 h-4 ml-auto"></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TotalPotCard
