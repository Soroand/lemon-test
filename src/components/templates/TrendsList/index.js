import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FlatList, View } from 'react-native'
import I18n from 'I18n'
import SelectDropdown from 'atoms/SelectDropdown'
import SortButton from 'atoms/Buttons/SortButton'
import { observer } from 'mobx-react'
import { AppContext } from 'context/App'
import { toJS } from 'mobx'
import FilterMenu from 'atoms/Buttons/FilterMenu'
import TrendCard from 'organisms/Cards/TrendCard'

const TrendsList = observer(() => {
  const {
    store: { trendsItems },
    services: { trends },
  } = useContext(AppContext)
  const [active, setActive] = useState(1)
  const scrollRef = useRef()
  const activeFilter = toJS(trendsItems.activeFilter)

  // Filter items
  const topMenu = [
    { id: 1, title: I18n.t('SellerScreens.Trends.filterItems.myLots') },
    { id: 2, title: I18n.t('SellerScreens.Trends.filterItems.market') },
  ]

  useEffect(() => {
    trendsItems.updateTrends(
      trends.getTrends(active === 1 ? 'myLots' : 'marketLots')
    )

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
      />

      <FlatList
        ref={scrollRef}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View style={styles.filter}>
              {active === 2 && (
                <SelectDropdown
                  customStyle={styles.dropdown}
                  data={toJS(trendsItems.filters.countries)}
                  value={activeFilter.country}
                  setValue={(val) =>
                    trendsItems.setActiveFilter('country', val)
                  }
                  translate
                />
              )}

              <SelectDropdown
                customStyle={styles.dropdown}
                data={toJS(trendsItems.filters.category)}
                value={activeFilter.category}
                setValue={(val) => trendsItems.setActiveFilter('category', val)}
              />

              <SelectDropdown
                customStyle={styles.dropdown}
                data={toJS(trendsItems.filters.subCategory)}
                value={activeFilter.subCategory}
                setValue={(val) =>
                  trendsItems.setActiveFilter('subCategory', val)
                }
              />
            </View>

            {active === 1 && (
              <View style={styles.sort}>
                <SortButton
                  title={I18n.t(
                    'SellerScreens.Trends.sortItems.highestIncomeTitle'
                  )}
                />

                <SortButton
                  title={I18n.t('SellerScreens.Trends.sortItems.byTitle')}
                />
              </View>
            )}
          </>
        )}
        ListFooterComponent={() => <View style={{ paddingBottom: 120 }} />}
        style={{ flex: 1 }}
        contentContainerStyle={styles.content}
        data={toJS(trendsItems.list)}
        renderItem={({ item }) => <TrendCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
})

export default TrendsList

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  tabs: {
    paddingTop: '10@ms',
    paddingHorizontal: '10@ms',
    backgroundColor: '#fff',
    paddingBottom: 9,
  },
  filter: {
    backgroundColor: '#fff',
    paddingHorizontal: '10@ms',
    paddingBottom: '17@ms',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: '19@ms',
    marginHorizontal: '-10@ms',
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
  },
  sort: {
    marginBottom: '15@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
