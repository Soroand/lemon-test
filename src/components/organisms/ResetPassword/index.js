import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import TextInputField from 'atoms/TextInput'
import { P } from 'atoms/TextElements'
import FieldSystemError from 'atoms/FieldSystemError'
import { AccentButton } from 'atoms/Buttons'
import { AppContext } from 'context/App'
import I18n from 'I18n'

const ResetPassword = () => {
  const [passwordError, setPasswordError] = useState(false)
  const [password, setPassword] = useState('')
  const {
    services: { inputValidation },
  } = useContext(AppContext)
  return (
    <View style={styles.container}>
      <View style={styles.passField}>
        <P textSize={'14@ms'} textColor={'#242E29'}>
          {I18n.t('Auth.Registration.stepThree.passwordTitle')}
        </P>
        <TextInputField
          onBlur={() => setPasswordError(password?.length < 6)}
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
            {I18n.t('Login.ForgotPassword.stepTwoFieldError')}
          </FieldSystemError>
        )}
      </View>
      <View style={styles.button}>
        <AccentButton onPress={() => {}} textColor="#242E29">
          {I18n.t('Login.ForgotPassword.buttonText')}
        </AccentButton>
      </View>
    </View>
  )
}

export default ResetPassword

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  passField: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '35@ms',
  },
})
