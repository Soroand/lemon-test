import React from 'react'
import { View, Modal, TouchableWithoutFeedback } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P, H } from 'atoms/TextElements'
import { AccentButton } from 'atoms/Buttons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from 'I18n'

const ExitModal = ({ modalVisible, setModalVisible, navigation, auth }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={{ alignItems: 'center' }}>
              <H textWeight="500" marginT="35@ms" type="h2">
                {I18n.t('ExitModal.modalTitle')}
              </H>
              <View
                style={{
                  width: '70%',
                  marginTop: 15,
                }}
              >
                <P textColor="#242E29" textAlign="center">
                  {I18n.t('ExitModal.modalBody')}
                </P>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <AccentButton
                buttonText={{ fontSize: '25@ms' }}
                onPress={async () => {
                  await AsyncStorage.clear(),
                    auth.clearAuth(),
                    navigation.replace('AuthScreens')
                }}
                customStyles={{
                  backgroundColor: '#FFCE45',
                  borderRadius: 10,
                }}
                textColor={'#242E29'}
              >
                {I18n.t('ExitModal.confirm')}
              </AccentButton>
              <AccentButton
                onPress={() => setModalVisible(false)}
                customStyles={{
                  backgroundColor: '#E1E1E1',
                  borderRadius: 10,
                  marginTop: 15,
                  marginBottom: 35,
                }}
                textColor={'#242E29'}
              >
                {I18n.t('ExitModal.cancel')}
              </AccentButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ExitModal

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: '15@ms',
    marginTop: '15@ms',
  },
})
