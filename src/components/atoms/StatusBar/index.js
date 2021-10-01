import React, { useContext } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import I18n from 'I18n'
import { P } from 'atoms/TextElements'
import LotStatusCircle from 'assets/LotStatusCircle'
import LotStatusCross from 'assets/LotStatusCross'
import { AppContext } from 'context/App'
import RequestLotStatusPlusIcon from 'assets/RequestLotStatusPlusIcon'
import CheckMarkLotRequest from 'assets/CheckMarkLotRequest'
import { toJS } from 'mobx'

const StatusBar = ({ item, lotCard, myLots, ...props }) => {
  const {
    store: { auth },
  } = useContext(AppContext)

  console.log('status bar item = ', toJS(item))
  return (
    <View
      style={[
        styles(props).statusBar,
        {
          // LOT STATUS COLORS
          backgroundColor:
            item.status === 'active' && myLots
              ? '#00A944'
              : item.status === 'active'
              ? '#0085FF'
              : item.status === 'denied'
              ? '#FF6161'
              : item.status === 'finished'
              ? '#00A944'
              : '#FFCE45',
        },
      ]}
    >
      {/* LOT STATUS ICONS */}
      {item.status === 'active' &&
        (!myLots ? (
          <RequestLotStatusPlusIcon style={{ marginRight: 5 }} />
        ) : (
          <LotStatusCircle style={{ marginRight: 5 }} />
        ))}
      {item.status === 'finished' && (
        <CheckMarkLotRequest style={{ marginRight: 5 }} />
      )}
      {item.status === 'review' && (
        <LotStatusCircle style={{ marginRight: 5 }} />
      )}
      {item.status === 'denied' && (
        <LotStatusCross style={{ marginRight: 5 }} />
      )}

      {/* LOT STATUS TEXT */}
      {item.status === 'review' && (
        <P textCapital="uppercase" textSize="11@ms">
          {I18n.t('SellerScreens.MainAddLot.LotCardStatus.review')}
        </P>
      )}
      {item.status === 'active' && (
        <P textCapital="uppercase" textSize="11@ms" textColor="#fff">
          {lotCard
            ? I18n.t('SellerScreens.MainAddLot.LotCardStatus.active')
            : I18n.t('SellerScreens.MainAddLot.LotRequestStatus.active')}
        </P>
      )}
      {item.status === 'finished' && (
        <P textCapital="uppercase" textSize="11@ms" textColor="#fff">
          {I18n.t('SellerScreens.MainAddLot.LotRequestStatus.finished')}
        </P>
      )}
      {item.status === 'denied' && (
        <P textCapital="uppercase" textSize="11@ms" textColor="#fff">
          {myLots
            ? I18n.t('SellerScreens.MainAddLot.LotCardStatus.denied')
            : I18n.t('SellerScreens.MainAddLot.LotRequestStatus.denied')}
        </P>
      )}
    </View>
  )
}

export default StatusBar

const styles = (props) =>
  ScaledSheet.create({
    statusBar: {
      position: 'absolute',
      top: props.top || '10@ms',
      left: props.left || '10@ms',
      borderRadius: 15,
      zIndex: 10,
      elevation: 10,
      paddingVertical: '6@ms',
      paddingHorizontal: '10@ms',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
  })
