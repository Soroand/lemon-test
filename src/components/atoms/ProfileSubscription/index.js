import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const ProfileSubscription = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image
        style={{ width: '105%' }}
        source={require('assets/Mock/SubscriptionImage/Subscription.png')}
      />
    </TouchableOpacity>
  )
}

export default ProfileSubscription

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
