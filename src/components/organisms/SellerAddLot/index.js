import React, { useContext } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Header from 'molecules/Header'
import { hasNotch } from 'react-native-device-info'
import { AppContext } from 'context/App'
import ProductItemCart from 'molecules/ProductItemCart'
import ProductItemTop from 'molecules/ProductItemTop'
import { P, H } from 'atoms/TextElements'
import I18n from 'I18n'
import { AccentButton } from 'atoms/Buttons'
import SellerMainSvg from 'assets/SellerMainBtnSvg'
import SellerNoLots from 'molecules/SellerNoLots'
import SellerLotRequests from 'molecules/SellerLotRequests'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

const SellerAddLot = observer(() => {
  const navigation = useNavigation()
  const {
    store: { lotRequests, myLots },
  } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {myLots?.maLotsBro?.length === 0 &&
        lotRequests.requests.length === 0 ? (
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <View>
                  <Header />
                  <View style={styles.header}>
                    <H type={'h3'}>
                      {I18n.t('BuyerScreens.Applications.pageTitle')}
                    </H>
                  </View>
                  <AccentButton
                    onPress={() => navigation.navigate('AddLotStepOne')}
                    customeTextStyles={{ color: '#242E29' }}
                    icon={<SellerMainSvg style={{ marginRight: 10 }} />}
                  >
                    {I18n.t('SellerScreens.MainAddLot.addButton')}
                  </AccentButton>
                  <SellerNoLots />
                </View>
              )
            }}
            ListFooterComponent={() => {
              return <View style={{ paddingBottom: 85 }} />
            }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <View>
                  <Header />
                  <View style={styles.header}>
                    <H type={'h3'}>
                      {I18n.t('BuyerScreens.Applications.pageTitle')}
                    </H>
                  </View>
                  <AccentButton
                    onPress={() => navigation.navigate('AddLotStepOne')}
                    customeTextStyles={{ color: '#242E29' }}
                    icon={<SellerMainSvg style={{ marginRight: 10 }} />}
                  >
                    {I18n.t('SellerScreens.MainAddLot.addButton')}
                  </AccentButton>
                  <H
                    customStyles={{ marginBottom: 15 }}
                    textColor="#1A422F"
                    marginT="25@ms"
                    type="h3"
                  >
                    {I18n.t('SellerScreens.MainAddLot.requestsTitle')}{' '}
                    <P textColor="#00A944" textSize="20@mvs">
                      {lotRequests.requests.length}
                    </P>
                  </H>
                  {lotRequests.requests.map((item) => {
                    return (
                      <SellerLotRequests
                        seller={true}
                        key={item.id}
                        state={item.status}
                        item={item}
                        sellerMainPage={true}
                      />
                    )
                  })}
                  <H textColor="#1A422F" marginT="15@ms" type="h3">
                    {I18n.t('SellerScreens.MainAddLot.myLotsTitle')}{' '}
                    <P textColor="#00A944" textSize="20@mvs">
                      {myLots.maLotsBro.length}
                    </P>
                  </H>
                </View>
              )
            }}
            ListFooterComponent={() => {
              return <View style={{ paddingBottom: 85 }} />
            }}
            style={{
              height: '100%',
              width: '100%',
            }}
            numColumns={2}
            data={toJS(myLots.maLotsBro)}
            renderItem={({ item, index }) => {
              const isOdd = (num) => num % 2
              return (
                <View
                  style={[
                    styles.containerCard,
                    { marginRight: !isOdd(index) ? 8 : 0 },
                  ]}
                >
                  <ProductItemTop item={item} seller={true} />
                  <View style={styles.innerContainer}>
                    <View>
                      <P textSize="9@mvs">{item.category}</P>
                      <P textSize="12@mvs" textColor="#242E29" textWeight="500">
                        {item.title}
                      </P>
                    </View>
                    <ProductItemCart item={item} index={index} seller={true} />
                  </View>
                </View>
              )
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </SafeAreaView>
    </View>
  )
})

export default SellerAddLot

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@mvs',
    paddingVertical: hasNotch() ? 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  containerCard: {
    flex: 1,
    marginTop: 12,
    maxWidth: '50%',
  },

  title: {
    marginTop: '20@mvs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#EEEEEE',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: '10@mvs',
  },
  header: {
    minWidth: '40%',
    maxWidth: '60%',
    marginBottom: '20@mvs',
  },
})
