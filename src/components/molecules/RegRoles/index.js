import React, { useContext } from 'react'
import { AppContext } from 'context/App'
import { View, Alert } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import RegistrationRoles from 'atoms/RegistrationRoles'
import RolesItem from 'assets/RolesItem'
import { AccentButton } from 'atoms/Buttons'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'
import P from 'atoms/TextElements/P'

const RegRoles = () => {
  const navigation = useNavigation()
  const {
    store: { auth },
  } = useContext(AppContext)

  return (
    <>
      <View style={styles.role}>
        <P textColor={'#242E29'}>{I18n.t('Auth.Registration.stepOne.role')}</P>
        <View style={styles.roleWrap}>
          <RegistrationRoles RolesItem={RolesItem} />
        </View>
      </View>
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
            auth.userRole != null
              ? navigation.navigate('StepTwo')
              : Alert.alert(
                  I18n.t('Auth.Registration.Error.stepOneValidationTittle'),
                  I18n.t('Auth.Registration.Error.stepOneValidationMessage'),
                  [{ text: 'OK', onPress: () => {} }]
                )
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

export default RegRoles

const styles = ScaledSheet.create({
  role: {
    marginTop: '50@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },

  roleWrap: {
    flexDirection: 'row',
    marginTop: '20@ms2',
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '20@ms',
  },
})
