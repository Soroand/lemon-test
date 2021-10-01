import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import InputScrollView from 'react-native-input-scroll-view'
import { ScaledSheet } from 'react-native-size-matters'
import StepHeader from 'molecules/StepHeader'
import HeaderIcons from 'assets/AddLotSteps'
import AddLotStepThreeForm from 'molecules/AddLotStepThreeForm'

const AddLotStepThree = () => {
  return (
    <InputScrollView
      keyboardOffset={Platform.OS === 'ios' ? 100 : 40}
      contentContainerStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.contentWrap}>
          <StepHeader
            activeItem={[0, 1]}
            activeBorder={[0, 1, 2]}
            headerIcons={HeaderIcons}
          />
          <AddLotStepThreeForm />
        </View>
      </TouchableWithoutFeedback>
    </InputScrollView>
  )
}

export default AddLotStepThree

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
  },
  contentWrap: {
    marginTop: '10@ms',
    paddingBottom: '65@ms',
  },
})
