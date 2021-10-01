import moment from 'moment/min/moment-with-locales'

export default class Dates {
  getFormat(date, format) {
    return moment(date).format(format)
  }

  fromNow(date) {
    return moment().diff(moment(date), 'days') > 1
      ? moment(date).format('D MMMM')
      : moment(date).fromNow()
  }
}
