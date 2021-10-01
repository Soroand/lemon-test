/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import TourStep from 'molecules/TourStep'

const StepOne = ({ setTutorialStep, tutorialStep, handleNext }) => {
  return (
    <TourStep
      title={'Добро пожаловать!'}
      desc={
        'Приложение «Lemon market» поможет вам быстро найти подходящий лот по удобной цене'
      }
      button={'Понятно'}
      onPress={() => {
        setTutorialStep(tutorialStep + 1)
        handleNext()
      }}
      customStyle={styles.container}
    />
  )
}

const styles = ScaledSheet.create({
  container: {},
})

export default StepOne
