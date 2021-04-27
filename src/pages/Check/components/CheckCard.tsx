import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const CheckCard: React.FC<Props> = ({ pool }) => {
  return (
    <Card className="grid grid-cols-12 gap-4 w-full px-12 py-8 space-x-8">
      <div className="col-span-12 md:col-span-4 flex items-center space-x-8">
        <img
          src={`/images/${pool.internalLottory ? 'chokchana-lottery.png' : 'external-lottery.png'}`}
          alt={pool.name}
          className="w-24"
        />
        <div className="text-2xl font-semibold dark:text-gray-light">{pool.name}</div>
      </div>
      <div className="col-span-12 md:col-span-8 flex justify-between items-center text-3xl font-semibold dark:text-gray-light">
        <div className="flex space-x-4">
          <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
          <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
          <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
          <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
          <div className="flex justify-center items-center bg-cyan w-12 h-12 rounded-xl">0</div>
        </div>
        <Link to={`/pools/${pool.id}/history`} className="btn p-4 bg-cyan rounded-xl">
          ข้อมูล
        </Link>
      </div>
    </Card>
  )
}

export default CheckCard
