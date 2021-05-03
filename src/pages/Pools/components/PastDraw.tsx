import React, { useEffect } from 'react'
import { useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import DrawResult from './DrawResult'
import { LotteryAddress } from '../../../config/constants/addresses'
import ChokchanaLotteryABI from '../../../config/abis/ChokchanaLottery.json'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const PastDraw: React.FC<Props> = ({ pool }) => {
  const [, setNumRound] = React.useState('')

  const ChokchanaLotteryInterface = new Interface(ChokchanaLotteryABI)

  const curRound: any = useContractCall({
    abi: ChokchanaLotteryInterface,
    address: LotteryAddress,
    method: 'getCurRound',
    args: [],
  })

  let resultRow: any = []

  for (let i = 1; i < curRound; i++) {
    resultRow.unshift(<DrawResult key={i} round={i} />)
  }

  useEffect(() => {
    curRound && setNumRound(formatUnits(curRound[0], 0).replace('.0', ''))
  },[curRound])

  return (
    <>
      <div className="relative w-96 mx-auto">
        {/* <input
          type="text"
          className="w-full px-8 py-2 text-purple-light dark:text-white text-lg font-semibold tracking-widest bg-gray-light dark:bg-purple rounded-full shadow outline-none focus:outline-none"
        />
        <button className="btn absolute inset-y-0 right-0	py-2 m-1 text-white text-base text-center bg-cyan">
          ค้นหา
        </button> */}
      </div>
      {resultRow}
    </>
  )
}

export default PastDraw
