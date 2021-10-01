import { makeAutoObservable } from 'mobx'

class Notifications {
  list = []

  constructor() {
    makeAutoObservable(this)
  }

  updateList(item) {
    this.list = item
  }
}

export default Notifications
