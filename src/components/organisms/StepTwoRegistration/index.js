import React, { useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepHeader from 'molecules/StepHeader'
import RegInputFields from 'molecules/RegInputFields'
import RegSms from 'molecules/RegSms'
import HeaderIcons from 'assets/RegistrationStepHeader'

const StepTwoRegistration = () => {
  const countryCodes = ['+7', '8', '+1', '9']
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  return (
    // <KeyboardAwareScrollView
    //   contentContainerStyle={{ flex: 1 }}
    //   enableResetScrollToCoords={false}
    //   enableOnAndroid={true}
    //   extraHeight={Platform.OS === 'ios' ? 120 : 35}
    // >
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enableOnAndroid={true}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 125 : 15}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        bounces={false}
        style={styles.container}
      >
        <>
          <StepHeader
            headerIcons={HeaderIcons}
            activeItem={[0]}
            activeBorder={[0, 1]}
          />
          <View style={styles.credentialsWrap}>
            <RegInputFields
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
              number={number}
              setNumber={setNumber}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              countryCodes={countryCodes}
            />
            <RegSms name={name} lastName={lastName} number={number} />
          </View>
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default StepTwoRegistration

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '10@ms',
    height: '100%',
  },
  credentialsWrap: {
    flex: 1,
    marginTop: '25@ms',
  },
})
