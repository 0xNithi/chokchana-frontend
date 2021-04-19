import React from 'react'
import Divider from '../../../components/Divider'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const TotalPotCard: React.FC<Props> = ({ pool }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" className="w-20">
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
          <div className="text-base text-purple-dark dark:text-purple-light">Round 1</div>
          <div className="text-xl text-purple-dark dark:text-purple-light">Total Pot</div>
          <div className="text-xl dark:text-gray-light">{(1000000).toLocaleString('en-US')} USDT</div>
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-4 font-semibold overflow-y-auto max-h-64">
        <div className="col-span-1 text-purple-dark dark:text-purple-light">อันดับ</div>
        <div className="col-span-1 text-purple-dark dark:text-purple-light text-right">รางวัล</div>
        <div className="col-span-1 dark:text-gray-light">1</div>
        <div className="col-span-1 dark:text-gray-light text-right">{(1000000).toLocaleString('en-US')}</div>
        <div className="col-span-1 dark:text-gray-light">2</div>
        <div className="col-span-1 dark:text-gray-light text-right">{(500000).toLocaleString('en-US')}</div>
        <div className="col-span-1 dark:text-gray-light">3</div>
        <div className="col-span-1 dark:text-gray-light text-right">{(300000).toLocaleString('en-US')}</div>
      </div>
    </div>
  )
}

export default TotalPotCard
