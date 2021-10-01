import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { P } from 'atoms/TextElements'
import ArrowDown from 'assets/ArrowDownLot'
import ArrowUp from 'assets/ArrowUpLot'
import Cart from 'assets/Cart'
import MyLotPencil from 'assets/MyLotPencil'
import Weight from 'assets/Weight'
import { ScaledSheet } from 'react-native-size-matters'
import MediumPriceIndicator from 'assets/MediumPriceIndicator'
import { observer } from 'mobx-react'
import I18n from 'I18n'
import Price from 'molecules/Price'

const ProductItemCart = ({ item, seller, buyer }) => {
  return (
    <View style={styles.content}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {item.priceMarker === 'medium' ? (
            <MediumPriceIndicator style={{ marginRight: 5 }} />
          ) : item.priceMarker === 'low' ? (
            <ArrowDown style={{ marginRight: 5 }} />
          ) : (
            <ArrowUp style={{ marginRight: 5 }} />
          )}
          {item.priceMarker === 'medium' ? (
            <P textSize="9@ms" textColor="#6D6D6D">
              {I18n.t('LotCardPrices.lotPriceMedium')}
            </P>
          ) : item.priceMarker === 'low' ? (
            <P textSize="9@ms" textColor="#00A944">
              {I18n.t('LotCardPrices.lotPriceLow')}
            </P>
          ) : (
            <P textSize="9@ms" textColor="#FF6161">
              {I18n.t('LotCardPrices.lotPriceHigh')}
            </P>
          )}
        </View>
        <View>
          <Price
            forAmountRadius={2}
            forAmountPaddingHor={2}
            forAmountPaddingVer={1}
            forAmountSize={7}
            marginLeft={0}
            priceSize={'13@ms'}
            priceColor={
              ['low', 'medium'].includes(item.priceMarker)
                ? '#00A944'
                : '#FF6161'
            }
            forAmount={1}
            price={item.price}
            forAmountColor={
              ['low', 'medium'].includes(item.priceMarker)
                ? '#00A944'
                : '#FF6161'
            }
          />
        </View>
      </View>

      {/* CART BUTTON */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[
            styles.cart,
            item?.status === 'review' && { backgroundColor: '#EFEFEF' },
          ]}
        >
          {buyer && <Cart />}
          {seller && <MyLotPencil />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default observer(ProductItemCart)

const styles = ScaledSheet.create({
  content: {
    flexDirection: 'row',
    marginTop: '20@mvs',
    minHeight: 36,
  },
  cart: {
    backgroundColor: '#FFCE45',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
})
