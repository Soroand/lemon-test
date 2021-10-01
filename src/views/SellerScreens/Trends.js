import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import I18n from 'I18n'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import TrendsList from 'templates/TrendsList'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

const Trends = () => {
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
          title: `${I18n.t('SellerScreens.Trends.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'Trends'}
        component={TrendsList}
      />
    </Stack.Navigator>
  )
}

export default Trends

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
