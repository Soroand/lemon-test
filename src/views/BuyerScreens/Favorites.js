import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import I18n from 'I18n'
import { View } from 'react-native'
import FavoritesList from 'templates/FavoritesList'
import NotificationBell from 'atoms/Buttons/NotificationBell'

const Stack = createStackNavigator()

const Favorites = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <NotificationBell customStyle={styles.headerRight} />
          ),
          headerLeft: () => <View />,
          title: `${I18n.t('BuyerScreens.Favorites.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'Favorites'}
        component={FavoritesList}
      />
    </Stack.Navigator>
  )
}

export default Favorites

const styles = ScaledSheet.create({
  headerLeft: {
    marginLeft: 15,
    padding: 5,
  },
  headerRight: {
    marginRight: 15,
  },
  headerTitleStyle: {
    fontWeight: '400',
    color: '#242E29',
    fontSize: 18,
    textAlign: 'center',
  },
  headerStyle: {
    shadowColor: 'transparent',
    backgroundColor: '#EEE',
    elevation: 0,
  },
})
