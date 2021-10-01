import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import TourStep from 'molecules/TourStep'
import { P } from 'atoms/TextElements'
import { observer } from 'mobx-react'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import { useNavigation } from '@react-navigation/native'
import { toJS } from 'mobx'
import I18n from 'I18n'

export const Tooltip = observer(
  ({
    isFirstStep,
    isLastStep,
    handleNext,
    handlePrev,
    handleStop,
    currentStep,
    labels,
  }) => {
    const {
      store: { tutorial },
    } = useContext(AppContext)
    const navigation = useNavigation()

    const nextHandler = useCallback(() => {
      if (currentStep.order === 5) {
        tutorial.setActiveStep(currentStep.order + 1)
        navigation.navigate('Category', {
          bgColor: `${tutorial.searchCategory.bgColor}`,
          title: `${tutorial.searchCategory.text()}`,
          outlineColor: `${tutorial.searchCategory.textColor}`,
          activeId: 2,
        })
        setTimeout(() => {
          handleNext()
        }, 700)
        return
      }

      if (currentStep.order === 6) {
        tutorial.setActiveStep(currentStep.order + 1)
        navigation.navigate('BuyingLot', { item: toJS(tutorial.searchItem) })
        setTimeout(() => {
          handleNext()
        }, 700)
        return
      }

      if (currentStep.order === 7) {
        tutorial.setActiveStep(currentStep.order + 1)
        navigation.navigate('MyApplications', 'BuyerReplies')
        setTimeout(() => {
          handleNext()
        }, 700)
        return
      }

      if (isLastStep) {
        handleStop()
        tutorial.setTutorialEnd()
        navigation.navigate('MyApplication')
      } else {
        handleNext()
        tutorial.setActiveStep(currentStep.order + 1)
      }
    }, [currentStep, isLastStep])

    const configs = {
      1: {
        custom: (
          <>
            <View />

            <TourStep
              onPress={nextHandler}
              title={I18n.t('Tutorial.buyer.first.title')}
              desc={I18n.t('Tutorial.buyer.first.desc')}
              button={I18n.t('Tutorial.buyer.first.button')}
            />
          </>
        ),
      },
      2: {
        left: false,
      },
      3: {
        left: true,
      },
      4: {
        left: false,
      },
      5: {
        left: false,
      },
      6: {
        left: false,
      },
      7: {
        custom: (
          <>
            <View />

            <TourStep
              onPress={nextHandler}
              title={I18n.t('Tutorial.buyer.seventh.title')}
              desc={I18n.t('Tutorial.buyer.seventh.desc')}
              button={I18n.t('Tutorial.buyer.seventh.button')}
            />
          </>
        ),
      },
      8: {
        custom: (
          <>
            <View />

            <TourStep
              onPress={nextHandler}
              title={I18n.t('Tutorial.buyer.eigth.title')}
              desc={I18n.t('Tutorial.buyer.eigth.desc')}
              button={I18n.t('Tutorial.buyer.eigth.button')}
            />
          </>
        ),
      },
      9: {
        custom: (
          <>
            <View />

            <TourStep
              onPress={nextHandler}
              title={I18n.t('Tutorial.buyer.ninth.title')}
              desc={I18n.t('Tutorial.buyer.ninth.desc')}
              button={I18n.t('Tutorial.buyer.ninth.button')}
            />
          </>
        ),
      },
    }

    const config = useMemo(() => configs[currentStep.order], [
      currentStep.order,
    ])

    if (!!config.custom) {
      return config.custom
    }

    return (
      <>
        {config.left && <View />}

        <TouchableOpacity onPress={nextHandler} style={styles.message}>
          <P textColor={'#242E29'}>{currentStep.text}</P>
        </TouchableOpacity>
      </>
    )
  }
)

const styles = ScaledSheet.create({
  message: {
    backgroundColor: '#FFE402',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 29,
    justifyContent: 'center',
    width: undefined,
    alignSelf: 'flex-end',
  },
})
