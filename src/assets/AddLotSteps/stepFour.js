import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function StepFour(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.88 10.201a3.987 3.987 0 11-5.64 5.639 3.987 3.987 0 015.64-5.639"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 9.034v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2h2L8.462 4.53a1 1 0 01.864-.496h5.304c.351 0 .676.184.857.484L17 7.034h2a2 2 0 012 2z"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default StepFour
