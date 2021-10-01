import { makeAutoObservable } from 'mobx'

class Registration {
  constructor() {
    makeAutoObservable(this)
  }
}

export default Registration
