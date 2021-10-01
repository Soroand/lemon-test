import React, {
  useContext,
  useState,
  useLayoutEffect,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from 'context/App'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import ProductItemCart from 'molecules/ProductItemCart'
import ProductItemTop from 'molecules/ProductItemTop'
import { P, H } from 'atoms/TextElements'
import { hasNotch } from 'react-native-device-info'
import { AccentButton } from 'atoms/Buttons'
import { WindowWidth, ScreenWidth } from 'atoms/Dimensions'
import I18n from 'I18n'
import { ScrollView } from 'react-native-gesture-handler'

const SellerMyLots = observer(() => {
  const navigation = useNavigation()
  const [filteredLots, setFilteredLots] = useState([])
  const {
    store: { myLots },
    services: { myLotFilter },
  } = useContext(AppContext)
  const [active, setActive] = useState(0)
  const filterItem = useRef()

  // Filter items
  const topMenu = [
    { id: 1, title: I18n.t('MyLots.filterItems.all') },
    { id: 2, title: I18n.t('MyLots.filterItems.active') },
    { id: 3, title: I18n.t('MyLots.filterItems.pending') },
    { id: 4, title: I18n.t('MyLots.filterItems.denied') },
  ]

  //FILTERING LOTS IF TOP BAR FILTER IS CLICKED
  useLayoutEffect(() => {
    setFilteredLots(myLotFilter.filterLots(active, myLots))
  }, [active, myLots.maLotsBro])

  //Scroll to position of the button pressed in filter flatList
  const handleFilterScroll = () => {
    setTimeout(() => {
      filterItem.current.scrollToOffset({
        offset: myLots.scrollOffset,
        animated: false,
      })
    }, 0)
  }

  //Re-renderring filter only when active index changed
  const FilterMenu = useCallback(
    ({ item, index }) => {
      {
        return (
          <TouchableOpacity
            onPress={() => {
              setActive(index), handleFilterScroll()
            }}
            style={[
              styles.filterBar,
              {
                borderWidth: active == index ? 0 : 1,
                backgroundColor: active == index ? '#00A944' : '#ffffff',
                borderLeftWidth: index !== 0 ? 0 : 1,
                borderTopLeftRadius: index == 0 ? 10 : 0,
                borderBottomLeftRadius: index == 0 ? 10 : 0,
                borderTopRightRadius: index == topMenu?.length - 1 ? 10 : 0,
                borderBottomRightRadius: index == topMenu?.length - 1 ? 10 : 0,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                color: active == index ? '#ffffff' : '#242E29',
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }
    },
    [active]
  )

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '100%' }}>
        {myLots?.length > 0 ? (
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
                    onPress={() => {}}
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
              return (
                <View
                  style={{
                    paddingBottom: 85,
                  }}
                />
              )
            }}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ) : (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => {
                return (
                  <FlatList
                    ref={filterItem}
                    onScroll={(e) => {
                      myLots.setScrollOffset(e.nativeEvent.contentOffset.x)
                    }}
                    contentContainerStyle={{
                      marginLeft: ScreenWidth > 400 ? 7 : 0,
                      paddingRight: 25,
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={topMenu}
                    renderItem={({ item, index }) => (
                      <FilterMenu item={item} index={index} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                  />
                )
              }}
              ListFooterComponent={() => {
                return <View style={{ paddingBottom: 85 }}></View>
              }}
              numColumns={2}
              data={toJS(filteredLots)}
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
                        <P
                          textSize="12@mvs"
                          textColor="#242E29"
                          textWeight="500"
                        >
                          {item.title}
                        </P>
                      </View>
                      <ProductItemCart
                        item={item}
                        index={index}
                        seller={true}
                      />
                    </View>
                  </View>
                )
              }}
              keyExtractor={(item) => item.id}
            />
            <View
              style={{
                paddingBottom: 85,
              }}
            >
              <AccentButton
                onPress={() => {
                  navigation.navigate('AddLotStepOne')
                }}
                customeTextStyles={{ color: '#242E29' }}
              >
                {I18n.t('MyLots.addLotBtn')}
              </AccentButton>
            </View>
          </>
        )}
      </SafeAreaView>
    </View>
  )
})

export default SellerMyLots

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@mvs',
    paddingVertical: hasNotch() ? 10 : 0,
    backgroundColor: '#FFFFFF',
  },
  containerCard: {
    flex: 1,
    marginTop: '20@ms',
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
  filterBar: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: '30@ms',
    paddingVertical: 10,
  },
})
