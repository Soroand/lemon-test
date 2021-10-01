import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { createStackNavigator } from '@react-navigation/stack'
import SellerAddLot from 'organisms/SellerAddLot'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'
import AddLotStepOne from 'organisms/AddLotStepOne'
import AddLotStepTwo from 'organisms/AddLotStepTwo'
import AddLotStepThree from 'organisms/AddLotStepThree'
import AddLotStepFour from 'organisms/AddLotStepFour'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import LotReply from 'templates/LotReply'

const Stack = createStackNavigator()

const AddLotsNav = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={'AddLots'}
        component={SellerAddLot}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('CreateLot.StepOne.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'AddLotStepOne'}
        component={AddLotStepOne}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('CreateLot.StepOne.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'AddLotStepTwo'}
        component={AddLotStepTwo}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('CreateLot.StepOne.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'AddLotStepThree'}
        component={AddLotStepThree}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: `${I18n.t('CreateLot.StepOne.headerTitle')}`,
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
        name={'AddLotStepFour'}
        component={AddLotStepFour}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddLots')}
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

export default AddLotsNav

const styles = ScaledSheet.create({
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
})
