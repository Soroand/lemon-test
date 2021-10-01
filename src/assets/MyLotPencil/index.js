import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function MyLotPencil(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 9v8a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h8"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.707 4.121L7.828 15H5v-2.828L15.879 1.293a.999.999 0 011.414 0l1.414 1.414a.999.999 0 010 1.414v0zM14.09 3.09l2.82 2.82"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MyLotPencil
