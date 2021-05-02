/* eslint-disable */
import React, { useEffect } from 'react'
import { useEthers, useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import { formatUnits } from '@ethersproject/units'

import { TicketAddress } from '../../config/constants/addresses'
import ChokchanaTicketABI from '../../config/abis/ChokchanaTicket.json'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import Card from '../../components/Card'
import Ticket from './components/Ticket'

const MyLottery: React.FC = () => {
  const [numTicket, setNumTicket] = React.useState('')
  const { account } = useEthers()

  const ChokchanaTicketInterface = new Interface(ChokchanaTicketABI)

  const ticketBalance: any = useContractCall(
    account && {
      abi: ChokchanaTicketInterface,
      address: TicketAddress,
      method: 'balanceOf',
      args: [account],
    },
  )

  let ticketRow: any = []

  for (let i = 0; i < ticketBalance; i++) {
    ticketRow.unshift(<Ticket key={i} index={i} />)
  }

  useEffect(() => {
    ticketBalance && setNumTicket(formatUnits(ticketBalance[0], 0).replace('.0', ''))
  })

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">สลากของฉัน {ticketBalance && `(${numTicket})`}</div>
        <Divider />
        <Card className="w-full px-12 py-8">
          <table className="table-auto w-full text-center font-semibold">
            <thead className="text-xl text-purple-lightest">
              <tr className="border-b-2 h-16">
                <th>งวดที่</th>
                <th>กองสลาก</th>
                <th>เลขของคุณ</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody className="text-lg dark:text-white">
              {ticketRow}
              {!ticketRow.length && (
                <tr className="h-24">
                  <td colSpan={4}>
                    {!account && 'โปรดเชื่อมต่อกระเป๋า'}
                    {account && !ticketBalance && <div className="animate-pulse ">กำลังโหลด...</div>}
                    {numTicket == '0' && 'ท่านยังไม่ได้สลากสลาก'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </Layout>
  )
}

export default MyLottery
