import React, { useContext } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import NotificationCard from 'molecules/NotificationCard'
import { observer } from 'mobx-react'
import { AppContext } from 'context/App'
import { toJS } from 'mobx'

const NotificationsList = observer(() => {
  const {
    store: { notificationsItems },
  } = useContext(AppContext)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: '100%' }}>
        <FlatList
          contentContainerStyle={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={toJS(notificationsItems.list)}
          renderItem={({ item, index }) => {
            const isLast = (num) =>
              num === toJS(notificationsItems.list).length - 1
            return (
              <NotificationCard
                title={item.title}
                date={item.date}
                text={item.text}
                type={item.type}
                product={item.product}
                userName={item.userName}
                customStyles={{ marginBottom: isLast(index) ? 0 : 10 }}
              />
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
})

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: '10@ms',
    paddingTop: '10@mvs',
  },
})

export default NotificationsList
