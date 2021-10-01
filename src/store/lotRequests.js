import { makeAutoObservable } from 'mobx'
import { toJS } from 'mobx'
import uuid from 'react-native-uuid'
import moment from 'moment/min/moment-with-locales'
class LotRequests {
  requests = []
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  constructor() {
    makeAutoObservable(this)
  }

  updateRequests(item) {
    this.requests = item
  }
  addToRequest(item) {
    item['id'] = uuid.v4()
    item['replyStatus'] = 'review'
    item['time'] = moment().format('LT')
    item['date'] =
      new Date().getDate() +
      ' ' +
      this.months[new Date().getMonth() + 1] +
      ' ' +
      new Date().getFullYear()
    this.requests = [...this.requests, item]
    alert('Success')
    console.log(toJS(this.requests))
  }
}

export default LotRequests
