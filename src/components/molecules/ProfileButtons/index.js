import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import ProfileButton from 'atoms/ProfileButton'
import ProfileButtonLeft from 'assets/ProfileButtonLeft'
import ProfileButtonRight from 'assets/ProfileButtonRight'
import ProfileButtonRightBuyer from 'assets/ProfileButtonRightBuyer'
import I18n from 'I18n'
import { useNavigation } from '@react-navigation/native'

const ProfileButtons = ({ role, active }) => {
  const navigation = useNavigation()

  const sellerMyRepliesClickHandler = () => {
    navigation.navigate('SellerRepliesStack')
  }

  const sellerMyLotsClickHandler = () => {}

  const buyerMyRepliesClickHandler = () => {
    navigation.navigate('MyApplications', 'BuyerReplies')
  }

  const buyerMyFavoritesClickHandler = () => {}
  console.log(active)
  return (
    <View style={styles.container}>
      <ProfileButton
        role={role}
        active={active}
        onPress={() => {
          if (role == 0) {
            sellerMyLotsClickHandler()
          } else {
            buyerMyRepliesClickHandler()
          }
        }}
        margin={true}
        text={
          role == 0
            ? I18n.t('Profile.MainScreen.seller.myLots')
            : I18n.t('Profile.MainScreen.buyer.myReplies')
        }
        profileButton={
          <ProfileButtonRight
            style={{ opacity: !active && role == 0 ? 0.5 : 1 }}
          />
        }
      />
      <ProfileButton
        role={role}
        active={active}
        onPress={() => {
          if (role == 0) {
            sellerMyRepliesClickHandler()
          } else {
            buyerMyFavoritesClickHandler()
          }
        }}
        text={
          role == 0
            ? I18n.t('Profile.MainScreen.seller.myReplies')
            : I18n.t('Profile.MainScreen.buyer.myFavorites')
        }
        profileButton={
          role == 0 ? (
            <ProfileButtonLeft
              style={{ opacity: !active && role == 0 ? 0.5 : 1 }}
            />
          ) : (
            <ProfileButtonRightBuyer
              style={{ opacity: !active && role == 0 ? 0.5 : 1 }}
            />
          )
        }
      />
    </View>
  )
}

export default ProfileButtons

const styles = ScaledSheet.create({
  container: {
    marginTop: '20@ms',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
