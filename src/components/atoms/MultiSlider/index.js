import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { WindowWidth } from 'atoms/Dimensions'
const MultiSliderComponent = ({ min, max, vals, setMinVal, setMaxVal }) => {
  return (
    <MultiSlider
      isMarkersSeparated={true}
      values={vals}
      min={min}
      max={max}
      minMarkerOverlapDistance={1}
      step={1}
      sliderLength={WindowWidth - 40}
      containerStyle={{
        maxWidth: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
      }}
      trackStyle={{ height: 3, backgroundColor: '#f3f3f3' }}
      selectedStyle={{ backgroundColor: '#00A944FF' }}
      markerOffsetY={3}
      customMarkerLeft={(e) => {
        return (
          <View style={styles.markerOuter}>
            <View style={styles.markerInner}></View>
          </View>
        )
      }}
      customMarkerRight={(e) => {
        return (
          <View style={styles.markerOuter}>
            <View style={styles.markerInner}></View>
          </View>
        )
      }}
      onValuesChange={(values) => {
        setMinVal(values[0]), setMaxVal(values[1])
      }}
    />
  )
}

export default MultiSliderComponent

const styles = ScaledSheet.create({
  markerOuter: {
    width: 25,
    height: 25,
    backgroundColor: '#00A944',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerInner: {
    width: 13,
    height: 13,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
})
