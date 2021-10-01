import { makeAutoObservable } from 'mobx'

class Products {
  availableProducts = []

  constructor() {
    makeAutoObservable(this)
  }

  updateProducts(item) {
    this.availableProducts = item
  }
}

export default Products
