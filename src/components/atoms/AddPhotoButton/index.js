import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Camera from 'assets/Camera'
import { P } from 'atoms/TextElements'

const AddPhotoButton = ({ onPress, customStyles, title, ...props }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        {...props}
        style={[styles(props).addPhoto, customStyles]}
      >
        <Camera style={{ alignSelf: 'center' }} />
        <P
          customStyles={{ width: '75%' }}
          marginT="10@ms"
          textAlign="center"
          textSize="13@ms"
          textColor="#242E29"
        >
          {title}
        </P>
      </TouchableOpacity>
    </View>
  )
}

export default AddPhotoButton

const styles = (props) =>
  ScaledSheet.create({
    addPhoto: {
      width: '100@ms',
      height: '100@ms',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: props.marginT || 0,
    },
  })
