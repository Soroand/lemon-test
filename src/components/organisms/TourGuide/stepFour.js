/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const StepTwo = ({ tutorialStep, setShowTutorial, stop }) => {
  return (
    <>
      <View
        style={{
          width: 325,
          height: 155,
          backgroundColor: 'rgba(255,255,255, 1)',
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            color: '#344154',
            fontSize: 16,
            marginLeft: 15,
            paddingVertical: 12.5,
            paddingHorizontal: 5,
            marginTop: 10,
            width: '90%',
            lineHeight: 20,
          }}
        >
          As soon as you join the game, or someone joins yours, a chat will be
          opened for communicate with players.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ color: '#838B97', fontSize: 14, marginRight: 10 }}>
            {tutorialStep} of 4
          </Text>
          <TouchableOpacity
            style={{
              width: 130,
              height: 35,
              backgroundColor: '#515BF1',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}
            onPress={() => {
              stop(), dispatch(getMyProfileComplete(false))
            }}
          >
            <View>
              <Text style={{ color: 'white' }}>Finish</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default StepTwo
