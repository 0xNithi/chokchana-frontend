import React from 'react'

type State = {
  isDark: Boolean
}

type Action = { type: 'TOGGLE_THEME' } | { type: 'SET_THEME'; payload: Boolean }

type ContextProps = {
  isDark: Boolean
  toggleTheme: () => void
  componentMounted: Boolean
}

const ThemeContext = React.createContext<ContextProps>({
  isDark: true,
  toggleTheme: () => {},
  componentMounted: false,
})

const initialState: State = {
  isDark: localStorage.getItem('isDark') ? JSON.parse(String(localStorage.getItem('isDark'))) : false,
}

const themeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      localStorage.setItem('isDark', String(!state.isDark))
      return {
        isDark: !state.isDark,
      }
    case 'SET_THEME':
      return {
        isDark: action.payload,
      }
    default: {
      return state
    }
  }
}

const ThemeProvider: React.FC = ({ children }) => {
  const [themeState, themeDispatch] = React.useReducer(themeReducer, initialState)
  const { isDark } = themeState
  const [componentMounted, setComponentMounted] = React.useState(false)

  React.useEffect(() => {
    setComponentMounted(true)
  })

  const toggleTheme = () => themeDispatch({ type: 'TOGGLE_THEME' })

  return <ThemeContext.Provider value={{ isDark, toggleTheme, componentMounted }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
