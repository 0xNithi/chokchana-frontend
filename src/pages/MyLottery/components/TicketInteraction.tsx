import React from 'react'
import { useEthers, useContractCall, useContractFunction } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'
import { Contract } from '@ethersproject/contracts'

import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'

type Props = {
  ticket: any,
  ticketId: string,
}

const Ticket: React.FC<Props> = ({ ticket, ticketId }) => {
  const { account, library } = useEthers()

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const contract = new Contract(LotteryAddress, ChokchanaLotteryInterface, library?.getSigner())
  const claimRewardContractFunction = useContractFunction(contract, 'claimReward')

  const curRound: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'getCurRound',
      args: [],
    },
  )

  const claimableReward: any = useContractCall(
    account && {
      abi: ChokchanaLotteryInterface,
      address: LotteryAddress,
      method: 'getClaimInfo',
      args: [formatUnits(ticket[0].round, 0).replace('.0', ''), formatUnits(ticket[0].number, 0).replace('.0', '')],
    },
  )

  const handleClaimReward = () => {
    // console.log(ticketId)
    claimRewardContractFunction.send(ticketId);
  }

  if (claimableReward && curRound) {
    if (!claimableReward[0].isZero()) {
      return <button onClick={handleClaimReward} className="btn bg-cyan text-gray-lightest text-xl px-8 py-3 mx-auto">รับรางวัล</button>
    }
    if(curRound[0].toNumber() <= ticket[0].round.toNumber()) {
      return <div className="text-gray-lightest text-xl px-8 py-3 mx-auto">รางวัลยังไม่ออก</div>
    }
    return <div className="text-gray-lightest text-xl px-8 py-3 mx-auto">ไม่สามารถรับรางวัลได้</div>
  }

  return <div className="bg-cyan text-gray-lightest text-xl px-8 py-3 mx-auto">กำลังโหลด...</div>
}

export default Ticket
