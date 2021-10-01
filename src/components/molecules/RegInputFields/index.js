import React, { useContext, useState } from 'react'
import { Keyboard, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { ScaledSheet } from 'react-native-size-matters'
import TextInputField from 'atoms/TextInput'
import { AppContext } from 'context/App'
import { H, P } from 'atoms/TextElements'
import ArrowDown from 'assets/ArrowDownReg'

import FieldSystemError from 'atoms/FieldSystemError'
import I18n from 'I18n'
import SelectDropdown from 'atoms/SelectDropdown'

const RegInputFields = (props) => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    number,
    setNumber,
    selectedCountry,
    setSelectedCountry,
    countryCodes,
    isProfile = false,
    email,
    setEmail,
    company,
    setCompany,
    role,
  } = { ...props }

  const {
    services: { inputValidation },
  } = useContext(AppContext)
  const [nameError, setNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [companyError, setCompanyError] = useState(false)
  // const nameError = name.length < 3
  return (
    <>
      <TouchableWithoutFeedback
        style={{ marginTop: isProfile ? 20 : 0 }}
        onPress={() => Keyboard.dismiss()}
      >
        {/* NAME FIELD */}
        <P textSize="14@ms" textColor={'#242E29'}>
          {I18n.t('Auth.Registration.stepTwo.name')}
        </P>
        <TextInputField
          onBlur={() => setNameError(name?.length < 2 ? true : false)}
          customStyles={nameError && { borderWidth: 2, borderColor: '#FFD6D6' }}
          type={'name'}
          value={() => name}
          onChange={(val) => {
            props.setName(inputValidation.validateNameField(val))
          }}
        />
        {nameError && (
          <FieldSystemError>
            {I18n.t('Auth.Registration.RegInputFields.name')}
          </FieldSystemError>
        )}

        {/* LASTNAME FIELD */}
        <P textSize="14@ms" marginT={'20@ms'} textColor={'#242E29'}>
          {I18n.t('Auth.Registration.stepTwo.lastName')}
        </P>
        <TextInputField
          onBlur={() => setLastNameError(lastName?.length < 2 ? true : false)}
          customStyles={
            lastNameError && { borderWidth: 2, borderColor: '#FFD6D6' }
          }
          type={'lastName'}
          value={() => lastName}
          onChange={(val) => {
            setLastName(inputValidation.validateNameField(val))
          }}
        />
        {lastNameError && (
          <FieldSystemError>
            {I18n.t('Auth.Registration.RegInputFields.lastName')}
          </FieldSystemError>
        )}
        <P textSize="14@ms" textColor={'#242E29'} marginT={'20@ms'}>
          {I18n.t('Auth.Registration.stepTwo.phoneField')}
        </P>
      </TouchableWithoutFeedback>

      {/* PHONE FIELD AND REGION SELECT */}
      <View
        style={[styles.phoneInputMainWrap, { opacity: isProfile ? 0.5 : 1 }]}
      >
        {!isProfile ? (
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
        ) : (
          <View style={styles.dropDownSelectProfile}>
            <Text style={styles.selectText}>{selectedCountry}</Text>
            <ArrowDown width={11} height={8} />
          </View>
        )}

        <View style={{ flex: 4 }}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <TextInputField
              editable={!isProfile}
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
          </TouchableWithoutFeedback>
        </View>
      </View>
      {!isProfile && (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <P textSize="14@ms" textSize={'14@ms'} marginT={'10@ms'}>
            {I18n.t('Auth.Registration.stepTwo.smsPlaceholder')}
          </P>
        </TouchableWithoutFeedback>
      )}

      {/* EMAIL FIELD IF PROFILE */}
      {isProfile && (
        <>
          <P textSize="14@ms" marginT="15@ms" textColor={'#242E29'}>
            {I18n.t('Profile.EditProfile.email')}
          </P>
          <TextInputField
            onBlur={() => setEmailError(email?.length < 7 ? true : false)}
            customStyles={
              emailError && { borderWidth: 2, borderColor: '#FFD6D6' }
            }
            type={'email'}
            value={() => email}
            onChange={(val) => {
              props.setEmail(val)
            }}
          />
          {emailError && (
            <FieldSystemError>
              {I18n.t('Auth.Registration.RegInputFields.email')}
            </FieldSystemError>
          )}
        </>
      )}

      {/* COMPANY FIELD IF ROLE AND PROFILE */}
      {role == 0 && isProfile && (
        <>
          <H marginT="35@ms" type="h2">
            {I18n.t('Profile.EditProfile.companyTitle')}
          </H>
          <P textSize="14@ms" marginT={'15@ms'} textColor={'#242E29'}>
            {I18n.t('Profile.EditProfile.companyFieldTitle')}
          </P>
          <TextInputField
            onBlur={() => setCompanyError(company?.length < 3 ? true : false)}
            customStyles={
              companyError && { borderWidth: 2, borderColor: '#FFD6D6' }
            }
            type={'company'}
            value={() => company}
            onChange={(val) => {
              setCompany(val)
            }}
          />
          {companyError && (
            <FieldSystemError>
              {I18n.t('Auth.Registration.RegInputFields.company')}
            </FieldSystemError>
          )}
        </>
      )}
    </>
  )
}

export default RegInputFields

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputMainWrap: {
    flexDirection: 'row',
    marginTop: '10@mvs',
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
  dropDownSelectProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dropdownBtn: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 1,
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
