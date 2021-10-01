import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import BuyerScreen from 'views/Buyer'
import { SellerScreen } from 'views/Seller'
import { createStackNavigator } from '@react-navigation/stack'
import { AppContext } from 'context/App'
import { observer } from 'mobx-react'
import { TouchableOpacity } from 'react-native'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import I18n from 'I18n'
import NotificationsList from 'organisms/NotificationsList'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()
const MainRoutes = observer(() => {
  const {
    store: { auth, notificationsItems },
    services: { notifications },
  } = useContext(AppContext)
  const navigation = useNavigation()

  const initialNotifications = () => {
    notificationsItems.updateList(notifications.getNotifications(auth.userRole))
  }

  useEffect(() => {
    initialNotifications()
  }, [auth.userRole])

  return (
    <Stack.Navigator>
      {auth.userRole == 0 ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name={'Seller'}
            component={SellerScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name={'Buyer'}
            component={BuyerScreen}
          />
        </>
      )}
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => <View />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerLeft}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('Notifications.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'Notifications'}
        component={NotificationsList}
      />
    </Stack.Navigator>
  )
})

export default MainRoutes

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    marginLeft: 15,
    padding: 5,
  },
  headerTitleStyle: {
    fontWeight: '400',
    color: '#242E29',
    fontSize: 20,
    textAlign: 'center',
  },
  headerStyle: {
    shadowColor: 'transparent',
    backgroundColor: '#EEE',
    elevation: 0,
  },
})
