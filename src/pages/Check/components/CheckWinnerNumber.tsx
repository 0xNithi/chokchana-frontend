import React from 'react'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'

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
      args: [curRound - 1, 1],
    },
  )

  if (roundWinner) {
    return (
      <div className="flex space-x-4">
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">
          {roundWinner[0].toString()[0] | 0}
        </div>
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">
          {roundWinner[0].toString()[1] | 0}
        </div>
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">
          {roundWinner[0].toString()[2] | 0}
        </div>
        <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">
          {roundWinner[0].toString()[3] | 0}
        </div>
      </div>
    )
  }

  return (
    <div className="flex space-x-4">
      <div className="flex justify-center items-center w-48 h-12 rounded-xl">Loading...</div>
    </div>
  )
}

export default CheckCard
