import React, { useContext } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import I18n from 'I18n'
import { AccentButton } from 'atoms/Buttons'
import MyLotPencil from 'assets/MyLotPencil'
import ProfileRating from 'atoms/ProfileRating'
import ProfileTitle from 'atoms/ProfileTitle'
import ProfileCompanyRegion from 'atoms/ProfileCompanyRegion'
import ProfileNotComplete from 'atoms/ProfileNotComplete'
import { useNavigation } from '@react-navigation/native'

const ProfileInfoCard = () => {
  const navigation = useNavigation()
  const {
    store: { auth, profile },
  } = useContext(AppContext)
  const role = auth.userRole
  const active = profile.active
  return (
    <View style={styles.container}>
      {/* TITLE AND RATING */}
      <ProfileTitle auth={auth} />
      <ProfileRating auth={auth} />

      {/* COMPANY AND REGION INFO */}
      <ProfileCompanyRegion auth={auth} role={role} />

      {/* EXCLAMATION AND INFO BLOCK */}
      {role == 0 && !active && (
        <ProfileNotComplete>
          {I18n.t('Profile.MainScreen.seller.warningOne')}
          {'\n'}
          {I18n.t('Profile.MainScreen.seller.warningOnePartTwo')}
        </ProfileNotComplete>
      )}

      {/* EDIT PROFILE BUTTON */}
      <View style={styles.buttonContainer}>
        <AccentButton
          icon={<MyLotPencil style={{ marginRight: 15 }} />}
          buttonText={{ fontSize: '25@ms' }}
          onPress={() => {
            navigation.navigate('EditMyProfile'), auth.toggleTabBar(false)
          }}
          customStyles={{
            backgroundColor: '#FFCE45',
            borderRadius: 10,
          }}
          textColor={'#242E29'}
        >
          {active || role == 1
            ? I18n.t('Profile.MainScreen.seller.editProfileBtnActivated')
            : I18n.t('Profile.MainScreen.seller.editProfileBtn')}
        </AccentButton>
      </View>
    </View>
  )
}

export default ProfileInfoCard

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '10@ms',
    borderRadius: 10,
    marginTop: '22@ms',
    backgroundColor: '#fff',
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonContainer: { marginBottom: '20@ms', marginTop: '20@ms' },
})
