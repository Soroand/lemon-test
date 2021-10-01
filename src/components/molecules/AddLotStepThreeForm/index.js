import React, { useContext, useState } from 'react'
import { View, Alert } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { AccentButton } from 'atoms/Buttons'
import { H, P } from 'atoms/TextElements'
import { AppContext } from 'context/App'
import TextInput from 'atoms/TextInput'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'
import { toJS } from 'mobx'
import SelectDropdown from 'atoms/SelectDropdown'

const AddLotStepTwoForm = () => {
  const {
    store: { regions, addLot },
  } = useContext(AppContext)
  const navigation = useNavigation()
  const [country, setCountry] = useState(null)
  const [region, setRegion] = useState(null)
  const [city, setCity] = useState(null)
  const [locality, setLocality] = useState('')
  return (
    <View style={styles.container}>
      <H type="h2">{I18n.t('CreateLot.StepThree.title')}</H>
      <P textSize="13@ms" textColor="#646464">
        {I18n.t('CreateLot.StepThree.subTitle')}
      </P>
      <SelectDropdown
        title={I18n.t('CreateLot.StepThree.fieldOneTitle')}
        data={regions.countries()}
        value={country}
        placeholder={I18n.t('CreateLot.StepThree.fieldOnePlaceholder')}
        setValue={setCountry}
        customPlaceholderStyles={{ opacity: 0.3 }}
        dropdownBtnStyle={{ borderWidth: 0 }}
      />
      <SelectDropdown
        title={I18n.t('CreateLot.StepThree.fieldTwoTitle')}
        data={regions.county()[0]}
        value={region}
        placeholder={I18n.t('CreateLot.StepThree.fieldThreePlaceholder')}
        setValue={setRegion}
        customPlaceholderStyles={{ opacity: 0.3 }}
        dropdownBtnStyle={{ borderWidth: 0 }}
      />
      <SelectDropdown
        title={I18n.t('CreateLot.StepThree.fieldThreeTitle')}
        data={regions.cities()[0]}
        value={city}
        placeholder={I18n.t('CreateLot.StepThree.fieldTwoPlaceholder')}
        setValue={setCity}
        customPlaceholderStyles={{ opacity: 0.3 }}
        dropdownBtnStyle={{ borderWidth: 0 }}
      />
      <TextInput
        marginT="20@ms"
        title={I18n.t('CreateLot.StepThree.fieldFourTitle')}
        placeholder={I18n.t('CreateLot.StepThree.fieldFourPlaceholder')}
        type="description"
        value={() => locality}
        onChange={setLocality}
      />
      <View style={styles.navBtn}>
        <AccentButton
          onPress={() => navigation.goBack()}
          customStyles={{
            backgroundColor: '#E1E1E1',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E1E1E1',
            marginTop: 25,
            marginRight: 15,
            flex: 1,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('Auth.Registration.stepTwo.prevBtn')}
        </AccentButton>
        <AccentButton
          onPress={() => {
            {
              country?.trim() && region?.trim() && city?.trim()
                ? (addLot.stepThreeHandler(country, region, city, locality),
                  navigation.navigate('AddLotStepFour'))
                : Alert.alert(
                    I18n.t('CreateLot.StepOne.Error.title'),
                    I18n.t('CreateLot.StepOne.Error.message')
                  )
            }
          }}
          customStyles={{
            backgroundColor: '#FFCE45',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FFCE45',
            marginTop: 25,
            flex: 1,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('Auth.Registration.stepTwo.nextBtn')}
        </AccentButton>
      </View>
    </View>
  )
}

export default AddLotStepTwoForm

const styles = ScaledSheet.create({
  container: {
    marginTop: '30@ms',
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '20@ms',
  },
})
