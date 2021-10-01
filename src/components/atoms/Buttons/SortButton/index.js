import React from 'react'
import { TouchableOpacity } from 'react-native'
import { P } from 'atoms/TextElements'
import ArrowDownFilter from 'assets/ArrowDownFilter'
import { ScaledSheet } from 'react-native-size-matters'

const SortButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.sortButton}>
      <P
        textSize={'12@ms'}
        textColor={'#0085FF'}
        customStyles={{ marginRight: 3 }}
      >
        {title}
      </P>
      <ArrowDownFilter style={{ marginTop: 2 }} />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  sortButton: {
    flexDirection: 'row',
  },
})

export default SortButton
