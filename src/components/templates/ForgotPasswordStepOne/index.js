import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'
import ForgotPasswordFields from 'organisms/ForgotPasswordFields'
import RegSms from 'molecules/RegSms'
import { ScrollView } from 'react-native-gesture-handler'
import I18n from 'I18n'

const ForgotPasswordStepOne = () => {
  const [number, setNumber] = useState('')
  const countryCodes = ['+7', '8', '+1', '9']
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, height: '100%' }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enableOnAndroid={true}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 15}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <P
              customStyles={{
                width: '80%',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              {I18n.t('Login.ForgotPassword.stepOneTitle')}
            </P>
            <View style={styles.smsField}>
              <ForgotPasswordFields
                number={number}
                setNumber={setNumber}
                countryCodes={countryCodes}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
            </View>
            <View>
              <RegSms resetPassword={true} number={number} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ForgotPasswordStepOne

const styles = ScaledSheet.create({
  container: {
    marginTop: '45@ms',
    flex: 1,
    paddingHorizontal: '10@ms',
    justifyContent: 'space-between',
  },
  smsField: {
    flex: 1,
    marginTop: '45@ms',
  },
})
