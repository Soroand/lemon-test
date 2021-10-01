import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddLot from '../SellerScreens/AddLot'
import MyLots from '../SellerScreens/MyLots'
import Trends from '../SellerScreens/Trends'
import SettingsStack from '../Settings'
import {
  SettingsIcon,
  ProfileIcon,
  ApplicationIcon,
  AddIcon,
  TrendIcon,
} from 'assets/BottomTabs'
import { hasNotch } from 'react-native-device-info'
import BottomTabButton from 'atoms/BottomTabButton'
import Profile from 'views/Profile'

const Tab = createBottomTabNavigator()

export const SellerScreen = () => {
  const navigation = useNavigation()
  const {
    store: { auth },
  } = useContext(AppContext)
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
      initialRouteName={'AddLot'}
    >
      <Tab.Screen
        name="Trends"
        component={Trends}
        options={{
          tabBarIcon: () => <BottomTabButton icon={<TrendIcon />} />,
        }}
      />
      <Tab.Screen
        name="MyLots"
        component={MyLots}
        options={{
          tabBarIcon: () => <BottomTabButton icon={<ApplicationIcon />} />,
        }}
      />
      <Tab.Screen
        name="AddLot"
        component={AddLot}
        options={{
          tabBarIcon: () => (
            <BottomTabButton
              customStyles={{ backgroundColor: '#FFCE45', borderWidth: 0 }}
              icon={<AddIcon />}
            />
          ),
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                {...props}
                onPress={() =>
                  props.accessibilityState.selected
                    ? navigation.navigate('AddLotStepOne')
                    : navigation.navigate('AddLots')
                }
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarVisible: auth.tabBar,
          tabBarIcon: () => <BottomTabButton icon={<ProfileIcon />} />,
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarVisible: false,
          tabBarIcon: () => <BottomTabButton icon={<SettingsIcon />} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              activeOpacity={0.6}
              {...props}
              onPress={() => navigation.navigate('SettingsStack')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = ScaledSheet.create({
  tabBar: {
    paddingTop: hasNotch() ? 10 : 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    height: hasNotch() ? 95 : 65,
    shadowColor: '#EEECE8',
    borderTopWidth: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10.22,
    elevation: 3,
  },
})
