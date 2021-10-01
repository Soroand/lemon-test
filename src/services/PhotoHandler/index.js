import ImagePicker from 'react-native-image-crop-picker'
import { Platform } from 'react-native'
import uuid from 'react-native-uuid'

export default class PhotoHandler {
  //  PICK IMAGE FROM GALERY FUNCTION
  handleImage(index, setPicture, setCertificate, picture, certificate) {
    console.log(index, setPicture)
    ImagePicker.openPicker({
      multiple: true,
      compressImageMaxWidth: 768,
      compressImageMaxHeight: 1024,
      includeBase64: true,
      cropping: true,
    }).then((image) => {
      index == 0
        ? setPicture([
            ...picture,
            ...image.map((item) => {
              return {
                id: uuid.v4(),
                name: item.filename,
                type: item.mime,
                uri:
                  Platform.OS === 'android'
                    ? item.path
                    : item.path.replace('file://', ''),
              }
            }),
          ])
        : setCertificate([
            ...certificate,
            ...image.map((item) => {
              return {
                id: uuid.v4(),
                name: item.filename || `${new Date().getTime()}.jpg`,
                type: item.mime,
                uri:
                  Platform.OS === 'android'
                    ? item.path
                    : item.path.replace('file://', ''),
              }
            }),
          ])
    })
  }

  // TAKE PHOTO FUNCTION
  handlePhoto(index, setPicture, setCertificate, picture, certificate) {
    ImagePicker.openCamera({
      compressImageMaxWidth: 768,
      compressImageMaxHeight: 1024,
      includeBase64: true,
      cropping: true,
    }).then((image) => {
      index == 0
        ? setPicture([
            ...picture,
            {
              id: uuid.v4(),
              name: image.filename || `${new Date().getTime()}.jpg`,
              type: image.mime,
              uri:
                Platform.OS === 'android'
                  ? image.path
                  : image.path.replace('file://', ''),
            },
          ])
        : setCertificate([
            ...certificate,
            {
              id: uuid.v4(),
              name: image.filename || `${new Date().getTime()}.jpg`,
              type: image.mime,
              uri:
                Platform.OS === 'android'
                  ? image.path
                  : image.path.replace('file://', ''),
            },
          ])
    })
  }
}
