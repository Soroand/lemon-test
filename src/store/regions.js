import { makeAutoObservable } from 'mobx'
import I18n from 'I18n'

class Regions {
  countries = () => [
    I18n.t('Settings.RegionScreen.Countries.first'),
    I18n.t('Settings.RegionScreen.Countries.second'),
    I18n.t('Settings.RegionScreen.Countries.third'),
  ]
  county = () => [
    [
      I18n.t('Settings.RegionScreen.Counties.first'),
      I18n.t('Settings.RegionScreen.Counties.second'),
      I18n.t('Settings.RegionScreen.Counties.third'),
      I18n.t('Settings.RegionScreen.Counties.fourth'),
    ],
  ]
  cities = () => [
    [
      I18n.t('Settings.RegionScreen.Cities.first'),
      I18n.t('Settings.RegionScreen.Cities.second'),
    ],
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export default Regions
