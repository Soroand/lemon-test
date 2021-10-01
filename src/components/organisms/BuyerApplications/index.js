import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import { ScaledSheet, verticalScale } from 'react-native-size-matters'
import BuyerSearchFilter from 'molecules/BuyerSearchFilter'
import BuyerProductCategory from 'molecules/BuyerProductCategory'
import { H, P } from 'atoms/TextElements'
import { hasNotch } from 'react-native-device-info'
import Header from 'molecules/Header'
import { AppContext } from 'context/App'
import ProductItemCart from 'molecules/ProductItemCart'
import ProductItemTop from 'molecules/ProductItemTop'
import I18n from 'I18n'
import { observer } from 'mobx-react'
import { copilot, CopilotStep, walkthroughable } from 'react-native-copilot'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { toJS } from 'mobx'
import DropdownSearch from 'molecules/DropdownSearch'
import { useNavigation } from '@react-navigation/native'

const CopilotView = walkthroughable(View)

const BuyerApplications = observer(() => {
  const {
    store: { popularItems, tutorial },
    services: { wordEnding },
  } = useContext(AppContext)
  const insets = useSafeAreaInsets()
  const [search, setSearch] = useState('')
  const [searchDrop, setSearchDrop] = useState(false)
  const navigation = useNavigation()

  // SEARCH BAR LOGIC
  const searchedCategories = useCallback(() => {
    const rawItems = toJS(popularItems.popular).filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    )

    if (rawItems.length !== 0) {
      return rawItems
    } else {
      return toJS(popularItems.popular).filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    }
  }, [search])

  // items to render on the screen
  const itemsToIterate = searchedCategories()

  // ---- categories are unique
  const uniqueCategory = useCallback(() => {
    const extractCategory = itemsToIterate.map((item) => item.category)
    const uniqueCategory = [...new Set(extractCategory)]
    return uniqueCategory
  }, [search])

  // TUTORIAL
  useEffect(() => {
    if (tutorial.tutorialEnded) {
      tutorial.clear()
    }
  }, [tutorial.tutorialEnded])

  //Clear search drop down when screen changes
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSearchDrop(false)
    })

    return unsubscribe
  }, [navigation])

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: '#FFFFFF',
        },
      ]}
    >
      <ScrollView
        scrollEnabled={searchDrop ? false : true}
        nestedScrollEnabled={searchDrop ? false : true}
        showsVerticalScrollIndicator={false}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <TouchableWithoutFeedback
          style={{ width: '100%', height: '100%' }}
          onPress={() => setSearchDrop(false)}
        >
          <View>
            <View style={{ zIndex: 2, elevation: 2 }}>
              <Header />
              <View style={styles.header}>
                <H type={'h3'}>
                  {I18n.t('BuyerScreens.Applications.pageTitle')}
                </H>
              </View>

              <CopilotStep text="" order={1} name="1">
                <CopilotView
                  style={{
                    position: 'absolute',
                    right: -30,
                    top: verticalScale(392),
                    opacity: 0,
                  }}
                />
              </CopilotStep>

              {/* BUYER SEARCH FILTER */}
              <CopilotStep
                text={I18n.t('Tutorial.buyer.second.title')}
                order={2}
                name="2"
              >
                <BuyerSearchFilter
                  search={search}
                  setSearch={setSearch}
                  activeStep={tutorial.activeStep}
                  searchDrop={searchDrop}
                  setSearchDrop={setSearchDrop}
                  searchedCategories={searchedCategories}
                />
              </CopilotStep>
              {/* DROPDOWN SEARCH LIST */}
              {searchDrop && (
                <DropdownSearch
                  setSearch={setSearch}
                  searchedCategories={itemsToIterate}
                  searchDrop={searchDrop}
                  setSearchDrop={setSearchDrop}
                  uniqueCategory={uniqueCategory}
                />
              )}

              {/* BUYER CATEGORY */}
              <CopilotStep
                text={I18n.t('Tutorial.buyer.third.title')}
                order={3}
                name="3"
              >
                <BuyerProductCategory />
              </CopilotStep>

              <View style={styles.title}>
                {!search ? (
                  <P textSize="16@mvs" textColor="#242E29">
                    {I18n.t('BuyerScreens.Applications.popularItemTitle')}
                  </P>
                ) : (
                  <View
                    style={{
                      maxWidth: '50%',
                      flexDirection: 'row',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                    }}
                  >
                    <P
                      customStyles={{ marginRight: 5 }}
                      textSize="16@mvs"
                      textColor="#242E29"
                    >
                      {search}
                    </P>
                    <P textSize="13@ms">
                      {itemsToIterate?.length}{' '}
                      {I18n.t('BuyerScreens.Applications.SearchBar.result')}
                      {wordEnding.wordEndSearch(itemsToIterate?.length)}
                    </P>
                  </View>
                )}
                <TouchableOpacity>
                  <P textColor="#00A944" textSize="13@mvs">
                    {I18n.t('BuyerScreens.Applications.popularItemFilter')}
                  </P>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              {itemsToIterate.map((item, index) => {
                const Product = (
                  <CopilotView
                    key={item.id.toString()}
                    style={[styles.containerCard]}
                  >
                    <ProductItemTop item={item} buyer={true} />
                    <View style={styles.innerContainer}>
                      <View>
                        <P textSize="9@ms">{item.category}</P>
                        <P
                          textSize="12@ms"
                          textColor="#242E29"
                          textWeight="500"
                        >
                          {item.title}
                        </P>
                      </View>
                      <ProductItemCart item={item} index={index} buyer={true} />
                    </View>
                  </CopilotView>
                )

                return index === 0 ? (
                  <CopilotStep
                    key={item.id.toString()}
                    text={I18n.t('Tutorial.buyer.fourth.title')}
                    order={4}
                    name="4"
                  >
                    {Product}
                  </CopilotStep>
                ) : (
                  Product
                )
              })}
            </View>
            <View style={{ paddingBottom: 85 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
})

export default BuyerApplications

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@mvs',
    paddingVertical: hasNotch() ? 10 : 0,
  },
  containerCard: {
    marginTop: '10@ms',
    width: '48%',
  },
  header: {
    minWidth: '40%',
    maxWidth: '60%',
    marginBottom: '20@mvs',
  },
  title: {
    marginTop: '25@ms',
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

  card: {
    borderRadius: 10,
    backgroundColor: '#FFE402',
    width: 230,
    height: 168,

    position: 'absolute',
    right: 0,
  },
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 10,
    paddingTop: 165,
  },
})
