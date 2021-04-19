import React from 'react'
import Card from '../../../components/Card'
import TotalPotCard from './TotalPotCard'
import TicketCard from './TicketCard'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const NextDraw: React.FC<Props> = ({ pool }) => {
  return (
    <div className="grid grid-cols-12 gap-12">
      <Card className="col-span-12 md:col-span-6 px-12 py-8">
        <TotalPotCard pool={pool} />
      </Card>
      <Card className="col-span-12 md:col-span-6 flex space-x-6 px-12 py-8 justify-center">
        <TicketCard pool={pool} />
      </Card>
    </div>
  )
}

export default NextDraw
