import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { AppContext } from 'context/App'
import { observer } from 'mobx-react'
import P from 'atoms/TextElements/P'
import I18n from 'I18n'

const RegistrationRoles = observer(({ RolesItem = [] }) => {
  const {
    store: { auth },
    repositories: { asyncStorage },
  } = useContext(AppContext)
  return RolesItem.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.8}
        onPress={() => {
          auth.setUserRole(index), asyncStorage.setItem('role', index)
        }}
        style={[
          styles.roleItem,
          parseInt(auth.userRole) === index && styles.roleItemActive,
        ]}
      >
        {item}
        <P textColor={'#323232'} marginT={'10@ms'} textAlign="center">
          {I18n.t(
            `Auth.Registration.stepOne.${index === 0 ? 'buying' : 'selling'}`
          )}
        </P>
      </TouchableOpacity>
    )
  })
})

export default RegistrationRoles

const styles = ScaledSheet.create({
  roleItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 45,
    borderWidth: 1,
    paddingHorizontal: '20@mvs',
    borderRadius: '10@ms',
    backgroundColor: '#fff',
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 5,
  },
  roleItemActive: {
    borderColor: '#FFCE45',
    borderWidth: 2,
  },
})
