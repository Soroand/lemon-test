import { makeAutoObservable } from 'mobx'

class TrendsItems {
  list = []
  filters = {
    countries: [
      'SellerScreens.Trends.countries.kz',
      'SellerScreens.Trends.countries.ru',
      'SellerScreens.Trends.countries.uk',
    ],
    category: ['Овощи и зелень', 'Картошка', 'Дыня', 'Арбуз'],
    subCategory: ['Картофель', 'Картофель2', 'Картофель3'],
  }
  activeFilter = {
    country: 'SellerScreens.Trends.countries.kz',
    category: 'Овощи и зелень',
    subCategory: 'Картофель',
  }

  constructor() {
    makeAutoObservable(this)
  }

  updateTrends(item) {
    this.list = item
  }

  setActiveFilter(name, value) {
    this.activeFilter[name] = value
  }
}

export default TrendsItems
