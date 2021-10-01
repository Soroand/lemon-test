import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import ResetPassword from 'organisms/ResetPassword'

const ForgotPasswordStepTwo = () => {
  return (
    <View style={styles.container}>
      <ResetPassword />
    </View>
  )
}

export default ForgotPasswordStepTwo

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@ms',
  },
})
