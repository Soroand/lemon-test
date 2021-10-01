import React, { useContext } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import TextInputField from 'atoms/TextInput'
import I18n from 'I18n'
import SelectDropdown from 'atoms/SelectDropdown'
import { P } from 'atoms/TextElements'
import { AppContext } from 'context/App'

const ForgotPasswordFields = ({
  number,
  setNumber,
  selectedCountry,
  setSelectedCountry,
  countryCodes,
}) => {
  const {
    services: { inputValidation },
  } = useContext(AppContext)
  return (
    <View>
      <P textSize="14@ms" textColor={'#242E29'}>
        {I18n.t('Auth.Registration.stepTwo.phoneField')}
      </P>
      <View style={styles.phoneInputMainWrap}>
        <View style={styles.dropDownContainer}>
          <SelectDropdown
            dropDownSelectStyle={styles.dropDownSelect}
            customStyle={styles.dropdownBtn}
            dropdownBtnStyle={{ borderWidth: 0 }}
            selectTextStyle={styles.selectText}
            rowTextStyle={{ textAlign: 'center' }}
            data={countryCodes}
            value={selectedCountry}
            setValue={setSelectedCountry}
          />
        </View>

        <View style={{ flex: 4 }}>
          <TextInputField
            customStyles={{
              marginTop: 0,
              fontSize: 18,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            type="number"
            value={() => number}
            onChange={(val) => {
              setNumber(inputValidation.validatePhoneField(val))
            }}
          />
        </View>
      </View>
      <P textSize={'14@ms'} marginT={'10@ms'}>
        {I18n.t('Auth.Registration.stepTwo.smsPlaceholder')}
      </P>
    </View>
  )
}

export default ForgotPasswordFields

const styles = ScaledSheet.create({
  phoneInputMainWrap: {
    marginTop: '10@ms',
    flexDirection: 'row',
  },
  dropDownContainer: {
    flex: 1,
    marginRight: 2,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  dropDownSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dropdownBtn: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: '#242E29',
  },
  selectText: {
    marginRight: 10,
    fontSize: 18,
    color: '#242E29',
  },
})
