import React, { useContext } from 'react'
import { View, TouchableOpacity, Image, Alert } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P, H } from 'atoms/TextElements'
import Dash from 'react-native-dash'
import I18n from 'I18n'
import { toJS } from 'mobx'
import StatusBar from 'atoms/StatusBar'
import { AccentButton } from 'atoms/Buttons'
import InfoCard from 'assets/InfoCard'
import Star from 'assets/Star'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from 'context/App'
import { CopilotStep } from 'react-native-copilot'

const SellerLotRequests = ({
  item,
  buyer = null,
  seller = null,
  state = null,
  children,
  sellerMainPage,
}) => {
  const navigation = useNavigation()
  const {
    store: { auth },
    services: { currencyWeightConverter, dates },
  } = useContext(AppContext)
  return (
    <View style={[styles.container, { marginTop: state ? 15 : 0 }]}>
      {(buyer || seller) && !sellerMainPage && (
        <StatusBar item={item} top="-12@ms" left="10@ms" />
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Reply', item)
        }}
        activeOpacity={0.7}
        // style={{ marginTop: !sellerMainPage ? 20 : 0 }}
      >
        <View>
          <View style={{ marginBottom: 15 }}>
            {sellerMainPage && (
              <P textSize="13@ms">
                <P textSize="13@ms" textColor="#00A944">
                  {item.buyer.userName} {item.buyer.userLastName}
                </P>{' '}
                {I18n.t('SellerScreens.MainAddLot.requestPerson')}
              </P>
            )}
          </View>
          <View style={[styles.content, { marginTop: state ? 0 : 13 }]}>
            <Image style={styles.image} source={item.img}></Image>
            <View style={{ flex: 1 }}>
              <View style={[styles.listWrap, { marginBottom: 8 }]}>
                <View style={{ width: '60%' }}>
                  <H type="h3">{item.title}</H>
                </View>
                <P
                  textStyle="italic"
                  textWeight="700"
                  textSize="20@ms"
                  textColor="#00A944"
                >
                  {currencyWeightConverter.priceConvert(
                    item.price,
                    item.buyerVolume,
                    auth.currency
                  )}
                </P>
              </View>
              <View style={styles.listWrap}>
                <P textSize="13@ms">
                  {I18n.t('SellerScreens.MainAddLot.requestWeight')}
                </P>
                <Dash
                  dashLength={2}
                  dashColor="rgba(0,0,0,0.3)"
                  style={styles.dashLine}
                />
                <P textSize="14@ms" textColor="#242E29">
                  {item.buyerVolume} {I18n.t('SelectedCurrency.item')}
                </P>
              </View>
              <View style={styles.listWrap}>
                <P textSize="13@ms">
                  {I18n.t('SellerScreens.MainAddLot.requestPricePerKilo')}
                </P>
                <Dash
                  dashLength={2}
                  dashColor="rgba(0,0,0,0.3)"
                  style={styles.dashLine}
                />
                <P textSize="14@ms" textColor="#242E29">
                  {currencyWeightConverter.priceConvert(
                    item.price,
                    1,
                    auth.currency
                  )}
                </P>
              </View>
              <View style={styles.listWrap}>
                <P textSize="13@ms">
                  {I18n.t('SellerScreens.MainAddLot.requestDate')}
                </P>

                <Dash
                  dashLength={2}
                  dashColor="rgba(0,0,0,0.3)"
                  style={styles.dashLine}
                />
                <P textSize="14@ms" textColor="#242E29">
                  {dates.getFormat(item.date, 'DD MMMM YYYY')}
                </P>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {buyer && (state === 'active' || state === 'finished') && (
        <CopilotStep text="9" order={9} name="9">
          <AccentButton
            icon={
              state === 'active' ? (
                <InfoCard style={{ marginRight: 10 }} />
              ) : (
                <Star style={{ marginRight: 10 }} />
              )
            }
            btnHeight="50@ms"
            marginT="15@ms"
            textColor="#242E29"
            onPress={() => Alert.alert('Notification', 'Not yet implemented')}
          >
            {state === 'finished'
              ? I18n.t('BuyerScreens.MyReplies.lotRequestButtons.btnTwo')
              : I18n.t('BuyerScreens.MyReplies.lotRequestButtons.btnOne')}
          </AccentButton>
        </CopilotStep>
      )}

      {!!children && children}
    </View>
  )
}

export default SellerLotRequests

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    padding: '10@ms',
    borderRadius: 10,
    marginBottom: '10@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.13,
    shadowRadius: 3.22,
    elevation: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: '55@ms',
    height: '55@ms',
  },
  listWrap: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '7@ms',
  },
  dashLine: {
    flex: 4,
    height: 1,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    marginBottom: '3@ms',
  },
})
