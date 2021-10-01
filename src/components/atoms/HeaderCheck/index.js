import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepHeaderCheck from 'assets/StepHeaderCheck'

const HeaderCheck = () => {
  return (
    <View style={styles.checkIcon}>
      <StepHeaderCheck />
    </View>
  )
}

export default HeaderCheck

const styles = ScaledSheet.create({
  checkIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
})
