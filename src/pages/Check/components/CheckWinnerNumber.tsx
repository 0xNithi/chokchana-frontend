import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import Card from '../../../components/Card'
import { Pools } from '../../../config/constants/types'

type Props = {
  curRound: any
}

const CheckCard: React.FC<Props> = ({ curRound }) => {
  const { account } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const roundWinner: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'getReward',
      args: [curRound - 1, 0],
    },
  )

  useEffect(() => {
    console.log(roundWinner ? roundWinner[0].toNumber() : undefined)
  })

  if (roundWinner) {
    return (
      <div className="flex space-x-4">
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">{roundWinner[0].toString()[0] | 0}</div>
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">{roundWinner[0].toString()[1] | 0}</div>
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">{roundWinner[0].toString()[2] | 0}</div>
      </div>
    )
  }

  return (
    <div className="flex space-x-4">
      <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
      <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
      <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
    </div>
  )
}

export default CheckCard
