export default class NetAPI {
  $http
  /**
   * @constructor
   * @param http - client to create http calls
   */
  constructor(http) {
    this.$http = http
  }

  /**
   * GET method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  async get(url, params) {
    try {
      return await this.$http.get(url, params)
    } catch (e) {
      console.log('HTTP GET Error', e)
    }
  }

  /**
   * POST method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  async post(url, params) {
    try {
      return await this.$http.post(url, params && params)
    } catch (e) {
      console.log('HTTP POST Error', e)
    }
  }

  /**
   * PUT method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  async put(url, params) {
    try {
      return await this.$http.put(url, params)
    } catch (e) {
      console.log('HTTP PUT Error', e)
    }
  }

  /**
   * DELETE method to call API
   * @param {string} url - url to call
   * @param {*} params
   * @returns response
   */
  async delete(url, params) {
    try {
      return await this.$http.delete(url, params)
    } catch (e) {
      console.log('HTTP DELETE Error', e)
    }
  }
}
