import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { toJS } from 'mobx'
import BuyingLotImage from 'atoms/BuyingLotImage'
import { ScrollView } from 'react-native-gesture-handler'
import { P, H } from 'atoms/TextElements'
import Dash from 'react-native-dash'
import I18n from 'I18n'
import PhoneLotCard from 'organisms/Cards/PhoneLotCard'
import { AccentButton } from 'atoms/Buttons'
import { AppContext } from 'context/App'
import { BlurView } from '@react-native-community/blur'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ArrowRight from 'assets/ArrowRightMsg'

const LotReply = ({ route }) => {
  const item = toJS(route?.params)
  const [modal, setModal] = useState(false)
  const [comment, setComment] = useState('')
  const {
    store: { auth },
    services: { dates },
  } = useContext(AppContext)
  const buyer = auth.userRole == 1 ? true : false
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 125 }}
        alwaysBounceVertical={false}
      >
        <View style={styles.topWrap}>
          <BuyingLotImage
            customImgStyles={{ borderRadius: 10 }}
            image={item.fullImage}
            item={item}
          />
          <H customStyles={{ marginTop: 15 }} type="h1" textWeight="500">
            {item.title}
          </H>
          <P
            marginT="5@ms"
            textDefaultPadding={false}
            textStyle="italic"
            textWeight="bold"
            textSize="22@ms"
            textColor="#00A944"
          >
            {item.price * item.buyerVolume} ₸
          </P>
          <View style={{ marginTop: 15, marginBottom: 5 }}>
            <View style={styles.listWrap}>
              <P textSize="13@ms">
                {I18n.t('SellerScreens.MainAddLot.requestWeight')}
              </P>
              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles.dashLine}
              />
              <P textSize="14@ms" textColor="#242E29">
                {item.buyerVolume} {I18n.t('SelectedCurrency.item')}
              </P>
            </View>
            <View style={styles.listWrap}>
              <P textSize="13@ms">
                {I18n.t('SellerScreens.MainAddLot.requestPricePerKilo')}
              </P>
              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles.dashLine}
              />
              <P textSize="14@ms" textColor="#242E29">
                {item.price} ₸
              </P>
            </View>
            <View style={styles.listWrap}>
              <P textSize="13@ms">
                {I18n.t('SellerScreens.MainAddLot.requestDate')}
              </P>

              <Dash
                dashLength={2}
                dashColor="rgba(0,0,0,0.3)"
                style={styles.dashLine}
              />
              <P textSize="14@ms" textColor="#242E29">
                {dates.getFormat(item.date, 'DD MMMM YYYY')}
              </P>
            </View>
          </View>
          <PhoneLotCard item={item} buyer={buyer} />
          <P marginT="7@ms" textColor="#6d6d6d" textSize="13@ms">
            {I18n.t('LotReply.underPhoneCardTitleOne')}{' '}
            {buyer ? I18n.t('LotReply.seller') : I18n.t('LotReply.buyer')}{' '}
            {I18n.t('LotReply.underPhoneCardTitleTwo')}
          </P>
        </View>
        <View style={styles.bottomWrap}>
          <P textColor="#00A944" textSize="14@ms">
            {buyer
              ? I18n.t('LotReply.yourComment')
              : I18n.t('LotReply.buyerComment')}
            , {item.time}
          </P>
          <View style={styles.buyerMessage}>
            <P textColor="#242E29" textSize="14@ms">
              {item.commentary}
            </P>
          </View>
          {item.replyStatus === 'active' && item?.commentary && (
            <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
              <P textColor="#242E29" textSize="14@ms">
                {buyer ? 'Поставщик' : 'Ваш ответ'}, {item.time}
              </P>
              <View style={styles.sellerMessage}>
                <P textColor="#242E29" textSize="14@ms">
                  {item.commentary}
                </P>
              </View>
            </View>
          )}
          {auth.userRole == 0 && item.replyStatus === 'review' && (
            <>
              <AccentButton
                marginT="35@ms"
                onPress={() => setModal(true)}
                textColor="#242E29"
              >
                {I18n.t('LotReply.acceptReplyBtn')}
              </AccentButton>
              <AccentButton
                customStyles={{
                  marginTop: 10,
                  backgroundColor: 'rgba(255, 97, 97, 0.2);',
                }}
                textColor="#FF6161"
                onPress={() => alert('Not implemented yet')}
              >
                {I18n.t('LotReply.declineReplyBtn')}
              </AccentButton>
            </>
          )}
        </View>
        {modal && (
          <Modal animationType="slide" transparent={true} visible={modal}>
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
              <BlurView
                style={styles.modalContainer}
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor="#000"
              >
                <KeyboardAwareScrollView
                  contentContainerStyle={styles.modalWrap}
                >
                  <View style={styles.modalInnerWrap}>
                    <H textWeight="500" textAlign="center" type="h1">
                      {I18n.t('LotReply.Modal.title')}
                    </H>
                    <View style={{ marginTop: 15 }}>
                      <PhoneLotCard item={item} buyer={buyer} modal={true} />
                      <P marginT="20@ms" textColor="#00A944" textSize="14@ms">
                        {buyer
                          ? I18n.t('LotReply.yourComment')
                          : I18n.t('LotReply.buyerComment')}
                        , {item.time}
                      </P>
                      <View
                        style={[
                          styles.buyerMessage,
                          { backgroundColor: '#EDEDED' },
                        ]}
                      >
                        <P textColor="#242E29" textSize="14@ms">
                          {item.commentary}
                        </P>
                      </View>
                      <View
                        style={{
                          position: 'relative',
                          marginTop: 27,
                          marginBottom: 10,
                        }}
                      >
                        <TextInput
                          style={styles.modalInput}
                          placeholderTextColor="#6D6D6D"
                          value={comment}
                          onChangeText={(val) => setComment(val)}
                          placeholder={I18n.t(
                            'LotReply.Modal.sellerPlaceholder'
                          )}
                        />
                        <TouchableOpacity style={styles.modalSendBtn}>
                          <ArrowRight />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </KeyboardAwareScrollView>
              </BlurView>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </ScrollView>
    </View>
  )
}

export default LotReply

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  topWrap: {
    paddingHorizontal: '10@ms',
    paddingBottom: '28@ms',
    paddingTop: '15@ms',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20@ms',
    borderBottomRightRadius: '20@ms',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.22,
    elevation: 3,
  },
  bottomWrap: { height: '100%', marginTop: '20@ms', padding: 10 },
  listWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '7@ms',
  },
  dashLine: {
    flex: 4,
    height: 1,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'flex-end',
    marginBottom: '3@ms',
  },
  buyerMessage: {
    borderRadius: '15@ms',
    borderBottomLeftRadius: 0,
    width: '65%',
    backgroundColor: '#fff',
    padding: '15@ms',
    marginTop: '8@ms',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 3,
  },
  sellerMessage: {
    width: '65%',
    padding: '15@ms',
    borderRadius: '15@ms',
    marginTop: '8@ms',
    borderBottomRightRadius: 0,
    backgroundColor: '#FFFCE1',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerWrap: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  modalInput: {
    zIndex: 1,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DFDFDF',
  },
  modalSendBtn: {
    position: 'absolute',
    top: 0,
    right: 10,
    zIndex: 10,
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
