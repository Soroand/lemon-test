import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FlatList, View } from 'react-native'
import I18n from 'I18n'
import SortButton from 'atoms/Buttons/SortButton'
import { observer } from 'mobx-react'
import { AppContext } from 'context/App'
import { toJS } from 'mobx'
import FilterMenu from 'atoms/Buttons/FilterMenu'
import TextInputField from 'atoms/TextInput'
import SellerLotRequests from 'molecules/SellerLotRequests'
import PhoneLotCard from 'organisms/Cards/PhoneLotCard'

const SellerReplies = observer(() => {
  const {
    store: { myRepliesItems, lotRequests },
    services: { sellerReplies },
  } = useContext(AppContext)

  const filteredItems = lotRequests.requests //myRepliesItems?.items

  const [active, setActive] = useState(1)
  const [search, setSearch] = useState('')
  const scrollRef = useRef()

  // Filter items
  const topMenu = [
    { id: 1, title: I18n.t('SellerScreens.Replies.filterItems.all') },
    { id: 2, title: I18n.t('SellerScreens.Replies.filterItems.completed') },
    { id: 3, title: I18n.t('SellerScreens.Replies.filterItems.underReview') },
    { id: 4, title: I18n.t('SellerScreens.Replies.filterItems.denied') },
  ]

  useEffect(() => {
    myRepliesItems.updateItems(sellerReplies.getReplies())
  }, [])

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollToOffset({ animated: false, offset: 0 })
    }
  }, [active])

  return (
    <View style={styles.container}>
      <FilterMenu
        customStyles={styles.tabs}
        active={active}
        menu={topMenu}
        setActive={setActive}
        scroll
      />

      <View style={styles.filter}>
        <TextInputField
          customStyles={{
            borderWidth: 1,
            borderColor: '#E3E3E3',
            marginTop: 0,
          }}
          type="search"
          placeholder={I18n.t('SellerScreens.Replies.searchFieldPlaceholder')}
          value={() => search}
          onChange={setSearch}
          setValue={() => {}}
        />
      </View>

      <FlatList
        ref={scrollRef}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View style={styles.sort}>
              <SortButton
                title={I18n.t(
                  'SellerScreens.Replies.sortItems.highestIncomeTitle'
                )}
              />

              <SortButton
                title={I18n.t('SellerScreens.Replies.sortItems.byTitle')}
              />
            </View>
          </>
        )}
        ListFooterComponent={() => <View style={{ paddingBottom: 120 }} />}
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        data={toJS(filteredItems).reverse()}
        renderItem={({ item }) => (
          <SellerLotRequests
            item={item}
            seller={true}
            state={item.status}
            marginT="15@ms"
          >
            <PhoneLotCard item={item} sellerScreen={true} />
          </SellerLotRequests>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
})

export default SellerReplies

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  tabs: {
    paddingTop: '10@ms',
    paddingHorizontal: '10@ms',
    backgroundColor: '#fff',
    paddingBottom: '8@ms',
  },
  filter: {
    backgroundColor: '#fff',
    paddingHorizontal: '10@ms',
    paddingBottom: '17@ms',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: '8@ms',
  },
  filterBar: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 20,
    width: '50%',
    height: '36@ms',
    justifyContent: 'center',
  },
  dropdown: { marginTop: '11@ms' },
  content: {
    paddingHorizontal: '10@ms',
    paddingTop: '14@ms',
  },
  sort: {
    marginBottom: '13@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
