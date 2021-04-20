import React from 'react'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import CheckCard from './components/CheckCard'
import pools from '../../config/constants/pools'

const Check: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8">
        <div className="text-3xl text-purple-light pt-6">ตรวจสลาก</div>
        <Divider />
        {pools.map((pool, index) => (
          <CheckCard key={index} pool={pool} />
        ))}
      </div>
    </Layout>
  )
}

export default Check
