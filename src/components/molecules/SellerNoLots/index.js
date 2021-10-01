import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P, H } from 'atoms/TextElements'
import SellerNoLot from 'assets/SellerNoLot'
import { WindowHeight } from 'atoms/Dimensions'
import I18n from 'I18n'

const SellerNoLots = () => {
  return (
    <View style={styles.container}>
      <H type="h2">{I18n.t('SellerScreens.MainAddLot.emptyLotTitle')}</H>
      <P
        marginT="10@ms"
        textAlign="center"
        textColor="rgba(36, 46, 41, 0.6)"
        textSize="15@mvs"
      >
        {I18n.t('SellerScreens.MainAddLot.emptyLotBodyOne')}
      </P>
      <P textAlign="center" textColor="rgba(36, 46, 41, 0.6)" textSize="15@mvs">
        {I18n.t('SellerScreens.MainAddLot.emptyLotBodyTwo')}
      </P>
      <SellerNoLot
        style={styles.image}
        width={WindowHeight > 700 ? 312 : 292}
        height={WindowHeight > 700 ? 300 : 272}
      />
    </View>
  )
}

export default SellerNoLots

const styles = ScaledSheet.create({
  container: {
    marginTop: '30@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: '30@ms',
  },
})
