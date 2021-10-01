import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { Text } from 'react-native'

const H = ({ children, customStyles, type, ...props }) => {
  return <Text style={[styles(props)[type], customStyles]}>{children}</Text>
}

export default H

const styles = (props) =>
  ScaledSheet.create({
    h1: {
      fontSize: props.textSize || '26@ms',
      color: props.textColor || '#242E29',
      fontWeight: props.textWeight || '400',
      textAlign: props.textAlign,
      marginTop: props.marginT,
    },
    h2: {
      fontSize: props.textSize || '20@ms',
      color: props.textColor || '#242E29',
      fontWeight: props.textWeight || '400',
      textAlign: props.textAlign,
      marginTop: props.marginT,
    },
    h3: {
      fontSize: props.textSize || '18@ms',
      color: props.textColor || '#242E29',
      fontWeight: props.textWeight || '400',
      textAlign: props.AlignText,
      marginTop: props.marginT,
    },
  })
