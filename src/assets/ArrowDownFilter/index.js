import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ArrowDownFilter(props) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.00001 9.99999L0.751118 4.2489L9.2489 4.2489L5.00001 9.99999Z"
        fill={props.color || '#0085FF'}
      />
    </Svg>
  )
}

export default ArrowDownFilter
