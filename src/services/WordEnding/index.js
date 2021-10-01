import I18n from 'I18n'

export default class WordEnding {
  wordEnd(num) {
    const n = Math.abs(num) % 100
    const n1 = n % 10
    if (n > 10 && n < 20) {
      return I18n.t('LotDynamicWords.caseThree')
    }
    if (n1 > 1 && n1 < 5) {
      return I18n.t('LotDynamicWords.caseTwo')
    }
    if (n1 == 1) {
      return I18n.t('LotDynamicWords.caseOne')
    }
    return I18n.t('LotDynamicWords.caseThree')
  }
  wordEndSearch(num) {
    const n = Math.abs(num) % 100
    const n1 = n % 10
    if (n > 10 && n < 20) {
      return I18n.t('WordEndings.plural')
    }
    if (n1 > 1 && n1 < 5) {
      return I18n.t('WordEndings.single')
    }
    if (n1 == 1) {
      return ''
    }
    return I18n.t('WordEndings.plural')
  }
}
