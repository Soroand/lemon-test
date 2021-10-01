import React, { useContext } from 'react'
import { Text } from 'react-native'
import { AppContext } from 'context/App'
import { ScaledSheet } from 'react-native-size-matters'

const PriceSymbolComponent = ({ customStyles, ...props }) => {
  const {
    store: { auth },
  } = useContext(AppContext)

  return auth.currency == 'rub' ? (
    <Text style={[styles(props).default]}>₽</Text>
  ) : auth.currency === 'kzt' ? (
    <Text style={[styles(props).default]}>₸</Text>
  ) : (
    <Text style={[styles(props).default]}>$</Text>
  )
}

export default PriceSymbolComponent

const styles = (props) =>
  ScaledSheet.create({
    default: {
      fontSize: props.textSize || '14@ms',
      color: props.textColor,
      textTransform: props.textTransform,
    },
  })
