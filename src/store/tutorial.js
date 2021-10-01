import { makeAutoObservable } from 'mobx'
import React from 'react'
import { Platform } from 'react-native'

class Tutorial {
  activeStep = 1
  searchCategory = null
  searchItem = null
  canStart = true
  tutorialEnded = false

  constructor(asyncStorage) {
    this.asyncStorage = asyncStorage
    makeAutoObservable(this)
  }

  async checkCanStart() {
    const showed = await this.asyncStorage.getItem('tutorialShowed')
    this.canStart = Platform.OS === 'ios' ? !showed : false
  }

  setActiveStep(step) {
    this.activeStep = step
  }

  setTutorialEnd() {
    this.canStart = false
    this.tutorialEnded = true
    this.asyncStorage.setItem('tutorialShowed', 'true')
  }

  setSearchCategory(item) {
    this.searchCategory = item
  }

  setSearchItem(item) {
    this.searchItem = item
  }

  clear() {
    this.canStart = true
    this.activeStep = 1
    this.tutorialEnded = false
  }
}

export default Tutorial
