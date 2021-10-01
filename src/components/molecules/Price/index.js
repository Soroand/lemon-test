import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { View } from 'react-native'
import { P } from 'atoms/TextElements'
import ArrowDownFilter from 'assets/ArrowDownFilter'
import ArrowUpFilter from 'assets/ArrowUpFilter'
import I18n from 'I18n'

const Price = ({
  price,
  forAmount,
  arrow,
  priceSize,
  forAmountSize,
  withCurrency = true,
  priceColor,
  forAmountColor,
  forAmountPaddingVer = 4,
  forAmountPaddingHor = 4,
  marginLeft = 4,
  forAmountRadius = 3,
}) => (
  <View style={styles.price}>
    {!!arrow && (
      <>
        {arrow === 'up' ? (
          <ArrowUpFilter style={{ marginTop: 4 }} color={'#FF6161'} />
        ) : (
          <ArrowDownFilter style={{ marginBottom: 4 }} color={'#00A944'} />
        )}
      </>
    )}

    <P
      textWeight={'bold'}
      textDefaultPadding={false}
      textStyle="italic"
      textSize={priceSize || '22@ms'}
      textColor={priceColor || '#00A944'}
      customStyles={{ marginLeft }}
    >
      {price} {withCurrency && '₸'}
    </P>

    {!!forAmount && (
      <View
        style={[
          styles.forAmount,
          {
            backgroundColor: forAmountColor || '#00A944',
            paddingHorizontal: forAmountPaddingHor,
            paddingVertical: forAmountPaddingVer,
            borderRadius: forAmountRadius,
          },
        ]}
      >
        <P
          textWeight={'bold'}
          textDefaultPadding={false}
          textSize={forAmountSize || '10@ms'}
          textColor="#fff"
        >
          {forAmount} {I18n.t('SelectedCurrency.item')}
        </P>
      </View>
    )}
  </View>
)

export default Price

const styles = ScaledSheet.create({
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forAmount: {
    backgroundColor: '#00A944',
    marginLeft: 6,
    transform: [{ skewX: '-10deg' }],
  },
})
