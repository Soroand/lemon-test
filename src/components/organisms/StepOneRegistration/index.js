import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import RegRoles from 'molecules/RegRoles'
import StepHeader from 'molecules/StepHeader'
import HeaderIcons from 'assets/RegistrationStepHeader'

const StepOneRegistration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StepHeader headerIcons={HeaderIcons} />
      <RegRoles />
    </SafeAreaView>
  )
}

export default StepOneRegistration

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
})
