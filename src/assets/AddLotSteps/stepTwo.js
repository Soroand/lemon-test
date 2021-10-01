import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
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
        d="M12 11.79v10.2M3.274 6.898L12 11.79l8.718-4.888"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.009 6.17l6.875-3.915a2.002 2.002 0 011.958-.013l7.125 3.933A1.996 1.996 0 0121 7.923v8.038c0 .714-.382 1.374-1.001 1.73l-7 4.033a2.004 2.004 0 01-1.999 0l-7-4.033a1.997 1.997 0 01-1-1.73V7.905c0-.717.385-1.38 1.009-1.735v0z"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 11.93l4.5 2.523v5.255M16.5 19.708v-5.255L21 11.93M16.465 4.241L12 6.744 7.465 4.202"
        stroke={props.color || '#323232'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
