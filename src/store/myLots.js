import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toJS } from 'mobx'
class MyLots {
  maLotsBro = []
  scrollOffset = 0

  constructor() {
    makeAutoObservable(this)
    // makePersistable(this, {
    //   name: 'userEntity',
    //   properties: ['maLotsBro'],
    //   storage: AsyncStorage,
    // })
  }

  setScrollOffset(val) {
    this.scrollOffset = val
  }

  goLots(item) {
    this.maLotsBro = [...this.maLotsBro, item]
  }
}

export default MyLots
