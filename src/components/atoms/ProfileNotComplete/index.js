import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import ExclamationMark from 'assets/ExclamationMark'
import { P } from 'atoms/TextElements'
import I18n from 'I18n'

const ProfileNotComplete = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
      }}
    >
      <View
        style={{
          width: '15%',
          alignItems: 'center',
        }}
      >
        <View style={styles.exclamation}>
          <ExclamationMark />
        </View>
      </View>
      <View style={{ width: '80%' }}>
        <P>{children}</P>
      </View>
    </View>
  )
}

export default ProfileNotComplete

const styles = ScaledSheet.create({
  container: {},
  exclamation: {
    backgroundColor: '#FFCE45',
    borderRadius: 10,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
