import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { P } from 'atoms/TextElements'
import I18n from 'I18n'
import { observer } from 'mobx-react'

const ProfileCompanyRegion = ({ auth, role }) => {
  return (
    <View style={styles.infoCompany}>
      <View
        style={{
          alignItems: 'center',
          width: '50%',
        }}
      >
        <P textSize="14@ms" textColor="#BBBBBB">
          {role == 0
            ? I18n.t('Profile.MainScreen.seller.company')
            : I18n.t('Profile.MainScreen.buyer.cell')}
        </P>

        {/* COMPANY OR CELLPHONE RENDER */}
        <P
          textAlign="center"
          textSize="15@ms"
          textColor="#242E29"
          marginT="2@ms"
        >
          {role == 0 && auth.userCompany.length !== 0
            ? auth.userCompany
            : role == 1 && auth.userPhoneNumber.length !== 0
            ? auth.userPhoneNumber
            : I18n.t('Profile.MainScreen.companyNotIndicated')}
        </P>

        {/* ------------------ */}
      </View>
      <View style={{ alignItems: 'center', width: '50%' }}>
        <P textSize="14@ms" textColor="#BBBBBB">
          {role == 0
            ? I18n.t('Profile.MainScreen.buyer.cell')
            : I18n.t('Profile.MainScreen.seller.region')}
        </P>
        <P textSize="15@ms" textColor="#242E29" marginT="2@ms">
          {role == 0 && auth?.userPhoneNumber !== 0
            ? auth?.userPhoneNumber
            : role == 1 && auth?.userCounty?.length !== 0
            ? auth?.userCountry + ',' + auth?.userCity
            : I18n.t('Profile.MainScreen.notIndicated')}
        </P>
      </View>
    </View>
  )
}

export default observer(ProfileCompanyRegion)

const styles = ScaledSheet.create({
  container: {},
  infoCompany: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15@ms',
  },
})
