import React, { useEffect, useState } from 'react'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'

import Layout from '../../../components/Layout'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const Hero: React.FC<Props> = ({ pool }) => {
  const { account } = useEthers()
  const [timestamp, setTimestamp] = useState(0)

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const _timestamp = +(+new Date() + '').substring(0, 10)
      setTimestamp(_timestamp)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [timestamp])

  const getDisplayCountDown = (type: string) => {
    const _canBuyTime = +formatUnits(canBuyTime[0], 0)
    const secondsLeft = _canBuyTime - timestamp
    if (secondsLeft < 0) {
      return -1
    }
    switch (type) {
      case 's':
        return secondsLeft % 60
      case 'm':
        return Math.trunc((secondsLeft % 3600) / 60)
      case 'h':
        return Math.trunc(secondsLeft / 3600)
      default:
        return -1
    }
  }

  const canBuyTime: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'getCanBuyTime',
      args: [],
    },
  )

  return (
    <div className="w-full bg-cyan">
      <Layout>
        <div className="flex justify-between">
          <div className="flex items-center bg-cyan-darkest px-12 py-4 rounded-2xl">
            <img
              src={`/images/${pool.internalLottory ? 'chokchana-lottery.png' : 'external-lottery.png'}`}
              alt={pool.name}
              className="w-32"
            />
            <div className="flex flex-col items-center font-semibold space-y-2">
              <div className="text-2xl text-gray-light">{pool.name}</div>
              <div className="bg-purple-light text-gray-light p-4 rounded-2xl shadow-md">ความเสี่ยง ×{pool.risk}</div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {canBuyTime && getDisplayCountDown('s') >= 0 ? (
              <>
                <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
                  <div className="text-sm text-purple-light">Hours</div>
                  <div className="text-4xl">{canBuyTime ? getDisplayCountDown('h') : 0}</div>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
                  <div className="text-sm text-purple-light">Mins</div>
                  <div className="text-4xl">{canBuyTime ? getDisplayCountDown('m') : 0}</div>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
                  <div className="text-sm text-purple-light">Secs</div>
                  <div className="text-4xl">{canBuyTime ? getDisplayCountDown('s') : 0}</div>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-64 h-24 text-gray-dark dark:text-white font-medium">
                <div className="text-xl text-black dark:text-white font-bold">สลากยังไม่พร้อมใช้งาน</div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Hero
