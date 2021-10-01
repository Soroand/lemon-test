import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepThreeRegistration from 'organisms/StepThreeRegistration'

const StepThree = () => {
  return (
    <View style={styles.container}>
      <StepThreeRegistration />
    </View>
  )
}

export default StepThree

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
})
