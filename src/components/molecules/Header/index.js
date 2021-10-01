import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { H } from 'atoms/TextElements'
import BellIcon from 'assets/BellIcon'
import NotificationBell from 'atoms/Buttons/NotificationBell'

const Header = () => {
  return (
    <View style={styles.container}>
      <H type={'h1'} textWeight="500" textColor="#00A944">
        lemon
      </H>
      <NotificationBell customStyle={{ marginRight: 20 }} />
    </View>
  )
}

export default Header

const styles = ScaledSheet.create({
  container: {
    marginTop: '10@mvs',
    flexDirection: 'row',
    height: '35@mvs',
    justifyContent: 'space-between',
  },
})
