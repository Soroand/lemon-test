import { makeAutoObservable } from 'mobx'

class FavoriteItems {
  favorite = []

  constructor() {
    makeAutoObservable(this)
  }

  updateFavorite(item) {
    this.favorite = item
  }
}

export default FavoriteItems
