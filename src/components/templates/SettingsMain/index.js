import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import MainSettings from 'organisms/MainSettings'

const Settings = () => {
  return (
    <View style={styles.container}>
      <MainSettings />
    </View>
  )
}
export default Settings

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '10@mvs',
    backgroundColor: '#FFFFFF',
  },
})
