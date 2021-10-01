import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import I18n from 'I18n'
import { TextInputMask } from 'react-native-masked-text'
import ShowHidePassword from 'assets/ShowHidePassword'
import MagnifyngGlass from 'assets/MagnifyngGlass'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { P } from 'atoms/TextElements'

const TextInputField = ({
  type = 'text',
  onChange,
  value,
  customStyles,
  maxLength,
  onBlur,
  editable,
  placeholder,
  multi,
  numberOfLines,
  title,
  setValue,
  copilot,
  onFocus,
  searchedCategories,
  propRef,
  onPress,
  setModalVisible,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <>
      {title && (
        <P textColor="#242E29" textSize="13@ms" {...props}>
          {title}
        </P>
      )}
      <View
        {...copilot}
        onLayout={props.onLayout || undefined}
        style={[styles.container, { marginBottom: multi ? 25 : 0 }]}
      >
        {type === 'password' && (
          <View style={styles.showHideBtn}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowPassword(!showPassword)}
            >
              <ShowHidePassword />
            </TouchableOpacity>
          </View>
        )}
        {type === 'search' && (
          <View style={styles.searchIcon}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                searchedCategories()
              }}
            >
              <MagnifyngGlass />
            </TouchableOpacity>
          </View>
        )}
        <TextInputMask
          multiline={multi ? true : false}
          numberOfLines={numberOfLines ? numberOfLines : 1}
          editable={editable}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength || null}
          keyboardType={
            type === 'number' || type === 'value' ? 'numeric' : 'default'
          }
          autoCorrect={false}
          secureTextEntry={type === 'password' && showPassword}
          style={[
            styles.inputField,
            {
              ...customStyles,
            },
          ]}
          type={type === 'money' ? 'money' : 'custom'}
          placeholder={
            placeholder
              ? placeholder
              : type === 'name'
              ? `${I18n.t('Auth.Registration.stepTwo.namePlaceholder')}`
              : type === 'lastName'
              ? `${I18n.t('Auth.Registration.stepTwo.lastNamePlaceholder')}`
              : type === 'number'
              ? '777 478-45-28'
              : type === 'search'
              ? `${I18n.t('BuyerScreens.Applications.searchField')}`
              : type === 'email'
              ? `${I18n.t('Profile.EditProfile.emailPlaceholder')}`
              : type === 'company'
              ? `${I18n.t('Profile.EditProfile.companyFieldPlaceholder')}`
              : `${I18n.t('Auth.Registration.stepThree.passwordTitle')}`
          }
          options={{
            mask:
              type === 'name' || type === 'lastName'
                ? '*********************************'
                : type === 'number'
                ? '999 999-99-99'
                : type === 'search'
                ? '*********************'
                : type === 'email'
                ? '**********************************'
                : type === 'description'
                ? '*********************************************************************'
                : type === 'value'
                ? '99999999999'
                : '**************************************************',
            precision: 0,
            separator: ',',
            delimiter: '.',
            unit: '',
            suffixUnit: '',
          }}
          // dont forget to set the "value" and "onChangeText" props
          value={value()}
          onChangeText={(val) => onChange(val)}
        />
      </View>
    </>
  )
}

export default TextInputField

const styles = ScaledSheet.create({
  container: {},
  inputField: {
    width: '99.9%',
    padding: '15@mvs',
    marginTop: '10@ms1',
    backgroundColor: '#fff',
    borderRadius: '10@ms',
    fontSize: '16@ms',
    color: '#242E29',
    // height: '50@mvs',
    maxHeight: '150@mvs',
  },
  showHideBtn: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'flex-end',
    paddingRight: '25@ms',
    top: Platform.OS === 'ios' ? '22@mvs' : '22@mvs',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 10,
    alignSelf: 'flex-end',
    paddingRight: '18@ms',
    top: Platform.OS === 'ios' ? '13@mvs' : '11@mvs',
  },
})
