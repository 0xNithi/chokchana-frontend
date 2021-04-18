import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

export const AuthContext = React.createContext({})

const firebaseConfig = {
  apiKey: 'AIzaSyC7vnm-g_MjgBP8dTg0QNjW3YDAOU9tStc',
  authDomain: 'chokchana-93866.firebaseapp.com',
  projectId: 'chokchana-93866',
  storageBucket: 'chokchana-93866.appspot.com',
  messagingSenderId: '757067525635',
  appId: '1:757067525635:web:f55cf4110a9e7b3bbca836',
}
firebase.initializeApp(firebaseConfig)

const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser]: [user: any, setUser: any] = useState(null)

  useEffect(() => {
    console.log('user: ', user)
    firebase.auth().onAuthStateChanged(setUser)
  })

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export { FirebaseProvider }
