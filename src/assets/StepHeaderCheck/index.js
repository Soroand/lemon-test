import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

function StepHeaderCheck(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={10} r={10} fill="#00A944" />
      <Path
        d="M13.333 7.708L8.75 12.292l-2.083-2.084"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default StepHeaderCheck
