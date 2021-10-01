import React, { useContext } from 'react'
import { Image, View } from 'react-native'
import { H, P } from 'atoms/TextElements'
import {
  moderateScale,
  moderateVerticalScale,
  ScaledSheet,
} from 'react-native-size-matters'
import ExclamationMark from 'assets/ExclamationMark'
import I18n from 'I18n'
import Dash from 'react-native-dash'
import { WindowWidth } from 'atoms/Dimensions'
import moment from 'moment/min/moment-with-locales'
import { AppContext } from 'context/App'

/*
 * Props
 * title - Title of notification | string | required
 * date - Date of createion | Date | required
 * text - notification description
 *
 * product - Product information | Not required
 * type - one of [default, success, error] | Not required
 * customStyles
 * userName - Name of user in text | Not required
 * */

const NotificationCard = (props) => {
  const {
    services: { dates },
  } = useContext(AppContext)
  const type = props.type || 'default'
  const withProduct = !!props.product

  return (
    <View style={props.customStyles}>
      <View style={[styles(props).notification]}>
        <View style={styles(props).notificationHeading}>
          <View style={styles(props).notificationTitleBox}>
            {type === 'default' && (
              <View style={styles(props).exclamation}>
                <ExclamationMark />
              </View>
            )}

            <H type={'h3'} customStyles={styles(props).header}>
              {I18n.t(props.title)}
            </H>
          </View>

          <P
            textSize={'12@ms'}
            textAlign={'right'}
            customStyles={styles(props).date}
          >
            {dates.fromNow(props.date)}
          </P>
        </View>

        <P
          textSize={'12@ms'}
          lineHeight={'16@ms'}
          customStyles={styles(props).text}
        >
          <P textSize="12@ms" textColor="#00A944">
            {!!props.userName && props.userName}{' '}
          </P>
          {I18n.t(props.text)}
        </P>
      </View>

      {withProduct && (
        <View style={styles(props).product}>
          <Image style={styles(props).image} source={props.product.url} />

          <View style={styles(props).info}>
            <View style={[styles(props).listWrap, { marginBottom: 8 }]}>
              <View style={{ width: '60%' }}>
                <H type="h3">{props.product.title}</H>
              </View>
              <P
                textStyle="italic"
                textWeight="700"
                textSize="20@ms"
                textColor="#00A944"
              >
                {props.product.price} ₸
              </P>
            </View>
            <View style={styles(props).listWrap}>
              <P textSize="12@ms">
                {I18n.t('SellerScreens.MainAddLot.requestWeight')}
              </P>
              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles(props).dashLine}
              />
              <P textColor="#242E29" textWeight="400" textSize="13@ms">
                {props.product.weight} {I18n.t('SelectedCurrency.item')}
              </P>
            </View>
            <View style={styles(props).listWrap}>
              <P textSize="12@ms">
                {I18n.t('SellerScreens.MainAddLot.requestPricePerKilo')}
              </P>
              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles(props).dashLine}
              />
              <P textColor="#242E29" textWeight="400" textSize="13@ms">
                {props.product.basePrice} ₸
              </P>
            </View>
            <View style={styles(props).listWrap}>
              <P textSize="12@ms">
                {I18n.t('SellerScreens.MainAddLot.requestDate')}
              </P>

              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles(props).dashLine}
              />
              <P textColor="#242E29" textWeight="400" textSize="13@ms">
                {dates.getFormat(props.product.date, 'DD MMMM YYYY')}
              </P>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

const configs = (withProduct) => ({
  default: {
    notification: {
      backgroundColor: '#fff',
      borderBottomWidth: withProduct ? 1 : 0,
      borderBottomLeftRadius: withProduct ? 0 : 10,
      borderBottomRightRadius: withProduct ? 0 : 10,
    },
    header: { color: '#242E29' },
    date: { color: '#727272' },
    text: { color: '#6D6D6D' },
  },
  success: {
    notification: { backgroundColor: '#33BE6B' },
    header: { color: '#fff' },
    date: { color: '#fff', opacity: 0.6 },
    text: { color: '#fff' },
  },
  error: {
    notification: { backgroundColor: '#FF8585' },
    header: { color: '#fff' },
    date: { color: '#fff', opacity: 0.6 },
    text: { color: '#fff' },
  },
})

const styles = (props) => {
  const type = props.type || 'default'
  const withProduct = !!props.product
  const config = configs(withProduct)[type]

  return ScaledSheet.create({
    notification: {
      paddingTop: '11@mvs',
      paddingBottom: '10@mvs',
      paddingLeft: '10@mvs',
      paddingRight: '13@mvs',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomColor: '#E5E5E5',
      ...config.notification,
    },
    notificationHeading: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    notificationTitleBox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    exclamation: {
      marginRight: '10@ms',
      width: '25@ms',
      height: '25@ms',
      backgroundColor: '#FFCE45',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: config.header,
    date: config.date,
    text: config.text,
    product: {
      paddingTop: '9@mvs',
      paddingBottom: '14@mvs',
      paddingLeft: '10@mvs',
      paddingRight: '13@mvs',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image: {
      borderRadius: 10,
      width: '55@ms',
      height: '55@ms',
    },
    info: {
      marginTop: -4,
      width:
        WindowWidth -
        // Container padding left and right
        moderateScale(10) * 2 -
        // notification padding left
        moderateVerticalScale(10) -
        // notification padding right
        moderateVerticalScale(13) -
        // Product Image width
        moderateScale(55) -
        // Space between image and list wrap
        moderateScale(10),
    },
    listWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '5@ms',
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
}

export default NotificationCard
