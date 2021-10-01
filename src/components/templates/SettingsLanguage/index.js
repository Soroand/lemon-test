import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import LanguageSelect from 'molecules/LangCurrSelect'
import Flags from 'assets/Flags'

const SettingsLanguage = () => {
  return (
    <View style={styles.container}>
      <View>
        <LanguageSelect images={Flags} settings={true} />
      </View>
    </View>
  )
}
export default SettingsLanguage

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10@mvs',
    paddingTop: '10@mvs',
    backgroundColor: '#F3F3F3',
  },
})
