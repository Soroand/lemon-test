import React, { useState } from 'react'
import { Platform, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const SmsConfirmation = ({ value, setValue }) => {
  const ref = useBlurOnFulfill({ value, cellCount: 5 })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={5}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused ? styles.focusCell : null]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  )
}

export default SmsConfirmation

const styles = ScaledSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60@mvs',
    height: '55@mvs',
    fontSize: '42@mvs',
    lineHeight: 60,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    color: '#242E29',
  },
  focusCell: {
    borderColor: '#ccc',
  },
})
