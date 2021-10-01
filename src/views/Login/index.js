import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import LoginMain from 'templates/LoginMain'
import ForgotPasswordStepOne from 'templates/ForgotPasswordStepOne'
import I18n from 'I18n'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import { useNavigation } from '@react-navigation/native'
import ForgotPasswordStepTwo from 'templates/ForgotPasswordStepTwo'

const Stack = createStackNavigator()

const Login = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'LoginMain'}
        component={LoginMain}
      />
      <Stack.Screen
        options={{
          headerRight: () => <View></View>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginMain')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Login.ForgotPassword.headerTitle')}`,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#242E29',
            fontSize: 18,
            textAlign: 'center',
          },
          headerStyle: {
            shadowColor: 'transparent',
            backgroundColor: '#F3F3F3',
            elevation: 0,
          },
        }}
        name={'ForgotPasswordStepOne'}
        component={ForgotPasswordStepOne}
      />
      <Stack.Screen
        options={{
          headerRight: () => <View></View>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordStepOne')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Login.ForgotPassword.headerTitle')}`,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#242E29',
            fontSize: 18,
            textAlign: 'center',
          },
          headerStyle: {
            shadowColor: 'transparent',
            backgroundColor: '#F3F3F3',
            elevation: 0,
          },
        }}
        name={'ForgotPasswordStepTwo'}
        component={ForgotPasswordStepTwo}
      />
    </Stack.Navigator>
  )
}

export default Login

const styles = ScaledSheet.create({})
