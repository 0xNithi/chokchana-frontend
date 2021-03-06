import React from 'react'
import { FirebaseProvider } from './FirebaseProvider'
import { ThemeProvider } from './ThemeProvider'

type Props = {
  contexts: any
  children: React.ReactNode
}

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: any, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider: React.FC = ({ children }) => (
  <ProviderComposer contexts={[<FirebaseProvider />, <ThemeProvider />]}>{children}</ProviderComposer>
)

export default ContextProvider
