import React from 'react'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import TicketInteraction from './TicketInteraction'
import { TicketAddress } from '../../../config/constants/addresses'
import ChokchanaTicketABI from '../../../config/abis/ChokchanaTicket.json'

type Props = {
  index: Number
}

const Ticket: React.FC<Props> = ({ index }) => {
  const { account } = useEthers()

  const ChokchanaTicketInterface = new Interface(ChokchanaTicketABI)

  const ticketIndex: any = useContractCall(
    account && {
      abi: ChokchanaTicketInterface,
      address: TicketAddress,
      method: 'tokenOfOwnerByIndex',
      args: [account, index],
    },
  )

  const ticket: any = useContractCall(
    account &&
      ticketIndex && {
        abi: ChokchanaTicketInterface,
        address: TicketAddress,
        method: 'get',
        args: [formatUnits(ticketIndex[0], 0).replace('.0', '')],
      },
  )

  return (
    <tr className="h-24">
      <td>
        {ticket ? (
          formatUnits(ticket[0].round, 0).replace('.0', '')
        ) : (
          <div className="animate-pulse bg-white rounded-xl h-6 w-8 mx-auto"></div>
        )}
      </td>
      <td>
        <div className={`${!ticket && 'animate-pulse'} flex justify-center items-center space-x-4`}>
          <img src="/images/chokchana-lottery.png" alt="external-lottery" className="w-16" />
          <div>สลากโชคชนะ 4 หลัก</div>
        </div>
      </td>
      <td>
        {ticket ? (
          <div className="bg-orange text-gray-darkest text-3xl tracking-widest rounded-xl py-2 mx-4">
            {formatUnits(ticket[0].number, 0).replace('.0', '')}
          </div>
        ) : (
          <div className="animate-pulse bg-orange text-gray-darkest text-3xl tracking-widest rounded-xl py-2 mx-4 h-14"></div>
        )}
      </td>
      <td>
        {ticket ? (
          <TicketInteraction ticket={ticket} ticketId={formatUnits(ticketIndex[0], 0).replace('.0', '')} />
        ) : (
          <div className="animate-pulse text-gray-lightest text-xl px-8 py-3 mx-auto">กำลังโหลด...</div>
        )}
      </td>
    </tr>
  )
}

export default Ticket
