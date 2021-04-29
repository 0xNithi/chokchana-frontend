import React from 'react'
import { NavLink, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'
import Hero from './components/Hero'
import Layout from '../../components/Layout'
import Divider from '../../components/Divider'
import NextDraw from './components/NextDraw'
import PastDraw from './components/PastDraw'
import PoolConfig from './components/PoolConfig'
import NotFound from '../NotFound'
import { Pools } from '../../config/constants/types'

type Props = {
  pools: Pools[]
}

type Params = {
  poolId: string
}

const PoolPage: React.FC<Props> = ({ pools }) => {
  const match = useRouteMatch()
  const { poolId }: Params = useParams()
  const pool = pools.find((pool) => pool.id === Number(poolId))

  return pool ? (
    <>
      <Hero pool={pool} />
      <Layout>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-center w-full">
            <div className="flex bg-gray-light dark:bg-purple text-purple-light font-semibold rounded-full shadow space-x-1">
              <NavLink
                className={`px-4 py-1 rounded-full outline-none focus:outline-none`}
                activeClassName="bg-purple-light text-gray-light"
                exact
                to={`/pools/${poolId}`}
              >
                งวดถัดไป
              </NavLink>
              <NavLink
                className={`px-4 py-1 rounded-full outline-none focus:outline-none`}
                activeClassName="bg-purple-light text-gray-light"
                exact
                to={`/pools/${poolId}/history`}
              >
                งวดที่แล้ว
              </NavLink>
              <NavLink
                className={`px-4 py-1 rounded-full outline-none focus:outline-none`}
                activeClassName="bg-purple-light text-gray-light"
                exact
                to={`/pools/${poolId}/config`}
              >
                ตั้งค่า
              </NavLink>
            </div>
          </div>
          <Divider />
          <Switch>
            <Route path={`${match.path}/history`}>
              <PastDraw pool={pool} />
            </Route>
            <Route path={`${match.path}/config`}>
              <PoolConfig pool={pool} />
            </Route>
            <Route>
              <NextDraw pool={pool} />
            </Route>
          </Switch>
        </div>
      </Layout>
    </>
  ) : (
    <NotFound />
  )
}

export default PoolPage
