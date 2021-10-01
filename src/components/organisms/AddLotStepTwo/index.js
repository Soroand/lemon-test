import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepHeader from 'molecules/StepHeader'
import HeaderIcons from 'assets/AddLotSteps'
import InputScrollView from 'react-native-input-scroll-view'
import AddLotStepTwoForm from 'molecules/AddLotStepTwoForm'
import { WindowHeight } from 'atoms/Dimensions'

const AddLotStepTwo = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            marginTop: 10,
            height: '100%',
          }}
        >
          <StepHeader
            activeItem={[0]}
            activeBorder={[0, 1]}
            headerIcons={HeaderIcons}
          />
          <AddLotStepTwoForm />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AddLotStepTwo

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@ms',
    paddingBottom: Platform.OS === 'ios' && WindowHeight > 700 ? 110 : 80,
  },
})
