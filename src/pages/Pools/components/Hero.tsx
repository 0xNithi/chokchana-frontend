import React from 'react'
import Layout from '../../../components/Layout'
import { Pools } from '../../../config/constants/types'

type Props = {
  pool: Pools
}

const Hero: React.FC<Props> = ({ pool }) => {
  return (
    <div className="w-full bg-cyan">
      <Layout>
        <div className="flex justify-between">
          <div className="flex items-center bg-cyan-darkest px-12 py-4 rounded-2xl">
            <img
              src={`/images/${pool.internalLottory ? 'chokchana-lottery.png' : 'external-lottery.png'}`}
              alt={pool.name}
              className="w-32"
            />
            <div className="flex flex-col items-center font-semibold space-y-2">
              <div className="text-2xl text-gray-light">{pool.name}</div>
              <div className="bg-purple-light text-gray-light p-4 rounded-2xl shadow-md">ความเสี่ยง ×{pool.risk}</div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
              <div className="text-sm text-purple-light">Hours</div>
              <div className="text-4xl">0</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
              <div className="text-sm text-purple-light">Mins</div>
              <div className="text-4xl">0</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-light dark:bg-purple rounded-xl w-24 h-24 text-gray-dark dark:text-white font-medium">
              <div className="text-sm text-purple-light">Secs</div>
              <div className="text-4xl">0</div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Hero
