import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

const ToggleTwoItems = ({ active, setActive, textOne, textTwo }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 30,
      }}
    >
      <TouchableOpacity
        onPress={() => setActive(0)}
        style={[
          styles.toggleButtons,
          {
            flex: 1,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: active == 0 ? '#00A944' : 'transparent',
            borderWidth: active == 0 ? 0 : 1,
            borderRightWidth: 0,
          },
        ]}
      >
        <Text style={{ color: active == 0 ? '#FFF' : '#242E29' }}>
          {textOne}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(1)}
        style={[
          styles.toggleButtons,
          {
            flex: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: active == 1 ? '#00A944' : 'transparent',
            borderWidth: active == 1 ? 0 : 1,
          },
        ]}
      >
        <Text style={{ color: active == 1 ? '#FFF' : '#242E29' }}>
          {textTwo}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleTwoItems

const styles = ScaledSheet.create({
  toggleButtons: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: '10@ms',
    paddingVertical: '13@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
