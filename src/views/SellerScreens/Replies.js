import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import I18n from 'I18n'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import { useNavigation } from '@react-navigation/native'
import SellerReplies from 'templates/SellerReplies'

const Stack = createStackNavigator()

const Replies = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <NotificationBell customStyle={styles.headerRight} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerLeft}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('SellerScreens.Replies.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'Replies'}
        component={SellerReplies}
      />
    </Stack.Navigator>
  )
}

export default Replies

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
    backgroundColor: '#fff',
    elevation: 0,
  },
})
