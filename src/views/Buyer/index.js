import React, { useContext, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import MyApplications from 'views/BuyerScreens/MyApplications'
import SettingsStack from 'views/Settings'
import {
  ApplicationIcon,
  DashboardIcon,
  FavoriteIcon,
  ProfileIcon,
  SettingsIcon,
} from 'assets/BottomTabs'
import BottomTabButton from 'atoms/BottomTabButton'
import Profile from 'views/Profile'
import DashBoard from '../BuyerScreens/DashBoard'
import Favorites from '../BuyerScreens/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from 'context/App'
import { hasNotch } from 'react-native-device-info'
import { useNavigation } from '@react-navigation/native'
import { ScaledSheet } from 'react-native-size-matters'
import { copilot } from 'react-native-copilot'
import { Tooltip } from 'organisms/Tooltip'
import { observer } from 'mobx-react'
import BuyerSearchFilter from 'molecules/BuyerSearchFilter'
import DropdownSearch from 'molecules/DropdownSearch'

const Tab = createBottomTabNavigator()

const BuyerScreen = observer((props) => {
  const navigation = useNavigation()
  const {
    store: { auth, tutorial },
  } = useContext(AppContext)

  useEffect(() => {
    // проверка для проли, только для продавца
    if (tutorial.canStart && auth.userRole == 1) {
      props.start()
    }
  }, [])

  return (
    <Tab.Navigator
      show
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
      initialRouteName={'DashBoard'}
    >
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarVisible: auth.tabBar,
          tabBarIcon: () => <BottomTabButton icon={<DashboardIcon />} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => <BottomTabButton icon={<FavoriteIcon />} />,
        }}
      />
      <Tab.Screen
        name="MyApplications"
        component={MyApplications}
        options={{
          tabBarIcon: () => <BottomTabButton icon={<ApplicationIcon />} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarVisible: true,
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
              {...props}
              onPress={() => {
                navigation.navigate('SettingsStack')
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
})

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
  tooltip: {
    width: '100%',
    height: undefined,
    paddingHorizontal: 0,
    paddingTop: 0,
    backgroundColor: 'transparent',
    overflow: 'visible',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const svgMaskPath = ({ position, canvasSize, size }) => {
  // M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z - Square overlay

  // M${position.x._value + 2},${position.y._value + 2 + 12} - cutted mask
  //   q0,-12 12,-12 - quadratic Bézier curve top - left
  //   H${position.x._value + size.x._value - 2 - 12}
  //   q12,0 12,12 - quadratic Bézier curve top - right
  //   V${position.y._value + size.y._value - 2 - 12}
  //   q0,12 -12,12 - quadratic Bézier curve bottom - right
  //   H${position.x._value + 2 + 12}
  //   q-12,0 -12,-12 - quadratic Bézier curve - bottom - left
  //   V${position.y._value}Z`

  return `M0,0H${canvasSize.x}V${canvasSize.y}H0V0Z
  M${position.x._value + 2},${position.y._value + 2 + 12}
  q0,-12 12,-12
  H${position.x._value + size.x._value - 2 - 12}
  q12,0 12,12
  V${position.y._value + size.y._value - 2 - 12}
  q0,12 -12,12
  H${position.x._value + 2 + 12}
  q-12,0 -12,-12
  V${position.y._value}Z`
}

export default copilot({
  overlay: 'svg',
  animated: true,
  backdropColor: 'rgba(0,0,0,0.71)',
  androidStatusBarVisible: true,
  arrowColor: 'transparent',
  stepNumberComponent: () => <View />,
  svgMaskPath,
  tooltipStyle: styles.tooltip,
  tooltipComponent: Tooltip,
})(BuyerScreen)
