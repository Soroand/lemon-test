import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ChooseSettings } from 'templates/ChooseSettings'
import { Greetings } from 'templates/Greetings'
import StepOne from 'templates/Registration/stepOne'
import StepTwo from 'templates/Registration/stepTwo'
import StepThree from 'templates/Registration/stepThree'
import I18n from 'I18n'
import Login from 'views/Login'
import { WindowHeight } from 'atoms/Dimensions'

const Stack = createStackNavigator()

export const AuthScreens = () => {
  return (
    <Stack.Navigator initialRouteName={'StepOneRegistration'}>
      <Stack.Screen
        options={{
          title: 'Выбор языка и валюты',
          headerStyle: {
            shadowColor: 'transparent',
            height: Platform.OS === 'ios' ? 100 : 75,
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: WindowHeight > 650 ? 20 : 18,
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
        name={'ChooseSettings'}
        component={ChooseSettings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'Greetings'}
        component={Greetings}
      />
      <Stack.Screen
        options={{
          // gestureEnabled: false,
          headerLeft: () => <View />, //for android
          headerRight: () => <View />, //for android
          title: `${I18n.t('Auth.Registration.title')}`,
          headerStyle: {
            backgroundColor: '#f3f3f3',
            shadowColor: 'transparent',
            height: Platform.OS === 'ios' ? 100 : 75,
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: WindowHeight > 650 ? 20 : 18,
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
        name={'StepOne'}
        component={StepOne}
      />
      <Stack.Screen
        options={{
          // gestureEnabled: false,
          headerLeft: () => <View />, //for android
          headerRight: () => <View />, //for android
          title: `${I18n.t('Auth.Registration.title')}`,
          headerStyle: {
            backgroundColor: '#f3f3f3',
            shadowColor: 'transparent',
            height: Platform.OS === 'ios' ? 100 : 75,
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: WindowHeight > 650 ? 20 : 18,
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
        name={'StepTwo'}
        component={StepTwo}
      />
      <Stack.Screen
        options={{
          // gestureEnabled: false,
          headerLeft: () => <View />, //for android
          headerRight: () => <View />, //for android
          title: `${I18n.t('Auth.Registration.title')}`,
          headerStyle: {
            backgroundColor: '#f3f3f3',
            shadowColor: 'transparent',
            height: Platform.OS === 'ios' ? 100 : 75,
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: WindowHeight > 650 ? 20 : 18,
            textAlign: 'center',
            fontWeight: '400',
          },
        }}
        name={'StepThree'}
        component={StepThree}
      />
      <Stack.Screen
        options={{
          // gestureEnabled: false,
          headerLeft: () => <View />, //for android
          headerRight: () => <View />, //for android
          title: `${I18n.t('Auth.Registration.title')}`,
          headerShown: false,
        }}
        name={'Login'}
        component={Login}
      />
    </Stack.Navigator>
  )
}
