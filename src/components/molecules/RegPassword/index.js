import React, { useState, useContext } from 'react'
import { View, TouchableOpacity, Keyboard } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import P from 'atoms/TextElements/P'
import { AppContext } from 'context/App'
import TextInputField from 'atoms/TextInput'
import CheckMarlReg from 'assets/CheckMarkReg'
import FieldSystemError from 'atoms/FieldSystemError'
import I18n from 'I18n'

const RegPassword = ({ setCheck, check, password, setPassword }) => {
  const [passwordError, setPasswordError] = useState(false)
  const {
    services: { inputValidation },
  } = useContext(AppContext)
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => Keyboard.dismiss()}
          activeOpacity={1}
        ></TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <P textSize={'14@ms'} textColor={'#242E29'}>
            {I18n.t('Auth.Registration.stepThree.passwordTitle')}
          </P>
          <TextInputField
            onBlur={() => setPasswordError(password?.length < 6 ? true : false)}
            customStyles={
              passwordError && { borderWidth: 2, borderColor: '#FFD6D6' }
            }
            maxLength={18}
            type={'password'}
            value={() => password}
            onChange={(val) =>
              setPassword(inputValidation.validatePasswordField(val))
            }
          />
          {passwordError && (
            <FieldSystemError>
              {I18n.t('Auth.Registration.Error.stepThreePassword')}
            </FieldSystemError>
          )}
        </TouchableWithoutFeedback>
        <View style={styles.termsWrap}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setCheck(!check)}
            style={styles.checkBoxContainer}
          >
            {check && (
              <View style={styles.checkIcon}>
                <CheckMarlReg />
              </View>
            )}
          </TouchableOpacity>
          <P>{I18n.t('Auth.Registration.stepThree.conditions')}</P>
        </View>
      </View>
    </View>
  )
}

export default RegPassword

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  checkBoxContainer: {
    marginRight: '10@mvs',
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  termsWrap: {
    marginTop: '25@mvs',
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkIcon: { position: 'absolute', zIndex: 10, top: 0, right: -5 },
})
