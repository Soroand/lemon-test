import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { WindowHeight } from 'atoms/Dimensions'

function UserRating(props) {
  return (
    <Svg
      width={WindowHeight > 700 ? 104 : 94}
      height={WindowHeight > 700 ? 18 : 15}
      viewBox="0 0 84 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.875 8.71l-3.153 1.498.655-3.315L1 4.463l3.347-.418L5.875 1l1.528 3.045 3.347.417-2.377 2.431.655 3.315-3.153-1.497zM18.875 8.71l-3.153 1.498.655-3.315L14 4.463l3.347-.418L18.875 1l1.528 3.045 3.347.417-2.377 2.431.655 3.315-3.153-1.497zM31.875 8.71l-3.153 1.498.655-3.315L27 4.463l3.347-.418L31.875 1l1.528 3.045 3.347.417-2.377 2.431.655 3.315-3.153-1.497zM44.875 8.71l-3.153 1.498.655-3.315L40 4.463l3.347-.418L44.875 1l1.528 3.045 3.347.417-2.377 2.431.655 3.315-3.153-1.497z"
        fill="#00A944"
        stroke="#00A944"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M57.875 8.71l-3.153 1.498.655-3.315L53 4.463l3.347-.418L57.875 1l1.528 3.045 3.347.417-2.377 2.431.655 3.315-3.153-1.497z"
        stroke="#00A944"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M72.12 8.43h-3.53l-.23-.88 3.89-4.6h1.05v4.47h1v1.01h-1V10h-1.18V8.43zm0-1.01V4.65l-2.3 2.77h2.3zm3.376 1.2h1.33V10h-1.33V8.62zm5.116 1.5c-.613 0-1.14-.113-1.58-.34-.433-.227-.8-.52-1.1-.88l.86-.81c.253.3.523.53.81.69.293.153.637.23 1.03.23.34 0 .627-.097.86-.29a.95.95 0 00.35-.77v-.02a.894.894 0 00-.44-.8c-.287-.187-.677-.28-1.17-.28h-.57l-.2-.77 1.89-2.01h-3.03V3h4.63v.92l-1.95 2c.267.033.523.093.77.18s.463.21.65.37c.193.153.347.347.46.58.12.233.18.51.18.83v.02c0 .32-.06.617-.18.89s-.287.51-.5.71a2.39 2.39 0 01-.77.46c-.3.107-.633.16-1 .16z"
        fill="#00A944"
      />
    </Svg>
  )
}

export default UserRating
