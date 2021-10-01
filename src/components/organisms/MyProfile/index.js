import React, { useContext } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import ProfileInfoCard from 'molecules/ProfileInfoCard'
import ProfileSubscription from 'atoms/ProfileSubscription'
import ProfileNotComplete from 'atoms/ProfileNotComplete'
import ProfileButtons from 'molecules/ProfileButtons'
import { AppContext } from 'context/App'
import { WindowHeight } from 'atoms/Dimensions'
import { observer } from 'mobx-react'
import I18n from 'I18n'

const MyProfile = observer(() => {
  const {
    store: { auth, profile },
  } = useContext(AppContext)
  const role = auth?.userRole

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ProfileInfoCard />
      {role == 0 && <ProfileSubscription />}

      {role == 0 && profile?.subscription === null && (
        <ProfileNotComplete>
          {I18n.t('Profile.MainScreen.seller.warningTwo')}
        </ProfileNotComplete>
      )}

      <ProfileButtons role={role == 0 ? 0 : 1} active={profile.active} />

      <View style={styles.empty} />
    </ScrollView>
  )
})

export default MyProfile

const styles = ScaledSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: '10@ms',
  },
  empty: {
    paddingBottom:
      WindowHeight > 750 ? '110@ms' : WindowHeight > 700 ? '100@ms' : '80@ms',
  },
})
