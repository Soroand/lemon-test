import { makeAutoObservable } from 'mobx'
import I18n from 'I18n'
import moment from 'moment/min/moment-with-locales'

class Auth {
  lang = null
  currency = null
  token = null
  loading = true
  tabBar = true

  //USER ENTITY (need to create store for user)
  userRole = null
  userName = ''
  userLastName = ''
  userPhoneNumber = ''
  userPassword = ''
  userCountry = ''
  userCounty = ''
  userCity = ''
  userCompany = ''
  userEmail = ''
  rating = null

  constructor() {
    makeAutoObservable(this)
  }

  clearAuth() {
    this.loading = true
    this.token = null
    this.userRole = null
    this.lang = null
    this.currency = null
    this.userName = null
  }
  updateLang(index) {
    this.lang = index
    I18n.locale = index
    moment.locale(index === 'kz' ? 'kk' : index)
  }
  updateCurrency(index) {
    this.currency = index
  }
  setUserRole(id) {
    this.userRole = id
  }
  setUserToken(token) {
    this.token = token
  }
  onUserNameChange(value) {
    this.userName = value
  }
  onUserLastNameChange(value) {
    this.userLastName = value
  }
  onUserPhoneNumberChange(value) {
    this.userPhoneNumber = value
  }
  onUserPassword(value) {
    this.userPassword = value
  }
  setUserRegion(value) {
    this.userCountry = value[0]
    this.userCounty = value[1]
    this.userCity = value[2]
  }
  setUserCompany(value) {
    this.userCompany = value
  }
  setUserEmail(value) {
    this.userEmail = value
  }
  toggleTabBar(value) {
    console.log(value)
    this.tabBar = value
  }
}

export default Auth
