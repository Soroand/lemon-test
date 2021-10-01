import React, { useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepHeader from 'molecules/StepHeader'
import RegPassword from 'molecules/RegPassword'
import RegFinishBtn from 'molecules/RegFinishBtn'
import HeaderIcons from 'assets/RegistrationStepHeader'

const StepThreeRegistration = () => {
  const [check, setCheck] = useState(false)
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <StepHeader
        headerIcons={HeaderIcons}
        activeItem={[0, 1]}
        activeBorder={[0, 1, 2]}
      />
      <RegPassword
        setCheck={setCheck}
        check={check}
        password={password}
        setPassword={setPassword}
      />
      <RegFinishBtn password={password} check={check} />
    </View>
  )
}

export default StepThreeRegistration

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
})
