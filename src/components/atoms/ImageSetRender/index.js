import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import uuid from 'react-native-uuid'
import { H } from 'atoms/TextElements'

const ImageSetRender = ({ title, item, customStyles }) => {
  return (
    <View style={[styles.container, customStyles]}>
      <H type="h2" marginT="20@ms">
        {title}
      </H>
      <View style={styles.imagesContainer}>
        {item.map((item) => {
          return (
            <View key={uuid.v4()} style={styles.imageWrap}>
              <Image style={styles.image} source={item} />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ImageSetRender

const styles = ScaledSheet.create({
  container: {},
  imageWrap: {
    position: 'relative',
    width: '100@ms',
    height: '100@ms',
    marginRight: 2,
    marginBottom: 2,
  },
  image: {
    width: '100@ms',
    height: '100@ms',
  },
  imagesContainer: {
    marginTop: '12@ms',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
})
