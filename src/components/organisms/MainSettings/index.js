import React from 'react'
import { View, FlatList } from 'react-native'
import SettingsRoutes from 'molecules/SettingsRoutes'
import { ScaledSheet } from 'react-native-size-matters'
import { config } from 'atoms/SettingsMainConfig'
import { observer } from 'mobx-react'

const MainSettings = observer(() => {
  return (
    <View style={styles.container}>
      <FlatList
        data={config}
        renderItem={(item) => <SettingsRoutes {...item} />}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
})

export default MainSettings

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
