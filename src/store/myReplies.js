import { makeAutoObservable } from 'mobx'

class MyRepliesItems {
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  updateItems(item) {
    this.items = item
  }
}

export default MyRepliesItems
