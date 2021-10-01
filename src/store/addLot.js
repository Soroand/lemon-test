import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { random } from 'lodash'

class Lot {
  id = null
  categoriesMock = ['Картошка', 'Морковка', 'Огурцы', 'Помидоры', 'Капуста']
  subCategoriesMock = ['Молодая', 'Домашняя', 'Вкусная', 'Красная', 'Свежая']
  category = null
  subCategory = null
  title = ''
  price = null
  description = ''
  volMin = 0
  volMax = 1
  country = null
  county = null
  city = null
  locality = null
  itemPhotos = []
  itemCertificates = []
  priceMarker = null
  status = null

  //Temporyry to simulate value
  marker = ['low', 'medium', 'high']
  stat = ['review', 'active', 'denied']

  constructor(maLotsBro) {
    makeAutoObservable(this)
    // makePersistable(this, {
    //   name: 'lotEntity',
    //   properties: ['category', 'subCategory', 'type', 'price', 'description'],
    //   storage: AsyncStorage,
    // })
  }

  stepOneHandler(category, subCategory, type, price, description) {
    console.log(category, price)
    this.category = category
    this.subCategory = subCategory
    this.title = type
    this.price = price
    this.description = description
  }
  stepTwoHandler(volMin, volMax) {
    this.volMin = volMin
    this.volMax = volMax
  }

  stepThreeHandler(country, county, city, locality) {
    this.country = country
    this.county = county
    this.city = city
    this.locality = locality
  }

  stepFourHandler(picture, certificate) {
    this.itemPhotos = [...this.itemPhotos, ...picture]
    this.itemCertificates = [...this.itemCertificates, ...certificate]
    this.id = uuid.v4()
    this.status = this.stat[(Math.random() * 2).toFixed()]
    this.priceMarker = this.marker[(Math.random() * 2).toFixed()]
  }
  clearState() {
    this.id = null
    this.categoriesMock = [
      'Картошка',
      'Морковка',
      'Огурцы',
      'Помидоры',
      'Капуста',
    ]
    this.subCategoriesMock = [
      'Молодая',
      'Домашняя',
      'Вкусная',
      'Красная',
      'Свежая',
    ]
    this.category = null
    this.subCategory = null
    this.title = ''
    this.price = null
    this.description = ''
    this.volMin = 0
    this.volMax = 1
    this.country = null
    this.county = null
    this.city = null
    this.locality = null
    this.itemPhotos = []
    this.itemCertificates = []
    this.priceMarker = null
    this.status = null
  }
}

export default Lot
