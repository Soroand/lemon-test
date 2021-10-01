import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import UserRating from 'assets/Mock/UserRating'
import { P } from 'atoms/TextElements'
import I18n from 'I18n'

const ProfileRating = ({ auth }) => {
  return !auth.rating ? (
    <P textSize="14@ms" textColor="#BBBBBB" marginT="9@ms" textAlign="center">
      {I18n.t('Profile.MainScreen.buyer.rating')}
    </P>
  ) : (
    <TouchableOpacity style={styles.rating}>
      <UserRating />
    </TouchableOpacity>
  )
}

export default ProfileRating

const styles = ScaledSheet.create({
  container: {},
  rating: { alignItems: 'center', marginTop: '10@ms' },
})
