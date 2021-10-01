import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function GraduateHat(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.9373 5.46L4.70535 10.0333C2.97468 10.9947 2.97468 13.4827 4.70535 14.444L12.9373 19.0173C14.8413 20.0747 17.1573 20.0747 19.0627 19.0173L27.2947 14.444C29.0254 13.4827 29.0254 10.9947 27.2947 10.0333L19.0627 5.46C17.1573 4.40267 14.8427 4.40267 12.9373 5.46Z"
        stroke="#323232"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98804 16.2667V21.4987C7.98804 22.764 8.62137 23.944 9.67337 24.644L11.816 26.0693C14.3507 27.7547 17.6494 27.7547 20.1827 26.0693L22.3254 24.644C23.3787 23.944 24.0107 22.7627 24.0107 21.4987V16.2667"
        stroke="#323232"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default GraduateHat
