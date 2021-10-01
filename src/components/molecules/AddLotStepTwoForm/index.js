import React, { useState, useContext } from 'react'
import { View, Alert, KeyboardAvoidingView } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { AccentButton } from 'atoms/Buttons'
import I18n from 'I18n'
import { H, P } from 'atoms/TextElements'
import { useNavigation } from '@react-navigation/native'
import InputScrollView from 'react-native-input-scroll-view'
import { AppContext } from 'context/App'
import { toJS } from 'mobx'
import VolumeControl from 'atoms/VolumeControl'

const AddLotStepTwoForm = () => {
  const {
    store: { addLot },
  } = useContext(AppContext)
  const navigation = useNavigation()
  const [volumeMin, setVolumeMin] = useState(addLot.volMin)
  const [volumeMax, setVolumeMax] = useState(addLot.volMax)
  return (
    <>
      <KeyboardAvoidingView
        keyboardOffset={Platform.OS === 'ios' ? 100 : 40}
        contentContainerStyle={styles.container}
      >
        <View style={styles.content}>
          <H type={'h2'}>{I18n.t('CreateLot.StepTwo.title')}</H>
          <P textSize="13@ms" textColor="#242E29" marginT="15@ms">
            {I18n.t('CreateLot.StepTwo.minVolumeTitle')}
          </P>
          <VolumeControl
            id={1}
            value={volumeMin}
            setVolume={setVolumeMin}
            volMin={volumeMin}
            volMax={volumeMax}
          />
          <P textSize="13@ms" textColor="#242E29" marginT="20@ms">
            {I18n.t('CreateLot.StepTwo.maxVolumeTitle')}
          </P>
          <VolumeControl
            id={2}
            value={volumeMax}
            setVolume={setVolumeMax}
            volMin={volumeMin}
            volMax={volumeMax}
            setMin={setVolumeMin}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.navBtn}>
        <AccentButton
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
          {I18n.t('Auth.Registration.stepTwo.prevBtn')}
        </AccentButton>
        <AccentButton
          onPress={() => {
            volumeMin && volumeMax
              ? (navigation.navigate('AddLotStepThree'),
                addLot.stepTwoHandler(volumeMin, volumeMax))
              : Alert.alert(
                  I18n.t('CreateLot.StepTwo.alert.title'),
                  I18n.t('CreateLot.StepTwo.alert.body'),
                  [{ text: 'OK', onPress: () => {} }]
                )
          }}
          customStyles={{
            backgroundColor: '#FFCE45',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#FFCE45',
            marginTop: 25,
            flex: 1,
            alignSelf: 'flex-end',
          }}
          customeTextStyles={{ color: '#242E29' }}
        >
          {I18n.t('Auth.Registration.stepTwo.nextBtn')}
        </AccentButton>
      </View>
    </>
  )
}

export default AddLotStepTwoForm

const styles = ScaledSheet.create({
  content: {
    width: '100%',
    marginTop: '80@ms',
  },

  navBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: '20@ms',
  },
})
