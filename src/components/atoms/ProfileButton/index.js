import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'

const ProfileButton = ({
  profileButton,
  text,
  margin,
  active,
  role,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={role == 0 && !active}
      onPress={() => {
        if ((onPress && active) || role == 1) {
          onPress()
        }
      }}
      style={[styles.container, { marginRight: margin && 15 }]}
    >
      {profileButton}
      <P
        textAlign="center"
        marginT="10@ms"
        customStyles={{ opacity: !active && role == 0 ? 0.5 : 1 }}
      >
        {text}
      </P>
    </TouchableOpacity>
  )
}

export default ProfileButton

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@ms',
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
