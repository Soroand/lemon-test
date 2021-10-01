import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { P, H } from 'atoms/TextElements'
import I18n from 'I18n'

const ProfileTitle = ({ auth }) => {
  return (
    <>
      <P
        textColor="#BBBBBB"
        textSize="13@ms"
        textAlign="center"
        marginT="20@ms"
      >
        {I18n.t('Profile.MainScreen.seller.title')}
      </P>
      <H marginT="3@ms" textAlign="center" type="h2">
        {auth.userName} {auth.userLastName}
      </H>
    </>
  )
}

export default ProfileTitle

const styles = ScaledSheet.create({
  container: {},
})
