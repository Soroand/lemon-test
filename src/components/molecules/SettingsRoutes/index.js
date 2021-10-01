import React, { useContext, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P, H } from 'atoms/TextElements'
import I18n from 'I18n'
import { observer } from 'mobx-react'
import { AppContext } from 'context/App'
import CountryFlag from 'atoms/CountryFlag'
import CurrencyIcon from 'atoms/CurrencyIcon'
import { useNavigation } from '@react-navigation/native'
import ExitModal from 'molecules/ExitModal'

const SettingsRoutes = observer(({ item }) => {
  const {
    store: { auth },
  } = useContext(AppContext)
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <View style={styles.horizontalLine}></View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            item.route && navigation.push(`${item.route}`),
              item.id == 4 && setModalVisible(true)
          }}
        >
          {/* LEFT SIDE TEXT */}
          <View syle={{ flex: 1 }}>
            <P textColor="#242E29">
              {I18n.t('Settings.MainScreen.' + item.title)}
            </P>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* COUNTRY FLAG */}
            {item.id === 1 && <CountryFlag />}

            {/* CURRENCY ICON */}
            {item.id === 2 && <CurrencyIcon />}

            {/* RIGHT SIDE TEXT */}
            <Text style={{ fontSize: 16, color: '#0085FF' }}>
              {item.id === 2 &&
                (auth.currency === 'kzt'
                  ? I18n.t('Settings.MainScreen.currencyTenge')
                  : auth.currency === 'rub'
                  ? I18n.t('Settings.MainScreen.currencyRub')
                  : I18n.t('Settings.MainScreen.currencyUsd'))}
              {item.id == 1 && I18n.t('Settings.MainScreen.languageChosen')}
              {item.id == 3 &&
                auth.userCountry != '' &&
                auth.userCountry + ', ' + auth.userCity}
              {item.id == 4 && I18n.t('Settings.MainScreen.exitApp')}
              {item.id > 2 && (
                <Text style={{ fontSize: 16, color: '#0085FF' }}>
                  {item.titleRight}
                </Text>
              )}
              {item.id == 5 && I18n.t('Settings.MainScreen.supportLink')}
            </Text>
          </View>
        </TouchableOpacity>
        {modalVisible && (
          <ExitModal
            auth={auth}
            navigation={navigation}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        )}
      </View>
    </>
  )
})

export default SettingsRoutes

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '15@mvs',
    paddingVertical: '15@mvs',
  },
  horizontalLine: { borderTopWidth: 1, borderColor: '#E8E8E8' },
})
