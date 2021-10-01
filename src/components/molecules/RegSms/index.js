import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Alert } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'
import I18n from 'I18n'
import { AppContext } from 'context/App'
import { AccentButton } from 'atoms/Buttons'
import SmsConfirmation from 'atoms/SmsConfirmation'
import { useNavigation } from '@react-navigation/native'

const RegCredentials = ({ name, lastName, number, resetPassword }) => {
  const [btnActive, setBtnActive] = useState(true)
  const [btnTimer, setBtnTimer] = useState(60)
  const [smsCode, setSmsCode] = useState(false)
  const [mockCode, setMockCode] = useState(null)
  const [smsFieldValue, setSmsFieldValue] = useState('')
  const navigation = useNavigation()
  const {
    store: { auth },
    repositories: { asyncStorage },
  } = useContext(AppContext)

  useEffect(() => {
    const interval =
      !btnActive &&
      btnTimer > 0 &&
      setInterval(() => {
        setBtnTimer(btnTimer - 1)
        if (btnTimer - 1 == 0) {
          return setBtnActive(true), setBtnTimer(60)
        }
        return
      }, 1000)
    return () => clearInterval(interval)
  }, [btnActive, btnTimer])
  const handleCode = () => {
    const sms = Math.floor(Math.random() * 90000) + 10000
    btnActive &&
      (setSmsCode(true),
      setBtnActive(false),
      setMockCode(sms),
      Alert.alert(I18n.t('Auth.Registration.stepTwo.smsMessageTitle') + sms))
  }
  console.log(mockCode, parseInt(smsFieldValue))
  return (
    <>
      {/* SEND SMS CODE BUTTON */}
      <AccentButton
        onPress={() => {
          number?.length < 10
            ? Alert.alert(
                I18n.t('Auth.Registration.Error.smsPhoneNotEnteredTitle'),
                I18n.t('Auth.Registration.Error.smsPhoneNotEntered')
              )
            : handleCode()
        }}
        customStyles={{
          backgroundColor: 'transparent',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#FFCE45',
          marginTop: 25,
        }}
        customeTextStyles={{ color: btnActive ? '#242E29' : '#A5A5A5' }}
      >
        {btnActive
          ? I18n.t('Auth.Registration.stepTwo.smsButton')
          : I18n.t('Auth.Registration.stepTwo.smsButtonInactive')}{' '}
        <Text style={{ color: '#242E29' }}>{!btnActive && btnTimer}</Text>
      </AccentButton>

      {/* SMS CONFIRMATION FIELDS*/}
      {smsCode && (
        <>
          <P textColor={'#242E29'} marginT={'25@ms'}>
            {I18n.t('Auth.Registration.stepTwo.smsCodeText')}
          </P>
          <SmsConfirmation value={smsFieldValue} setValue={setSmsFieldValue} />
        </>
      )}

      {/* TWO NAVIGATION BUTTONS AT THE BOTTOM */}
      <View style={styles.navBtn}>
        <AccentButton
          onPress={() => navigation.goBack()}
          customStyles={{
            backgroundColor: '#E1E1E1',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E1E1E1',
            marginTop: 25,
            marginRight: 15,
            flex: 1,

            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('Auth.Registration.stepTwo.prevBtn')}
        </AccentButton>
        <AccentButton
          onPress={() => {
            if (
              name?.length < 2 ||
              lastName?.length < 2 ||
              number?.length < 9
            ) {
              Alert.alert(
                I18n.t('Auth.Registration.Error.stepTwoValidationTittle'),
                I18n.t('Auth.Registration.Error.stepTwoValidationMessage'),
                [{ text: 'OK', onPress: () => {} }]
              )
            } else if (
              resetPassword &&
              smsCode &&
              parseInt(mockCode) == parseInt(smsFieldValue)
            ) {
              navigation.navigate('ForgotPasswordStepTwo')
            } else if (
              !smsCode ||
              parseInt(mockCode) !== parseInt(smsFieldValue)
            ) {
              Alert.alert(
                I18n.t('Auth.Registration.Error.smsErrorTitle'),
                I18n.t('Auth.Registration.Error.smsErrorMessage'),
                [{ text: 'OK', onPress: () => {} }]
              )
            } else {
              auth.onUserNameChange(name)
              asyncStorage.setItem('userName', name)
              auth.onUserLastNameChange(lastName)
              asyncStorage.setItem('lastName', lastName)
              auth.onUserPhoneNumberChange(number)
              asyncStorage.setItem('phoneNumber', number)
              navigation.navigate('StepThree')
            }
          }}
          customStyles={{
            backgroundColor: '#FFCE45',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FFCE45',
            marginTop: 25,
            flex: 1,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('Auth.Registration.stepTwo.nextBtn')}
        </AccentButton>
      </View>
    </>
  )
}

export default RegCredentials

const styles = ScaledSheet.create({
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '30@ms',
  },
})
