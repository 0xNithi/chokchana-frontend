import React from 'react'
import Layout from '../../components/Layout'
import PoolCard from './components/PoolCard'

type Pools = {
  id: Number
  name: string
  contractAddress: string
  internalLottory: boolean
}

type Props = {
  pools: Pools[]
}

const Pool: React.FC<Props> = ({ pools }) => {
  return (
    <Layout>
      <div className="text-3xl text-center text-purple-light w-full border-b-2 border-purple-light mb-8 pt-6 pb-8">
        เสี่ยงโชคเพื่อรับเงิน!!
      </div>
      <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
        {pools.map((pool, index) => (
          <PoolCard key={index} pool={pool} />
        ))}
      </div>
    </Layout>
  )
}

export default Pool
