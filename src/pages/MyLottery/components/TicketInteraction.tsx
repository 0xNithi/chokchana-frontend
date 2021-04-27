import React, { useEffect } from 'react'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'

type Props = {
  ticket: any
}

const Ticket: React.FC<Props> = ({ ticket }) => {
  const { account } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  // const claimableReward: any = useContractCall(
  //   account &&
  //     {
  //       abi: ChokchanaLotteryInterface,
  //       address: LotteryAddress,
  //       method: 'getClaimInfo',
  //       args: [ticket[0].round, ticket[0].number],
  //     },
  // )

  useEffect(() => {
    console.log(ticket)
  })

  return <button className="btn bg-cyan text-gray-lightest text-xl px-8 py-3 mx-auto">แลกรางวัล</button>
}

export default Ticket
