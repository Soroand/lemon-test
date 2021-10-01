import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SellerMainSvg(props) {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 10a9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9zM10.5 6v8"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 9l3-3 3 3"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SellerMainSvg
