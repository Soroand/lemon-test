import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Favorite from 'assets/Favorite'
import StatusBar from 'atoms/StatusBar'

const BuyingLotImage = ({ image, item, buyingLot, customImgStyles }) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity activeOpacity={0.6} style={styles.imageContainer}>
        <Image source={image} style={[styles.image, customImgStyles]} />
      </TouchableOpacity>
      {buyingLot ? (
        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 25 }}>
          <Favorite
            width={50}
            height={50}
            heartFill={item.favorite && '#FFFFFF'}
            heartStroke={item.favorite && '#FFFFFF'}
            bannerFill={item.favorite && '#FF6161'}
          />
        </TouchableOpacity>
      ) : (
        <StatusBar item={{ status: item.replyStatus }} />
      )}
    </View>
  )
}

export default BuyingLotImage

const styles = ScaledSheet.create({
  wrap: { flexDirection: 'row', position: 'relative' },
  imageContainer: { position: 'relative', flex: 1 },
  image: {
    width: '100%',
    height: 190,
  },
})
