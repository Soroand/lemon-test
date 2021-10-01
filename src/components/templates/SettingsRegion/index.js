import React, { useContext, useState } from 'react'
import { Alert, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'
import SettingsRegionDropdown from 'organisms/SettingsRegionDropdown'
import { AppContext } from 'context/App'
import I18n from 'I18n'
import { AccentButton } from 'atoms/Buttons'

const SettingsRegion = ({ navigation }) => {
  const {
    store: { regions, auth },
  } = useContext(AppContext)
  const [selectedCountry, setSelectedCountry] = useState(regions.countries()[0])
  const [selectedCounty, setSelectedCounty] = useState(regions.county()[0][0])
  const [selectedCity, setSelectedCity] = useState(regions.cities()[0][0])
  const Values = [selectedCountry, selectedCounty, selectedCity]

  return (
    <View style={styles.container}>
      <View style={styles.pageWrapper}>
        <View style={{ width: '60%' }}>
          <P textSize="15@ms" textColor="#242E29" textAlign="center">
            Выберите регион из которого вы хотите видеть лоты
          </P>
        </View>
        <View style={{ marginTop: 20 }}>
          <SettingsRegionDropdown
            defaultSelection={selectedCountry}
            selectItems={regions.countries()}
            fieldTitle={I18n.t('Settings.RegionScreen.fieldTitles.first')}
            setSelection={setSelectedCountry}
          />
          <SettingsRegionDropdown
            defaultSelection={selectedCounty}
            selectItems={regions.county()[0]}
            fieldTitle={I18n.t('Settings.RegionScreen.fieldTitles.second')}
            setSelection={setSelectedCounty}
          />
          <SettingsRegionDropdown
            defaultSelection={selectedCity}
            selectItems={regions.cities()[0]}
            fieldTitle={I18n.t('Settings.RegionScreen.fieldTitles.third')}
            setSelection={setSelectedCity}
          />
        </View>
        <View style={styles.btnContainer}>
          <AccentButton
            buttonText={{ fontSize: '25@ms' }}
            onPress={() => {
              Alert.alert(
                'Настройки',
                'Ваши настройки были успешно сохранены.',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      auth.setUserRegion(Values),
                        navigation.navigate('MainSettings')
                    },
                  },
                ]
              )
            }}
            customStyles={{ backgroundColor: '#FFCE45', borderRadius: 10 }}
            textColor={'#242E29'}
          >
            {I18n.t('Settings.RegionScreen.saveBtnText')}
          </AccentButton>
          <AccentButton
            onPress={() => navigation.navigate('MainSettings')}
            customStyles={{
              backgroundColor: '#E1E1E1',
              borderRadius: 10,
              marginTop: 15,
              marginBottom: 35,
            }}
            textColor={'#242E29'}
          >
            {I18n.t('Settings.RegionScreen.cancelBtnText')}
          </AccentButton>
        </View>
      </View>
    </View>
  )
}

export default SettingsRegion

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
    flex: 1,
    alignItems: 'center',
    marginTop: '20@ms',
  },
  btnContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    width: '100%',
  },
  pageWrapper: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
})
