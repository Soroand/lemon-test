import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Text } from 'react-native'

const P = ({ children, customStyles, ...props }) => {
  return <Text style={[styles(props).default, customStyles]}>{children}</Text>
}

export default P

const styles = (props) =>
  ScaledSheet.create({
    default: {
      fontSize: props.textSize || `16@ms`,
      color: props.textColor || '#6C6C6C',
      marginTop: props.marginT || 0,
      textAlign: props.textAlign || null,
      fontWeight: props.textWeight || '400',
      fontStyle: props.textStyle,
      lineHeight: props.lineHeight,
      textTransform: props.textCapital,
      includeFontPadding: props.textDefaultPadding,
    },
  })
