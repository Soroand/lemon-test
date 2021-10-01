import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function FilterMainScreen(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.833 7V3.5M5.833 24.5V11.667M14 16.333V3.5M14 24.5V21M22.167 7V3.5M22.167 24.5V11.667M7.483 7.683a2.333 2.333 0 11-3.3 3.3 2.333 2.333 0 013.3-3.3M15.65 17.017a2.333 2.333 0 11-3.3 3.3 2.333 2.333 0 013.3-3.3M23.817 7.683a2.333 2.333 0 11-3.3 3.3 2.333 2.333 0 013.3-3.3"
        stroke="#242E29"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FilterMainScreen
