import React from 'react'
import {
  Platform,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import HeaderIcons from 'assets/AddLotSteps'
import StepHeader from 'molecules/StepHeader'
import AddLotStepOneForm from 'molecules/AddLotStepOneForm'
import InputScrollView from 'react-native-input-scroll-view'
import { WindowHeight } from 'atoms/Dimensions'

const AddLotStepOne = () => {
  return (
    <InputScrollView
      keyboardOffset={Platform.OS === 'ios' ? 100 : 40}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.contentWrap}>
          <StepHeader headerIcons={HeaderIcons} />
          <AddLotStepOneForm />
        </View>
      </TouchableWithoutFeedback>
    </InputScrollView>
  )
}

export default AddLotStepOne

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
  },
  contentWrap: {
    marginTop: '10@ms',
    paddingBottom:
      WindowHeight > 800 ? '115@ms' : WindowHeight > 700 ? '100' : '90@ms',
  },
})
