import LocalClient from 'services/LocalClient'
export default class AsyncStorage extends LocalClient {
  constructor(data) {
    super()
    this.data = data
  }

  async setItem(key, data) {
    try {
      await this.set(key, data.toString())
    } catch (e) {}
  }

  async getItem(data) {
    try {
      return await this.get(data)
    } catch (e) {}
  }

  async removeItem(key) {
    try {
      return await this.remove(key)
    } catch (e) {}
  }
}
