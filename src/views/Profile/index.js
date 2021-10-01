import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MyProfile from 'organisms/MyProfile'
import LeftNavigationArrow from 'assets/ArrowLeftNavigationHeader'
import { useNavigation } from '@react-navigation/native'
import EditMyProfile from 'templates/EditMyProfile'
import I18n from 'I18n'
import { AppContext } from 'context/App'
import NotificationBell from 'atoms/Buttons/NotificationBell'
import Replies from 'views/SellerScreens/Replies'

const Stack = createStackNavigator()

const Profile = () => {
  const navigation = useNavigation()
  const {
    store: { auth, profile },
  } = useContext(AppContext)

  return (
    <Stack.Navigator>
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
          title: `${I18n.t('Profile.MainScreen.title')}`,
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
        }}
        name={'MyProfile'}
        component={MyProfile}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <NotificationBell customStyle={{ marginRight: 15 }} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyProfile'), auth.toggleTabBar(true)
              }}
              style={{ marginLeft: 15, padding: 5 }}
            >
              <LeftNavigationArrow />
            </TouchableOpacity>
          ),
          title: profile.active
            ? `${I18n.t('Profile.EditProfile.activatedTitle')}`
            : `${I18n.t('Profile.EditProfile.title')}`,
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
        }}
        name={'EditMyProfile'}
        component={EditMyProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={'SellerRepliesStack'}
        component={Replies}
      />
    </Stack.Navigator>
  )
}

export default Profile
