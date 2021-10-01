class MyLotFilter {
  filterLots(active, myLots) {
    switch (active) {
      case 1:
        return myLots.maLotsBro.filter((item) => item.status === 'active')
      case 2:
        return myLots.maLotsBro.filter((item) => item.status === 'review')
      case 3:
        return myLots.maLotsBro.filter((item) => item.status === 'denied')
      default:
        return myLots.maLotsBro
    }
  }
}

export default MyLotFilter
