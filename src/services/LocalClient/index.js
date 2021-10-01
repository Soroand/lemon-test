import AsyncStorage from '@react-native-async-storage/async-storage'

export default class LocalClient {
  storage = AsyncStorage

  async get(key) {
    try {
      return await this.storage.getItem(key)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }

  async set(key, value) {
    try {
      return await this.storage.setItem(key, value)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }

  async remove(key) {
    try {
      return await this.storage.removeItem(key)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }
}
