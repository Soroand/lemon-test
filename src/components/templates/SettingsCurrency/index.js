import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import LanguageSelect from 'molecules/LangCurrSelect'
import Currency from 'assets/Currency'

const SettingsCurrency = () => {
  return (
    <View style={styles.container}>
      <View>
        <LanguageSelect currency={Currency} settings={true} />
      </View>
    </View>
  )
}
export default SettingsCurrency

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10@mvs',
    paddingTop: '10@mvs',
    backgroundColor: '#F3F3F3',
  },
})
