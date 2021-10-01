import React from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import StepPlank from 'assets/RegistrationStepHeader/fourth'
import HeaderCheck from 'atoms/HeaderCheck'

const StepHeader = ({ activeItem = [], activeBorder = [0], headerIcons }) => {
  return (
    <View style={styles.stepContainer}>
      {headerIcons.map((item, index) => {
        return (
          <View
            key={Math.floor(Math.random() * 900000000) + 100000000}
            style={styles.stepWrap}
          >
            <View
              style={[
                styles.stepBox,
                activeBorder.includes(index) && styles.active,
              ]}
            >
              {activeItem.includes(index) && <HeaderCheck />}
              {headerIcons[index](
                activeItem.includes(index) && { color: '#0085ff' }
              )}
            </View>
            {headerIcons.length - 1 !== index && (
              <StepPlank
                color={activeItem.includes(index) ? '#0085ff' : null}
              />
            )}
          </View>
        )
      })}
    </View>
  )
}

export default StepHeader

const styles = ScaledSheet.create({
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: '10@mvs5',
  },
  stepBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#D6D6D6',
    borderRadius: 10,
  },

  active: {
    borderColor: '#0085ff',
    position: 'relative',
  },
  stepWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
