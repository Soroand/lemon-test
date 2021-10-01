import React, { useState, useContext } from 'react'
import { View, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { H } from 'atoms/TextElements'
import RegInputFields from 'molecules/RegInputFields'
import { AppContext } from 'context/App'
import I18n from 'I18n'
import { ScrollView } from 'react-native-gesture-handler'
import { AccentButton } from 'atoms/Buttons'
import { useNavigation } from '@react-navigation/native'
import { WindowHeight } from 'atoms/Dimensions'

const EditProfileFields = () => {
  const {
    store: { auth, profile },
  } = useContext(AppContext)
  const navigation = useNavigation()
  const countryCodes = ['+7', '8', '+1', '9']
  const [name, setName] = useState(auth.userName)
  const [lastName, setLastName] = useState(auth.userLastName)
  const [number, setNumber] = useState(auth.userPhoneNumber)
  const [email, setEmail] = useState(auth.userEmail)
  const [company, setCompany] = useState(auth.userCompany)
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  return (
    <View style={styles.empty}>
      <KeyboardAvoidingView
        enableOnAndroid={true}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={
          Platform.OS === 'ios'
            ? WindowHeight > 700
              ? 100
              : WindowHeight > 600
              ? 80
              : 60
            : 15
        }
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View style={{}}>
            <H marginT="20@ms" type="h2">
              {I18n.t('Profile.EditProfile.pageTitle')}
            </H>
            <RegInputFields
              role={auth.userRole}
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
              number={number}
              setNumber={setNumber}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              countryCodes={countryCodes}
              email={email}
              setEmail={setEmail}
              isProfile={true}
              company={company}
              setCompany={setCompany}
            />
          </View>
          <View style={styles.btnContainer}>
            <AccentButton
              buttonText={{ fontSize: '25@ms' }}
              onPress={() => {
                Alert.alert(
                  `${I18n.t('Profile.EditProfile.alert.title')}`,
                  `${I18n.t('Profile.EditProfile.alert.body')}`,
                  [
                    {
                      text: 'OK',
                      onPress: () => {
                        auth.toggleTabBar(true),
                          navigation.navigate('MyProfile'),
                          auth.onUserNameChange(name),
                          auth.onUserLastNameChange(lastName),
                          auth.setUserEmail(email),
                          auth.setUserCompany(company),
                          company.length > 0
                            ? profile.activateProfile()
                            : profile.deactivateProfile()
                      },
                    },
                  ]
                )
              }}
              customStyles={{
                backgroundColor: '#FFCE45',
                borderRadius: 10,
              }}
              textColor={'#242E29'}
            >
              {I18n.t('Profile.EditProfile.saveBtn')}
            </AccentButton>
            <AccentButton
              onPress={() => {
                navigation.navigate('MyProfile'), auth.toggleTabBar(true)
              }}
              customStyles={{
                backgroundColor: '#E1E1E1',
                borderRadius: 10,
                marginTop: 15,
                marginBottom: 35,
              }}
              textColor={'#242E29'}
            >
              {I18n.t('Profile.EditProfile.cancelBtn')}
            </AccentButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default EditProfileFields

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: '25@ms',
  },
  empty: {
    paddingBottom:
      WindowHeight > 750 ? '20@ms' : WindowHeight > 700 ? '70@ms' : '60@ms',
  },
})
