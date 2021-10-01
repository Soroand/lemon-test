import { makeAutoObservable } from 'mobx'
import I18n from 'I18n'
import moment from 'moment/min/moment-with-locales'

class FilterSearch {
  category = ''
  subCategory = ''
  priceMin = 0
  priceMax = 0

  constructor() {
    makeAutoObservable(this)
  }

  categoryChange(value) {
    this.category = value
  }
  subCategoryChange(value) {
    this.subCategory = value
  }
}

export default FilterSearch
