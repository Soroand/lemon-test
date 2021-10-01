import React from 'react'
import { TouchableOpacity } from 'react-native'
import BellIcon from 'assets/BellIcon'
import { useNavigation } from '@react-navigation/native'

const NotificationBell = ({ customStyle }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Notifications')}
      activeOpacity={0.8}
      style={customStyle}
    >
      <BellIcon />
    </TouchableOpacity>
  )
}

export default NotificationBell
