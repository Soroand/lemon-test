import React, { useContext } from 'react'
import { Alert, Keyboard, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import I18n from 'I18n'
import { AccentButton } from 'atoms/Buttons'
import RegBackArrow from 'assets/RegBackArrow'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from 'context/App'

const RegFinishBtn = ({ password, check }) => {
  const navigation = useNavigation()

  const {
    store: { auth },
    repositories: { asyncStorage },
  } = useContext(AppContext)

  const setUserToken = async () => {
    await asyncStorage.setItem('token', Math.floor(Math.random() * 1000000))
    auth.setUserToken(
      await asyncStorage
        .getItem('token')
        .then((res) => navigation.replace('MainRoutes'))
    )
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Keyboard.dismiss()}
      activeOpacity={1}
    >
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
        <RegBackArrow />
      </AccentButton>
      <AccentButton
        onPress={() => {
          {
            password && check && (setUserToken(), auth.onUserPassword(password))
          }
          if (!password && !check) {
            Alert.alert(
              I18n.t('Auth.Registration.stepThree.fieldsErrorTitle'),
              I18n.t('Auth.Registration.stepThree.fieldsErrorBody')
            )
          } else {
            !password &&
              Alert.alert(
                I18n.t('Auth.Registration.stepThree.fieldsErrorTitle'),
                I18n.t('Auth.Registration.stepThree.passwordErrorBody')
              )
            !check &&
              Alert.alert(
                I18n.t('Auth.Registration.stepThree.fieldsErrorTitle'),
                I18n.t('Auth.Registration.stepThree.checkErrorBody')
              )
          }
        }}
        customStyles={{
          backgroundColor: '#FFCE45',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#FFCE45',
          marginTop: 25,
          flex: 4,
          alignSelf: 'flex-end',
        }}
        customeTextStyles={{ color: '#242E29' }}
      >
        {I18n.t('Auth.Registration.stepThree.finish')}
      </AccentButton>
    </TouchableOpacity>
  )
}

export default RegFinishBtn

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '30@ms',
  },
})
