import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function StepThree(props) {
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
        d="M9.116 14.187C5.562 14.655 3 15.96 3 17.5c0 1.933 4.029 3.5 9 3.5s9-1.567 9-3.5c0-1.54-2.562-2.845-6.116-3.313"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 7.833C18 4.612 15.314 2 12 2S6 4.612 6 7.833C6 12.208 12 17 12 17s6-4.792 6-9.167z"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.414 6.586a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default StepThree
