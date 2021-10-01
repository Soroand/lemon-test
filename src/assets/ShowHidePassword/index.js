import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ShowHidePassword(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.09 13.09c5.473-7.047 14.346-7.047 19.819 0M15.431 9.318a4.5 4.5 0 11-6.364 6.364 4.5 4.5 0 016.364-6.364"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShowHidePassword
