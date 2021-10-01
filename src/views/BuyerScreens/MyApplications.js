import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import BuyerReplies from 'organisms/BuyerReplies'
import LotReply from 'templates/LotReply'

const Stack = createStackNavigator()

const MyApplication = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <View></View>
            // <TouchableOpacity
            //   onPress={() => navigation.navigate('MyApplication')}
            //   style={{ marginLeft: 15, padding: 5 }}
            // >
            //   <LeftNavigationArrow />
            // </TouchableOpacity>
          ),
          title: I18n.t('BuyerScreens.MyReplies.headerTitle'),
          headerTitleStyle: {
            fontWeight: '400',
            color: '#242E29',
            fontSize: 18,
            textAlign: 'center',
          },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: 'transparent',
          },
        })}
        name={'BuyerReplies'}
        component={BuyerReplies}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('BuyerReplies')}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('LotReply.headerTitle')}`,
          headerTitleStyle: {
            fontWeight: '400',
            color: '#242E29',
            fontSize: 18,
            textAlign: 'center',
          },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: '#fff',
          },
        })}
        name={'Reply'}
        component={LotReply}
      />
    </Stack.Navigator>
  )
}

export default MyApplication

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})
