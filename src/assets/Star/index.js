import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Star(props) {
  return (
    <Svg
      width={20}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 15.235L4.179 18l1.209-6.12L1 7.392l6.179-.771L10 1l2.821 5.621L19 7.392l-4.388 4.488L15.821 18 10 15.235z"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Star
