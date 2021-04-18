import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'

const history = createBrowserHistory()

const Home = React.lazy(() => import('./pages/Home'))
const Pools = React.lazy(() => import('./pages/Pools'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  const { componentMounted } = useTheme()

  if (!componentMounted) return <div />

  return (
    <Router history={history}>
      <Navbar />
      <React.Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pools" component={Pools} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default React.memo(App)
