import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'

type Props = {
  pool: {
    id: Number
    name: string
    contractAddress: string
    internalLottory: boolean
  }
}

const PoolCard: React.FC<Props> = ({ pool }) => {
  return (
    <Card className="col-span-12 md:col-span-4 flex flex-col space-y-8 p-8">
      <div className="flex justify-between items-center pb-4 border-b-2 border-purple">
        <img
          src={`/images/${pool.internalLottory ? 'chokchana-lottery.png' : 'external-lottery.png'}`}
          alt={pool.name}
          className="w-24"
        />
        <div className="text-xl font-semibold dark:text-gray-light">{pool.name}</div>
      </div>
      <div className="w-9/12 mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center bg-cyan rounded-xl w-16 h-16 text-white font-medium">
            <div className="text-sm">Hours</div>
            <div className="text-3xl">0</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-cyan rounded-xl w-16 h-16 text-white font-medium">
            <div className="text-sm">Mins</div>
            <div className="text-3xl">0</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-cyan rounded-xl w-16 h-16 text-white font-medium">
            <div className="text-sm">Secs</div>
            <div className="text-3xl">0</div>
          </div>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" className="w-14">
            <path
              d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
              fill="#53ae94"
            />
            <path
              d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
              fill="#fff"
            />
          </svg>
          <div className="flex flex-col font-semibold ml-4">
            <div className="text-xs dark:text-gray-light">Round 1</div>
            <div className="text-lg dark:text-gray-light">Total Pot</div>
            <div className="text-lg dark:text-gray-light">{(1000000).toLocaleString('en-US')} USDT</div>
          </div>
        </div>
        <Link to={`/pools/${pool.id}`} className="btn w-full py-4 text-white text-xl text-center bg-cyan">
          เลือก
        </Link>
      </div>
    </Card>
  )
}

export default PoolCard
