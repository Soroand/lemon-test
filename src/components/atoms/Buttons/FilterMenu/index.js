import React, { useCallback, useRef, useContext } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { ScreenWidth } from 'atoms/Dimensions'
import { AppContext } from 'context/App'

const FilterMenu = ({
  menu,
  active,
  setActive,
  customStyles,
  scroll = false,
  onScroll,
}) => {
  const filterItem = useRef()
  const {
    store: { auth },
  } = useContext(AppContext)
  //Scroll to position of the button pressed in filter flatList
  const handleFilterScroll = (index) => {
    filterItem.current.scrollToIndex({
      animated: true,
      index,
      viewPosition: 0.5,
    })
  }

  //Re-renderring filter only when active index changed
  const FilterMenu = useCallback(
    ({ item, index }) => {
      {
        return (
          <TouchableOpacity
            onPress={() => {
              setActive(item.id)
              if (scroll) {
                handleFilterScroll(index)
              }
            }}
            style={[
              styles.filterBar,
              {
                paddingHorizontal: auth?.lang === 'en' ? 35 : 20,
                width: scroll ? undefined : '50%',
                borderWidth: active === item.id ? 0 : 1,
                backgroundColor: active === item.id ? '#00A944' : '#ffffff',
                borderLeftWidth: index !== 0 ? 0 : 1,
                borderTopLeftRadius: index === 0 ? 10 : 0,
                borderBottomLeftRadius: index === 0 ? 10 : 0,
                borderTopRightRadius: index === menu?.length - 1 ? 10 : 0,
                borderBottomRightRadius: index === menu?.length - 1 ? 10 : 0,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                color: active === item.id ? '#ffffff' : '#242E29',
                textAlign: 'center',
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
    <View style={[styles.tabs, customStyles]}>
      {scroll ? (
        <FlatList
          ref={filterItem}
          onScroll={(e) => {
            if (onScroll) {
              onScroll(e)
            }
          }}
          contentContainerStyle={{
            paddingRight: 25,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={menu}
          renderItem={({ item, index }) => (
            <FilterMenu item={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <>
          {menu.map((item, index) => (
            <FilterMenu key={index.toString()} item={item} index={index} />
          ))}
        </>
      )}
    </View>
  )
}

export default FilterMenu

const styles = ScaledSheet.create({
  tabs: {
    flexDirection: 'row',
  },
  filterBar: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    height: '36@ms',
    justifyContent: 'center',
  },
})
