import React, { useEffect } from 'react'
import { AppContextProvider } from 'context/App'
import GlobalFont from 'react-native-global-font'
import Routes from './views/routes'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = observer(() => {
  useEffect(() => {
    let fontName = 'FiraSansCondensed-Regular'
    GlobalFont.applyGlobal(fontName)
  })

  return (
    <AppContextProvider>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </ActionSheetProvider>
    </AppContextProvider>
  )
})

export default App
