import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View, Text } from 'react-native'
import Loader from 'assets/MainLoader/loader'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Loader />
      <Text style={styles.spinnerText}>Загрузка 62%</Text>
    </View>
  )
}

export default Loading

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    marginTop: 15,
    fontSize: '15@ms2',
    color: '#00A944',
  },
})
