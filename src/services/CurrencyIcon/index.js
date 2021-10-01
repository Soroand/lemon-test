export default class GetCurrency {
  getIcon(curr) {
    switch (curr) {
      case 'usd': {
        return '$'
      }
      case 'rub': {
        return '₽'
      }
      default:
        return '₸'
    }
  }
}
