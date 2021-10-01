import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { TouchableOpacity, Text, View } from 'react-native'
import { WindowHeight } from 'atoms/Dimensions'

const AccentButton = ({
  children,
  customStyles,
  customeTextStyles,
  onPress,
  icon,
  disabled,
  copilot,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...copilot}
      disabled={disabled}
      activeOpacity={props.activeOpacity || 0.9}
      onPress={() => onPress()}
      style={[styles(props).button, { ...customStyles }]}
    >
      <View style={styles(props).innerWrap}>
        {icon}
        <Text style={[styles(props).buttonText, customeTextStyles]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AccentButton

const styles = (props) =>
  ScaledSheet.create({
    button: {
      width: '100%',
      height: props.btnHeight
        ? props.btnHeight
        : WindowHeight > 650
        ? '55@ms'
        : '50@ms',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#FFCE45',
      borderRadius: 10,
      marginTop: props.marginT || 0,
    },
    buttonText: {
      fontSize: props.textSize || '16@ms',
      color: props.textColor || 'white',
    },
    innerWrap: { flexDirection: 'row', alignItems: 'center' },
  })
