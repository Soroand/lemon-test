import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Close from 'assets/Close'
import Check from 'assets/Check'

const YesNoButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF6161', marginRight: 5 }]}
      >
        <Close />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#00A944' }]}
      >
        <Check />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    width: '54@ms',
    height: '36@ms',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default YesNoButtons
