/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { H, P } from 'atoms/TextElements'
import GraduateHat from 'assets/GraduateHat'

const TourStep = ({ onPress, title, desc, button, customStyle }) => {
  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.hat}>
        <GraduateHat />
      </View>

      <View style={styles.body}>
        <P fontWight={'normal'} customStyles={styles.title}>
          Обучение
        </P>
        <H customStyles={styles.welcome}>{title}</H>
        <P customStyles={styles.text}>{desc}</P>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={onPress}
      >
        <P fontWight={'normal'} customStyles={styles.buttonTitle}>
          {button}
        </P>
      </TouchableOpacity>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#FFE402',
    width: '230@ms',
    borderRadius: 10,
  },
  hat: {
    position: 'absolute',
    width: '50@ms',
    height: '50@ms',
    borderRadius: '50@ms',
    transform: [{ translateY: -25 }],
    top: 0,
    right: '17@ms',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 13,
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: '11@ms',
    color: '#242E29',
  },
  welcome: {
    fontWeight: '500',
    fontSize: '18@ms',
    marginBottom: 7,
    color: '#242E29',
  },
  text: {
    fontSize: '13@ms',
    color: '#3F3C23',
    lineHeight: 16,
    marginBottom: 2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '48@ms',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonTitle: {
    justifyContent: 'center',
    opacity: 0.2,
    fontSize: '16@ms',
    color: '#242E29',
  },
})

export default TourStep
