export default class LocalAPI {
  $storage

  constructor(storage) {
    this.$storage = storage
  }

  async get(key) {
    try {
      const res = await this.$storage.get(key)
      return res ? JSON.parse(res) : undefined
    } catch (e) {
      console.log('LOCAL GET Error', e)
    }
  }

  async set(key, data) {
    try {
      const serialized = JSON.stringify(data)
      await this.$storage.set(key, serialized)
    } catch (e) {
      console.log('LOCAL GET Error', e)
    }
  }
}
