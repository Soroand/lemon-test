import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ArrowDownLot(props) {
  return (
    <Svg
      width={10}
      height={6}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 6L.751.249H9.25L5 6z" fill="#00A944" />
    </Svg>
  )
}

export default ArrowDownLot
