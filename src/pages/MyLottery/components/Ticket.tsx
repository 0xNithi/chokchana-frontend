import React, { useEffect } from 'react'
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
      <td>{ticket && formatUnits(ticket[0].round, 0).replace('.0', '')}</td>
      <td>
        <div className="flex justify-center items-center space-x-4">
          <img src="/images/external-lottery.png" alt="external-lottery" className="w-16" />
          <div>สลากกินแบ่งรัฐบาล</div>
        </div>
      </td>
      <td>
        <div className="bg-orange text-gray-darkest text-3xl tracking-widest rounded-xl py-2 mx-4">
          {ticket && formatUnits(ticket[0].number, 0).replace('.0', '')}
        </div>
      </td>
      <td>
        {ticket && <TicketInteraction ticket={ticket} ticketId={formatUnits(ticketIndex[0], 0).replace('.0', '')} />}
      </td>
    </tr>
  )
}

export default Ticket
