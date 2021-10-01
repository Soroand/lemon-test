import moment from 'moment/min/moment-with-locales'
import I18n from 'I18n'

const item = {
  id: 1,
  person: 'Ержан Магомедов',
  url: require('assets/Mock/LotRequests/cucumber.png'),
  title: 'Огурцы четкие',
  price: '58 800',
  basePrice: '60',
  weight: '980',
  date: moment().toDate(),
}

const item2 = {
  id: 2,
  person: 'Нуржан Прокофьева',
  url: require('assets/Mock/LotRequests/potato.png'),
  title: 'Картофель Беллароза',
  price: '250 250',
  basePrice: '60',
  weight: '980',
  date: moment().toDate(),
}

const buyer = [
  {
    id: 1,
    title: 'Notifications.list.appConfirm',
    date: moment().subtract('1', 'd').toDate(),
    text: 'Notifications.list.confirmSub',
    product: item,
    type: 'success',
  },
  {
    id: 2,
    title: 'Notifications.list.appRejected',
    date: moment().subtract('15', 'm').toDate(),
    text: 'Notifications.list.rejectSub',
    product: item2,
    type: 'error',
  },
  {
    id: 3,
    title: 'Notifications.list.techTitle',
    date: moment().subtract('15', 'm').toDate(),
    text: 'Notifications.list.tech',
  },
]

const seller = [
  {
    id: 1,
    title: 'Notifications.list.newApp',
    date: moment().subtract('15', 'm').toDate(),
    text: 'Notifications.list.newSub',
    product: item,
    userName: 'Алтынгуль Мамедова',
  },
  {
    id: 2,
    title: 'Notifications.list.techTitle',
    date: moment().subtract('15', 'm').toDate(),
    text: 'Notifications.list.tech',
  },
  {
    id: 3,
    title: 'Notifications.list.subTitle',
    date: moment().subtract('15', 'm').toDate(),
    text: 'Notifications.list.sub',
  },
]

export default {
  buyer,
  seller,
}
