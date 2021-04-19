import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PoolPage from './PoolPage'
import PoolsPage from './PoolsPage'
import pools from '../../config/constants/pools'

const Pools: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/:poolId`}>
        <PoolPage pools={pools} />
      </Route>
      <Route path={match.path}>
        <PoolsPage pools={pools} />
      </Route>
    </Switch>
  )
}

export default Pools
