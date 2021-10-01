import React, { useContext } from 'react'
import { AppContext } from 'context/App'
import Kzt from 'assets/Currency/Kzt'
import Rub from 'assets/Currency/Rub'
import Usd from 'assets/Currency/Usd'

const CurrencyIcon = () => {
  const {
    store: { auth },
  } = useContext(AppContext)
  return auth.currency === 'kzt' ? (
    <Kzt style={{ marginRight: 10 }} />
  ) : auth.currency === 'rub' ? (
    <Rub style={{ marginRight: 10 }} />
  ) : (
    <Usd style={{ marginRight: 10 }} />
  )
}

export default CurrencyIcon
