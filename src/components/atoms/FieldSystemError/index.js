import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'

const FieldSystemError = ({ children }) => {
  return (
    <P
      marginT="5@ms"
      textSize={'13@ms'}
      textColor={'#FF6161'}
      lineHeight={'20@ms'}
    >
      {children}
    </P>
  )
}

export default FieldSystemError

const styles = ScaledSheet.create({
  container: {},
})
