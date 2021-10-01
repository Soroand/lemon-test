import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function TrashBin(props) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.958 5.542h11.084M14.25 5.542v8.708c0 .875-.709 1.583-1.583 1.583H6.333A1.583 1.583 0 014.75 14.25V5.542M11.875 2.969h-4.75M7.917 8.708v3.959M11.083 8.708v3.959"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TrashBin
