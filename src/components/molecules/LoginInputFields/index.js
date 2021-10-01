import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import FieldSystemError from 'atoms/FieldSystemError'
import I18n from 'I18n'
import TextInputField from 'atoms/TextInput'
import P from 'atoms/TextElements/P'
import { AppContext } from 'context/App'
import LoginPasswordError from 'assets/LoginPasswordError'
import SelectDropdown from 'atoms/SelectDropdown'

const LoginInputFields = ({
  number,
  setNumber,
  selectedCountry,
  setSelectedCountry,
  countryCodes,
  password,
  setPassword,
}) => {
  const [passwordError, setPasswordError] = useState(false)
  const {
    services: { inputValidation },
  } = useContext(AppContext)
  return (
    <View style={styles.container}>
      {/* PHONE NUMBER FIELD */}
      <View>
        <P textSize="14@ms" textColor={'#242E29'}>
          {I18n.t('Auth.Registration.stepTwo.phoneField')}
        </P>
        <View style={styles.phoneInputMainWrap}>
          <View style={styles.dropDownContainer}>
            <SelectDropdown
              dropDownSelectStyle={styles.dropDownSelect}
              customStyle={styles.dropdownBtn}
              dropdownBtnStyle={{ borderWidth: 0 }}
              selectTextStyle={styles.selectText}
              rowTextStyle={{ textAlign: 'center' }}
              data={countryCodes}
              value={selectedCountry}
              setValue={setSelectedCountry}
            />
          </View>

          <View style={{ flex: 4 }}>
            <TextInputField
              customStyles={{
                marginTop: 0,
                fontSize: 18,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              type="number"
              value={() => number}
              onChange={(val) => {
                setNumber(inputValidation.validatePhoneField(val))
              }}
            />
          </View>
        </View>
      </View>
      {/* PASSWORD FIELD */}
      <View style={{ marginTop: 22 }}>
        <P textSize={'14@ms'} textColor={'#242E29'}>
          {I18n.t('Login.LoginMain.passFieldTitle')}
        </P>
        <TextInputField
          onBlur={() => setPasswordError(password?.length < 6 ? true : false)}
          customStyles={
            passwordError && { borderWidth: 2, borderColor: '#FFD6D6' }
          }
          placeholder={I18n.t('Login.LoginMain.placeholder')}
          maxLength={18}
          type={'password'}
          value={() => password}
          onChange={(val) =>
            setPassword(inputValidation.validatePasswordField(val))
          }
        />
        {passwordError && (
          <View
            style={{
              marginTop: 22,
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center',
            }}
          >
            <LoginPasswordError style={{ marginRight: 10 }} />
            <FieldSystemError>
              {I18n.t('Login.LoginMain.fieldError')}
            </FieldSystemError>
          </View>
        )}
      </View>
    </View>
  )
}

export default LoginInputFields

const styles = ScaledSheet.create({
  phoneInputMainWrap: {
    marginTop: '10@ms',
    flexDirection: 'row',
  },
  dropDownContainer: {
    flex: 1,
    marginRight: 2,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  dropDownSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dropdownBtn: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: '#242E29',
  },
  selectText: {
    marginRight: 10,
    fontSize: 18,
    color: '#242E29',
  },
})
