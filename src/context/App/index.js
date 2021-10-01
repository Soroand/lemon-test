import React, { createContext } from 'react'
import Modules from 'modules'

export const AppContext = createContext({
  services: {},
  repositories: {},
  store: {},
})

export const AppContextProvider = (props) => (
  <AppContext.Provider
    value={{
      services: Modules.services,
      repositories: Modules.repositories,
      store: Modules.store,
    }}
  >
    {props.children}
  </AppContext.Provider>
)
