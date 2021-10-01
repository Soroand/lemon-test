import AsyncStorage from '@react-native-async-storage/async-storage'
import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class Profile {
  active = false
  subscription = null

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'profile',
      properties: ['active', 'subscription'],
      storage: AsyncStorage,
    })
  }

  activateProfile() {
    this.active = true
  }
  deactivateProfile() {
    this.active = false
  }
}

export default Profile
