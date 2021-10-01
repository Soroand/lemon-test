import React, { useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import LoginInputFields from 'molecules/LoginInputFields'

const LoginMainFields = () => {
  const countryCodes = ['+7', '8', '+1', '9']
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
      }}
    >
      <LoginInputFields
        password={password}
        setPassword={setPassword}
        number={number}
        setNumber={setNumber}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countryCodes={countryCodes}
      />
    </View>
  )
}

export default LoginMainFields

const styles = ScaledSheet.create({})
