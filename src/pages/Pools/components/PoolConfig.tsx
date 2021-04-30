import React, { useState } from 'react'
import { useEthers, useContractCall, useContractFunction } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'

import { LotteryAddress, RandomGeneratorAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import RandomGeneratorABI from '../../../config/abis/RandomGenerator.json'
import Card from '../../../components/Card'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const ConfigPool: React.FC<Props> = ({ pool }) => {
  const { account, library } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)
  const RandomGeneratorInterface = new Interface(RandomGeneratorABI)

  const contract = new Contract(LotteryAddress, ChokchanaLotteryInterface, library?.getSigner())
  const randomGeneratorContract = new Contract(RandomGeneratorAddress, RandomGeneratorInterface, library?.getSigner())
  const setNextDrawContractFunction = useContractFunction(contract, 'setNextDraw')
  const setLockBeforeDrawContractFunction = useContractFunction(contract, 'setlockBeforeDraw')
  const setPrizeContractFunction = useContractFunction(contract, 'setRewardNumber')
  const summarizedRewardsFunction = useContractFunction(contract, 'summarizedRewards')

  const drawRewardsFunction = useContractFunction(randomGeneratorContract, 'drawRandomReward')

  const [nextDraw, setNextDraw] = useState('')
  const [lockBeforeDraw, setlockBeforeDraw] = useState('')

  const [firstPrize, setFirstPrize] = useState('')
  const [secondPrize, setSecondPrize] = useState('')
  const [thirdPrize, setThirdPrize] = useState('')

  const handleSetNextDraw = () => {
    setNextDrawContractFunction.send(nextDraw)
  }

  const handleSetlockBeforeDraw = () => {
    setLockBeforeDrawContractFunction.send(lockBeforeDraw)
  }

  const handleSummarizedReward = () => {
    summarizedRewardsFunction.send()
  }

  const handleRandomReward = () => {
    drawRewardsFunction.send()
  }

  const handleSetPrize = (rank: number) => () => {
    switch (rank) {
      case 1:
        setPrizeContractFunction.send(rank, firstPrize)
        break
      case 2:
        setPrizeContractFunction.send(rank, secondPrize)
        break
      case 3:
        setPrizeContractFunction.send(rank, thirdPrize)
        break
      default:
        break
    }
  }

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
              onChange={(e) => setNextDraw(e.target.value)}
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button
              onClick={handleSetNextDraw}
              className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
            >
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="text-xl dark:text-purple-light mb-2">ตั้งเวลาล็อกก่อนออกรางวัล</div>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setlockBeforeDraw(e.target.value)}
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button
              onClick={handleSetlockBeforeDraw}
              className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
            >
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
              onChange={(e) => setFirstPrize(e.target.value)}
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button
              onClick={handleSetPrize(1)}
              className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
            >
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center space-x-4">
          <div className="text-3xl dark:text-purple-light">2#</div>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setSecondPrize(e.target.value)}
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button
              onClick={handleSetPrize(2)}
              className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
            >
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center space-x-4">
          <div className="text-3xl dark:text-purple-light">3#</div>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setThirdPrize(e.target.value)}
              className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full outline-none focus:outline-none"
            />
            <button
              onClick={handleSetPrize(3)}
              className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan"
            >
              บันทึก
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center space-x-4">
          <button onClick={handleSummarizedReward} className="btn py-2 px-6 text-white text-xl text-center bg-cyan">
            ออกรางวัล
          </button>
          <button onClick={handleRandomReward} className="btn py-2 px-6 text-white text-xl text-center bg-purple-light">
            ออกรางวัลอัตโนมัติ
          </button>
        </div>
      </Card>
    </div>
  )
}

export default ConfigPool
