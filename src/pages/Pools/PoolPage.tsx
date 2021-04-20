import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from './components/Hero'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import NextDraw from './components/NextDraw'
import PastDraw from './components/PastDraw'
import NotFound from '../NotFound'
import { Pools } from '../../config/constants/types'

type Props = {
  pools: Pools[]
}

type Params = {
  poolId: string
}

const PoolPage: React.FC<Props> = ({ pools }) => {
  const [active, setActive] = React.useState(true)

  const { poolId }: Params = useParams()
  const pool = pools.find((pool) => pool.id === Number(poolId))

  return pool ? (
    <>
      <Hero pool={pool} />
      <Layout>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-center w-full">
            <div className="bg-gray-light dark:bg-purple text-gray-light font-semibold rounded-full shadow space-x-1">
              <button
                className={`px-4 py-1 rounded-full outline-none focus:outline-none ${
                  active ? 'bg-purple-light' : 'text-purple-light'
                }`}
                onClick={() => setActive(true)}
              >
                งวดถัดไป
              </button>
              <button
                className={`px-4 py-1 rounded-full outline-none focus:outline-none ${
                  !active ? 'bg-purple-light' : 'text-purple-light'
                }`}
                onClick={() => setActive(false)}
              >
                งวดที่แล้ว
              </button>
            </div>
          </div>
          <Divider />
          {active ? <NextDraw pool={pool} /> : <PastDraw pool={pool} />}
        </div>
      </Layout>
    </>
  ) : (
    <NotFound />
  )
}

export default PoolPage
