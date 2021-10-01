import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import FlatLangCurrSelector from 'atoms/FlatLangCurrSelector'
import { observer } from 'mobx-react'

const LanguageSelect = ({ images = [], currency = [], settings = false }) => {
  return (
    <View style={styles.innerContainer}>
      <FlatLangCurrSelector
        images={images}
        currency={currency}
        settings={settings}
      />
    </View>
  )
}

export default LanguageSelect

const styles = ScaledSheet.create({
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '50@ms2',
  },
})
