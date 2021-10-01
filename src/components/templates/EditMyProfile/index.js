import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import EditProfile from 'organisms/EditProfile'

const EditMyProfile = () => {
  return (
    <View style={styles.container}>
      <EditProfile />
    </View>
  )
}

export default EditMyProfile

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
  },
})
