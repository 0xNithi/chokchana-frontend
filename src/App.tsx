import React from 'react'
import firebase from 'firebase'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useDispatch } from 'react-redux'

import { FETCH_USER } from './store/actions/types'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import PageLoader from './components/PageLoader'

const history = createBrowserHistory()

const Home = React.lazy(() => import('./pages/Home'))
const Pools = React.lazy(() => import('./pages/Pools'))
const Check = React.lazy(() => import('./pages/Check'))
const MyLottery = React.lazy(() => import('./pages/MyLottery'))
const Info = React.lazy(() => import('./pages/Info'))
const Register = React.lazy(() => import('./pages/Register'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  const { componentMounted } = useTheme()
  const dispatch = useDispatch()

  if (!componentMounted) {
    return <div />
  }

  firebase.auth().onAuthStateChanged(async (user) => {
		if (user) {
			const { currentUser }: { currentUser: any } = firebase.auth()
			const db = firebase.firestore()
			const ref = db.collection('users').doc(currentUser.uid)
			const profileData = await ref.get()

			dispatch({
				type: FETCH_USER,
				payload: { ...currentUser, ...profileData.data() },
			})
		} else {
			dispatch({ type: FETCH_USER })
		}
	})

  return (
    <Router history={history}>
      <Navbar />
      <React.Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pools" component={Pools} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/mylottery" component={MyLottery} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/register" component={Register} />
          <Route path="/profile/edit" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default React.memo(App)
