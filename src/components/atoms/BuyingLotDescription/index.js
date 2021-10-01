import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'

const BuyingLotDescription = ({ icon, title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <View style={styles.textWrap}>
        <P textSize="14@ms" textColor="#242E29">
          {title}
        </P>
        {children}
      </View>
    </View>
  )
}

export default BuyingLotDescription

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '10@ms',
    alignItems: 'center',
  },
  icon: {
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  textWrap: { marginLeft: 10, maxWidth: '90%' },
})
