import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import BuyerApplications from 'organisms/BuyerApplications'
import BuyerCategory from 'organisms/BuyerCategory'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import { useNavigation } from '@react-navigation/native'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import BuyingLot from 'templates/BuyingLot'
import FilterSearch from 'templates/FilterSearch'
import I18n from 'I18n'
import { AppContext } from 'context/App'

const Stack = createStackNavigator()

const DashBoard = () => {
  const navigation = useNavigation()
  const {
    store: { auth },
  } = useContext(AppContext)

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'MyApplication'}
        component={BuyerApplications}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MyApplication')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: route.params.title,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: route.params.bgColor,
          },
        })}
        name={'Category'}
        component={BuyerCategory}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('MyApplication')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: I18n.t('BuyerScreens.BuyingLot.headerTitle'),
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: '#fff',
          },
        })}
        name={'BuyingLot'}
        component={BuyingLot}
      />
      <Stack.Screen
        options={({ route }) => ({
          gestureEnabled: false,
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyApplication')
                auth.toggleTabBar(true)
              }}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: I18n.t('BuyerScreens.FilterSearch.headerTitle'),
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: '#F3F3F3',
          },
        })}
        name={'FilterSearch'}
        component={FilterSearch}
      />
    </Stack.Navigator>
  )
}

export default DashBoard

const styles = ScaledSheet.create({
  headerTitleStyle: {
    fontWeight: '400',
    color: '#242E29',
    fontSize: 18,
    textAlign: 'center',
  },
})
