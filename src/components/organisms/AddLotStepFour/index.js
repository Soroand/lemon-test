import React from 'react'
import { ScrollView, Platform } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import AddLotStepFourForm from 'molecules/AddLotStepFourForm'
import StepHeader from 'molecules/StepHeader'
import HeaderIcons from 'assets/AddLotSteps'
import { WindowHeight } from 'atoms/Dimensions'

const AddLotStepFour = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StepHeader
        activeItem={[0, 1, 2]}
        activeBorder={[0, 1, 2, 3]}
        headerIcons={HeaderIcons}
      />
      <AddLotStepFourForm />
    </ScrollView>
  )
}

export default AddLotStepFour

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
    paddingBottom:
      Platform.OS === 'ios'
        ? WindowHeight > 800
          ? '85@ms'
          : WindowHeight > 800
          ? '70@ms'
          : '55@ms'
        : '55@ms',
  },
})
