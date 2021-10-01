import I18n, { getLanguages } from 'react-native-i18n'

import ru from './ru'
import en from './en'
import kz from './kz'

I18n.translations = {
  ru,
  en,
  kz,
}

getLanguages()
  .then((languages) => {})
  .catch((err) => {
    console.log('error getting languages', err)
  })

export default I18n
