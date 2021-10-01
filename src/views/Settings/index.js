import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainSettings from 'organisms/MainSettings'
import { TouchableOpacity } from 'react-native'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import SettingsLanguage from 'templates/SettingsLanguage'
import SettingsCurrency from 'templates/SettingsCurrency'
import SettingsRegion from 'templates/SettingsRegion'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { View } from 'react-native'

const Stack = createStackNavigator()

const SettingsStack = observer(() => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator initialRouteName={'MainSettings'}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => <View></View>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Settings.headerTitle')}`,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#242E29',
            fontSize: 18,
            textAlign: 'center',
            // borderWidth: 1,
          },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
        }}
        name="MainSettings"
        component={MainSettings}
      />
      <Stack.Screen
        options={{
          // headerShown: true,
          headerRight: () => <View></View>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MainSettings')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Settings.LanguageScreen.headerTitle')}`,
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
        name="SettingsLanguage"
        component={SettingsLanguage}
      />
      <Stack.Screen
        options={{
          // headerShown: true,
          headerRight: () => <View />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MainSettings')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Settings.CurrencyScreen.headerTitle')}`,
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
        name="SettingsCurrency"
        component={SettingsCurrency}
      />
      <Stack.Screen
        options={{
          // headerShown: true,
          headerRight: () => <View></View>,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MainSettings')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Settings.RegionScreen.headerTitle')}`,
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
        name="SettingsRegion"
        component={SettingsRegion}
      />
    </Stack.Navigator>
  )
})

export default SettingsStack
