import React from 'react'
import { View, Text } from 'react-native'
import { moderateScale, ScaledSheet } from 'react-native-size-matters'
import ArrowDown from 'assets/ArrowDownReg'
import SelectDropdownLib from 'react-native-select-dropdown'
import { P } from 'atoms/TextElements'
import I18n from 'I18n'

const SelectDropdown = ({
  value,
  title,
  setValue,
  data,
  customStyle,
  dropdownBtnStyle,
  selectTextStyle,
  dropDownSelectStyle,
  customPlaceholderStyles,
  placeholder,
  rowTextStyle,
  translate,
  ...props
}) => {
  return (
    <>
      {title && (
        <P
          customStyles={{ marginBottom: moderateScale(8) }}
          textColor={props.textColor || '#242E29'}
          marginT={props.marginT || '15@ms'}
          textSize={props.textSize || '14@ms'}
          {...props}
        >
          {title}
        </P>
      )}

      <View style={[styles.dropDownContainer, customStyle]}>
        <SelectDropdownLib
          renderCustomizedButtonChild={() => (
            <View
              style={{
                ...styles.dropDownSelect,
                ...dropDownSelectStyle,
              }}
            >
              <Text
                style={[
                  styles.selectText,
                  selectTextStyle,
                  !!value ? {} : customPlaceholderStyles,
                ]}
              >
                {!!value ? (translate ? I18n.t(value) : value) : placeholder}
              </Text>
              <ArrowDown width={11} height={8} />
            </View>
          )}
          renderCustomizedRowChild={(item) => (
            <View
              style={[
                {
                  height: '100%',
                  justifyContent: 'center',
                },
                item === value ? styles.activeRow : {},
              ]}
            >
              <Text style={{ ...styles.rowTextStyle, ...rowTextStyle }}>
                {translate ? I18n.t(item) : item}
              </Text>
            </View>
          )}
          buttonStyle={{ ...styles.dropdownBtn, ...dropdownBtnStyle }}
          dropdownStyle={{
            ...styles.dropdownStyle,
            height:
              data.length >= 3
                ? moderateScale(46) * 3
                : moderateScale(46) * data.length,
          }}
          data={data}
          onSelect={setValue}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
          rowStyle={styles.rowStyle}
          rowTextStyle={{ ...styles.rowTextStyle }}
        />
      </View>
    </>
  )
}

export default SelectDropdown

const styles = ScaledSheet.create({
  dropDownContainer: {
    overflow: 'hidden',
    width: '100%',
    height: '50@ms',
  },
  dropDownSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownBtn: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: '10@ms',
    color: '#242E29',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderStyle: 'solid',
  },
  selectText: {
    fontSize: 18,
    color: '#242E29',
  },
  dropdownStyle: {
    marginTop: '12@ms',
    borderRadius: 10,
  },
  rowStyle: {
    height: '46@ms',
    borderBottomWidth: 0,
    padding: 0,
    justifyContent: 'center',
  },
  activeRow: {
    backgroundColor: 'rgba(255,206,69,0.2)',
  },
  rowTextStyle: {
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 0,
    fontSize: '16@ms',
    paddingHorizontal: '13@ms',
  },
})
