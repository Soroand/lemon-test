import React from 'react'
import LemonLogo from 'assets/LemonLogo'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import { H } from 'atoms/TextElements'
import { AccentButton } from 'atoms/Buttons'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'

const Greet = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.innerContainer}>
      <View style={styles.promo}>
        <LemonLogo />
        <H textSize={'20@ms'} textAlign="center" type={'h2'}>
          {I18n.t('Auth.Greeting.Message')}
        </H>
      </View>
      <View style={styles.btnContainer}>
        <AccentButton
          onPress={() => navigation.navigate('Login')}
          customStyles={{ backgroundColor: '#FFCE45', borderRadius: 10 }}
          textColor={'#242E29'}
        >
          {I18n.t('Auth.Greeting.SignIn')}
        </AccentButton>
        <AccentButton
          onPress={() => navigation.navigate('StepOne')}
          customStyles={{
            backgroundColor: '#E1E1E1',
            borderRadius: 10,
            marginTop: 15,
            marginBottom: 35,
          }}
          textColor={'#242E29'}
        >
          {I18n.t('Auth.Greeting.Register')}
        </AccentButton>
      </View>
    </View>
  )
}

export default Greet

const styles = ScaledSheet.create({
  innerContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  promo: {
    height: '75%',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    // borderWidth: 1,
    justifyContent: 'flex-end',
    height: '25%',
    width: '100%',
  },
})
