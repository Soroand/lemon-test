import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { H, P } from 'atoms/TextElements'
import ExclamationMark from 'assets/ExclamationMark'
import { AccentButton } from 'atoms/Buttons'
import RegBackArrow from 'assets/RegBackArrow'
import I18n from 'I18n'
import AddPhotoButton from 'atoms/AddPhotoButton'
import { useNavigation } from '@react-navigation/native'
import TrashBin from 'assets/TrashBin'
import uuid from 'react-native-uuid'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { AppContext } from 'context/App'
import { toJS } from 'mobx'

const AddLotStepFourForm = () => {
  const navigation = useNavigation()
  const [picture, setPicture] = useState([])
  const [certificate, setCertificate] = useState([])
  const { showActionSheetWithOptions } = useActionSheet()
  const {
    services: { photoHandler },
    store: { addLot, myLots },
  } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <H type="h2" marginT="25@ms">
        {I18n.t('CreateLot.StepFour.photoTitle')}
      </H>
      <View style={styles.imagesContainer}>
        {picture &&
          picture.map((item, index) => {
            return (
              <View key={uuid.v4()} style={styles.imageWrap}>
                <Image style={styles.image} source={{ uri: item.uri }} />
                <TouchableOpacity
                  onPress={() => {
                    picture.splice(index, 1), setPicture([...picture])
                  }}
                  activeOpacity={0.6}
                  style={styles.imageTrashCan}
                >
                  <TrashBin />
                </TouchableOpacity>
              </View>
            )
          })}
        {/* ADD PHOTO BTN */}
        <AddPhotoButton
          onPress={() =>
            showActionSheetWithOptions(
              {
                options: I18n.t('CreateLot.StepFour.actionSheet'),
                cancelButtonIndex: 2,
                destructiveButtonIndex: 0,
              },
              (buttonIndex) => {
                buttonIndex == 0
                  ? photoHandler.handleImage(
                      0,
                      setPicture,
                      setCertificate,
                      picture,
                      certificate
                    )
                  : buttonIndex == 1
                  ? photoHandler.handlePhoto(
                      0,
                      setPicture,
                      setCertificate,
                      picture,
                      certificate
                    )
                  : null
              }
            )
          }
          title={I18n.t('CreateLot.StepFour.photoPickerText')}
          activeOpacity={0.6}
        />
        {/* ----------------- */}
      </View>
      <H type="h2" marginT="25@ms">
        {I18n.t('CreateLot.StepFour.certificateTitle')}
      </H>
      <P textSize="13@ms" textColor="#646464" marginT="10@ms">
        {I18n.t('CreateLot.StepFour.certificateSubTitle')}
      </P>
      <View style={styles.imagesContainer}>
        {certificate &&
          certificate.map((item, index) => {
            return (
              <View key={uuid.v4()} style={styles.imageWrap}>
                <Image style={styles.image} source={{ uri: item.uri }} />
                <TouchableOpacity
                  onPress={() => {
                    certificate.splice(index, 1),
                      setCertificate([...certificate])
                  }}
                  activeOpacity={0.6}
                  style={styles.imageTrashCan}
                >
                  <TrashBin />
                </TouchableOpacity>
              </View>
            )
          })}
        {/* ADD PHOTO BTN */}
        <AddPhotoButton
          onPress={() =>
            showActionSheetWithOptions(
              {
                options: ['Choose from galery', 'Take photo', 'Cancel'],
                cancelButtonIndex: 2,
                destructiveButtonIndex: 0,
              },
              (buttonIndex) => {
                buttonIndex == 0
                  ? photoHandler.handleImage(
                      1,
                      setPicture,
                      setCertificate,
                      picture,
                      certificate
                    )
                  : buttonIndex == 1
                  ? photoHandler.handlePhoto(
                      1,
                      setPicture,
                      setCertificate,
                      picture,
                      certificate
                    )
                  : null
              }
            )
          }
          title={I18n.t('CreateLot.StepFour.certificatePickerText')}
          activeOpacity={0.6}
        />
        {/* ----------------- */}
      </View>
      <View style={styles.message}>
        <View style={styles.exclamation}>
          <ExclamationMark />
        </View>
        <P
          textColor="#242E29"
          textSize="13@ms"
          customStyles={{ flexShrink: 1 }}
        >
          {I18n.t('CreateLot.StepFour.screenNotificationText')}
        </P>
      </View>

      <View style={styles.buttonContainer}>
        <AccentButton
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          customStyles={{
            backgroundColor: '#E1E1E1',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E1E1E1',
            marginTop: 25,
            marginRight: 15,
            flex: 1,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          <RegBackArrow />
        </AccentButton>
        <AccentButton
          onPress={() => {
            picture?.length > 0
              ? (addLot.stepFourHandler(picture, certificate),
                myLots.goLots(toJS(addLot)),
                addLot.clearState(),
                Alert.alert(
                  I18n.t('CreateLot.StepFour.Notification.titleSuccess'),
                  I18n.t('CreateLot.StepFour.Notification.bodySuccess')
                ),
                navigation.navigate('MyLots', { screen: 'MyLotsAll' }))
              : Alert.alert(
                  I18n.t('CreateLot.StepFour.Notification.titleError'),
                  I18n.t('CreateLot.StepFour.Notification.bodyError')
                )
          }}
          customStyles={{
            backgroundColor: '#FFCE45',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FFCE45',
            marginTop: 25,
            flex: 4,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('CreateLot.StepFour.finishBtn')}
        </AccentButton>
      </View>
    </View>
  )
}

export default AddLotStepFourForm

const styles = ScaledSheet.create({
  container: {},
  message: {
    flexDirection: 'row',
    marginTop: '40@ms',
  },
  imagesContainer: {
    marginTop: '12@ms',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageWrap: {
    position: 'relative',
    width: '100@ms',
    height: '100@ms',
  },
  image: {
    width: '100@ms',
    height: '100@ms',
  },
  imageTrashCan: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF8C8C',
    width: '25@ms',
    height: '25@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exclamation: {
    marginRight: '10@ms',
    width: '32@ms',
    height: '32@ms',
    backgroundColor: '#FFCE45',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '30@ms',
  },
})
