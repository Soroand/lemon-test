export default class CurrencyWeightConverter {
  usdExchangeRate = 425
  rubExchangeRate = 5.8

  priceConvert(price, volume, currency) {
    switch (currency) {
      case 'usd': {
        return ((price * volume) / this.usdExchangeRate).toFixed(1) + ' $'
      }
      case 'rub': {
        return ((price * volume) / this.rubExchangeRate).toFixed() + ' ₽'
      }
      default:
        return price * volume + ' ₸'
    }
  }
}
