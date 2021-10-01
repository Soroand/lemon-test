import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'
import RatingLotCard from 'assets/RatingLotCard'
import Favorite from 'assets/Favorite'
import StatusBar from 'atoms/StatusBar'
import { toJS } from 'mobx'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'

const ProductItemTop = ({ item, seller, buyer }) => {
  const navigation = useNavigation()
  const style = styles({ item, seller, buyer })

  return (
    <View style={style.imageContainer}>
      {/* Buyer */}
      {buyer && (
        <View style={style.rating}>
          <RatingLotCard style={{ marginRight: 3 }} />
          <P textSize="11@mvs" textColor="#fff" textWeight="700">
            {item?.seller ? item?.seller?.rating : 0}
          </P>
        </View>
      )}

      {buyer && (
        <TouchableOpacity style={style.favorite}>
          <Favorite
            heartFill={item.favorite && '#FFFFFF'}
            heartStroke={item.favorite && '#FFFFFF'}
            bannerFill={item.favorite && '#FF6161'}
          />
        </TouchableOpacity>
      )}

      {/* Seller */}
      {seller && <View></View>}
      <TouchableOpacity
        onPress={() =>
          buyer && navigation.navigate('BuyingLot', { item: toJS(item) })
        }
      >
        <Image
          source={item.img ? item.img : { uri: `${item.itemPhotos[0].uri}` }}
          style={style.image}
        />
        {seller && <StatusBar item={item} myLots={true} lotCard={true} />}
      </TouchableOpacity>
    </View>
  )
}

export default ProductItemTop

const ratingColor = (rating) => {
  if (rating <= 2) {
    return '#FF6161'
  } else if (rating > 2 && rating < 4) {
    return '#FF8D5C'
  } else {
    return '#00A944'
  }
}

const styles = (props) =>
  ScaledSheet.create({
    imageContainer: {
      position: 'relative',
      zIndex: 1,
      elevation: 1,
    },
    image: {
      width: '100%',
      height: '60@mvs',
      borderTopLeftRadius: '10@ms',
      borderTopRightRadius: '10@ms',
    },
    rating: {
      borderRadius: 10,
      backgroundColor: ratingColor(props?.item?.seller?.rating || ''),
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3@mvs',
      top: '10@mvs',
      left: '10@mvs',
      zIndex: 10,
      elevation: 10,
    },
    favorite: {
      position: 'absolute',
      top: 0,
      right: '15@mvs',
      zIndex: 10,
      elevation: 10,
    },
  })
