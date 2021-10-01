import React, { useContext } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import { FlatList, SafeAreaView, View } from 'react-native'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { hasNotch } from 'react-native-device-info'
import FavoriteCard from 'organisms/Cards/FavoriteCard'

const FavoritesList = observer(() => {
  const {
    store: { favoriteItems },
  } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '100%' }}>
        <FlatList
          contentContainerStyle={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={toJS(favoriteItems.favorite)}
          renderItem={({ item, index }) => {
            const isOdd = (num) => num % 2
            return (
              <FavoriteCard
                customStyle={{ marginRight: !isOdd(index) ? 8 : 0 }}
                index={index}
                item={item}
              />
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
})

export default FavoritesList

const styles = ScaledSheet.create({
  flatListStyle: {
    paddingBottom: 85,
  },
  container: {
    flex: 1,
    paddingHorizontal: '10@mvs',
    paddingVertical: hasNotch() ? 10 : 0,
    backgroundColor: '#EEE',
  },
})
