import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'
import SellerMyLots from 'molecules/SellerMyLots'
import I18n from 'I18n'
import NotificationBell from 'atoms/Buttons/NotificationBell'

const Stack = createStackNavigator()

const MyLots = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => <View />,
          title: I18n.t('MyLots.title'),
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'MyLotsAll'}
        component={SellerMyLots}
      />
    </Stack.Navigator>
  )
}

export default MyLots

const styles = ScaledSheet.create({
  headerTitleStyle: {
    fontWeight: '400',
    color: '#242E29',
    fontSize: 18,
    textAlign: 'center',
  },
  headerStyle: {
    shadowColor: 'transparent',
    backgroundColor: '#FFFFFF',
    elevation: 0,
  },
})
