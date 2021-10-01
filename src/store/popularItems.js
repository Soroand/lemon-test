import { makeAutoObservable } from 'mobx'

class PopularItems {
  popular = []

  constructor() {
    makeAutoObservable(this)
  }

  updatePopular(item) {
    this.popular = item
  }
}

export default PopularItems
