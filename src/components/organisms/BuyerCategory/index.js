import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import BuyerSearchFilter from 'molecules/BuyerSearchFilter'
import { AppContext } from 'context/App'
import ProductItemCart from 'molecules/ProductItemCart'
import ProductItemTop from 'molecules/ProductItemTop'
import { P } from 'atoms/TextElements'
import { AccentButton } from 'atoms/Buttons'
import I18n from 'I18n'
import SellerNoLots from 'molecules/SellerNoLots'
import { CopilotStep, walkthroughable } from 'react-native-copilot'

const CopilotView = walkthroughable(View)

const BuyerCategory = ({ route }) => {
  const {
    store: { myLots, tutorial },
    services: { lots, wordEnding },
  } = useContext(AppContext)
  const [active, setActive] = useState(0)
  const filterItem = useRef()

  const MockLots = lots.getMyLots()
  const [filterItems, setFilterItems] = useState([])

  function filterLots(value) {
    return setFilterItems(MockLots?.filter((item) => item.category === value))
  }
  useLayoutEffect(() => {
    tutorial.setSearchItem(MockLots[1])
    filterLots(MockLots[0].category)
  }, [])

  useEffect(() => {
    if (route.params.activeId) {
      const index = MockLots.findIndex(
        (item) => item.id === route.params.activeId
      )

      if (index !== -1) {
        setActive(index)
        handleFilterScroll()
        filterLots(MockLots[index].category)
      }
    }
  }, [route])

  //Scroll the filter to user selection
  const handleFilterScroll = () => {
    setTimeout(() => {
      filterItem.current.scrollToOffset({
        offset: myLots.scrollOffset,
        animated: false,
      })
    }, 0)
  }

  const FilterMenu = useCallback(
    ({ item, index }) => {
      {
        return (
          <TouchableOpacity
            onPress={() => {
              setActive(index), handleFilterScroll(), filterLots(item.category)
            }}
            style={[
              styles.filterBar,
              {
                borderWidth: active == index ? 0 : 1,
                backgroundColor:
                  active == index
                    ? route.params.outlineColor
                    : route.params.bgColor,
                borderColor: route.params.outlineColor,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                color: active == index ? '#ffffff' : route.params.outlineColor,
              }}
            >
              {item.category}
            </Text>
          </TouchableOpacity>
        )
      }
    },
    [active, filterItems]
  )
  return (
    <View style={[styles.container, { backgroundColor: route.params.bgColor }]}>
      <FlatList
        contentContainerStyle={{
          height: '100%',
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={filterItems}
        //HEADER
        ListHeaderComponent={() => {
          return (
            <>
              <BuyerSearchFilter
                value={filterItems}
                setValue={filterLots}
                customStyles={{ marginTop: 25 }}
              />
              {MockLots?.length > 0 ? (
                <FlatList
                  ref={filterItem}
                  onScroll={(e) => {
                    myLots.setScrollOffset(e.nativeEvent.contentOffset.x)
                  }}
                  contentContainerStyle={{
                    paddingRight: 25,
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={MockLots}
                  renderItem={({ item, index }) => (
                    <FilterMenu item={item} index={index} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
              ) : (
                <SellerNoLots />
              )}
              <View style={styles.title}>
                <P textSize="16@mvs" textColor="#242E29">
                  {I18n.t('BuyerScreens.Categories.lotTitlePartOne')}{' '}
                  {filterItems?.length}{' '}
                  {wordEnding.wordEnd(filterItems?.length)}
                </P>
                <TouchableOpacity>
                  <P textColor="#00A944" textSize="13@mvs">
                    {I18n.t('BuyerScreens.Applications.popularItemFilter')}
                  </P>
                </TouchableOpacity>
              </View>
            </>
          )
        }}
        //MIDDLE
        renderItem={({ item, index }) => {
          const isOdd = (num) => num % 2
          const Product = (
            <CopilotView
              style={[
                styles.containerCard,
                { marginRight: !isOdd(index) ? 8 : 0 },
              ]}
            >
              <ProductItemTop item={item} buyer={true} />
              <View style={styles.innerContainer}>
                <View>
                  <P textSize="9@mvs">{item.category}</P>
                  <P textSize="12@mvs" textColor="#242E29" textWeight="500">
                    {item.title}
                  </P>
                </View>
                <ProductItemCart item={item} index={index} buyer={true} />
              </View>
            </CopilotView>
          )

          return item.id === tutorial.searchItem.id ? (
            <CopilotStep
              text={I18n.t('Tutorial.buyer.sixth.title')}
              order={6}
              name="6"
            >
              {Product}
            </CopilotStep>
          ) : (
            Product
          )
        }}
        //FOOTER
        ListFooterComponent={() => {
          return (
            MockLots?.length > 0 && (
              <View style={{ paddingBottom: 125, marginTop: 25 }}>
                <AccentButton
                  onPress={() => {
                    Alert.alert('Notification', 'To be continued...')
                  }}
                  customeTextStyles={{ color: '#242E29' }}
                >
                  {I18n.t('BuyerScreens.Categories.loadMoreBtn')}
                </AccentButton>
              </View>
            )
          )
        }}
      />
    </View>
  )
}

export default BuyerCategory

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@ms',
  },
  containerCard: {
    flex: 1,
    marginTop: '10@ms',
    marginBottom: '10@ms',
    maxWidth: '50%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 10,
  },

  title: {
    marginTop: '20@mvs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    padding: '10@mvs',
  },
  header: {
    minWidth: '40%',
    maxWidth: '60%',
    marginBottom: '20@mvs',
  },
  filterBar: {
    borderWidth: 1,
    marginTop: '15@ms',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: '5@ms',
    borderRadius: '5@ms',
  },
})
