import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

// CLICK HAPPENS ON REACT BOTTOM TAB ITSELF
// THIS IS JUST VIEW WRAP AND SVG ICON FOR BOTTOM TABS
const BottomTabButton = ({ icon, customStyles }) => {
  return <View style={[styles.container, { ...customStyles }]}>{icon}</View>
}

export default BottomTabButton

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40@mvs',
    height: '40@mvs',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 10,
  },
})
