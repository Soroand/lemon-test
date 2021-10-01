import React, { useMemo, useContext } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { P } from 'atoms/TextElements'
import { AppContext } from 'context/App'
import I18n from 'mobx-react'
import RNRestart from 'react-native-restart'

const FlatLangCurrSelector = observer(({ images, currency, settings }) => {
  const {
    store: { auth },
    repositories: { asyncStorage },
  } = useContext(AppContext)
  const navigation = useNavigation()

  useMemo(() => {
    if (auth.lang !== null && auth.currency !== null && !settings) {
      setTimeout(() => {
        navigation.navigate('Greetings')
      }, 300)
    }
  }, [auth.lang, auth.currency])

  return (images.length > 0 ? images : currency).map((item, index) => {
    return (
      <TouchableOpacity
        key={item.text}
        onPress={() => {
          images.length > 0
            ? (auth.updateLang(index === 0 ? 'kz' : index === 1 ? 'ru' : 'en'),
              asyncStorage.setItem(
                'language',
                index === 0 ? 'kz' : index === 1 ? 'ru' : 'en'
              ))
            : (auth.updateCurrency(
                index === 0 ? 'kzt' : index === 1 ? 'rub' : 'usd'
              ),
              asyncStorage.setItem(
                'currency',
                index === 0 ? 'kzt' : index === 1 ? 'rub' : 'usd'
              )),
            settings && RNRestart.Restart()
        }}
        activeOpacity={0.7}
        style={[
          styles.cardContainer,
          images.length > 0
            ? auth.lang === item.id && styles.activeCard
            : auth.currency === item.id && styles.activeCard,
          index === 2 && { marginRight: 0 },
        ]}
      >
        <Image
          source={item.url}
          style={[currency.length > 0 ? styles.imageCurrency : styles.image]}
        />
        <P marginT={'15@ms'}>{item.text}</P>
      </TouchableOpacity>
    )
  })
})

export default FlatLangCurrSelector

const styles = ScaledSheet.create({
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginBottom: '50@ms2',
  },
  text: {
    fontSize: '13@ms2',
    color: '#6C6C6C',
    marginTop: '10@ms2',
  },
  cardContainer: {
    flex: 1,
    marginRight: '6@ms2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: '20@mvs',
    borderRadius: '10@ms',
    backgroundColor: '#fff',
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: '32@ms',
    height: '24@ms',
  },
  imageCurrency: {
    width: '15@ms',
    height: '22@ms',
  },
  activeCard: {
    borderWidth: '2@ms2',
    borderColor: '#FFCE45',
  },
})
