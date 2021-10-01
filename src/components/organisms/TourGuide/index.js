/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react'
import StepOne from 'organisms/TourGuide/stepOne'
import { useTourGuideController } from 'rn-tourguide'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { observer } from 'mobx-react'
import { AppContext } from 'context/App'

export const TourGuide = observer(
  ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
  }) => {
    const {
      store: { tutorial },
    } = useContext(AppContext)
    const { stop } = useTourGuideController()

    useEffect(() => {
      if (tutorial.activeStep === 2) {
        setTimeout(() => {
          tutorial.setActiveStep(tutorial.activeStep + 1)
          handleNext()
        }, 1000)
      }
    }, [tutorial.activeStep])

    return (
      <View style={style.container}>
        {[1, 2, 3, 4].includes(tutorial.activeStep) && (
          <StepOne
            stop={stop}
            setTutorialStep={(item) => tutorial.setActiveStep(item)}
            tutorialStep={tutorial.activeStep}
            handleNext={handleNext}
            currentStep={currentStep}
          />
        )}
      </View>
    )
  }
)

const style = ScaledSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
  },
})
