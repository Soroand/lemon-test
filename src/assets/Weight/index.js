import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Weight(props) {
  return (
    <Svg
      width={17}
      height={10}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.63 1.419A1.5 1.5 0 013.101.205H15.18a1.5 1.5 0 011.473 1.787l-1.282 6.59a1.5 1.5 0 01-1.473 1.213H1.82A1.5 1.5 0 01.347 8.008l1.282-6.59z"
        fill={props.color || '#00A944'}
      />
      <Path
        d="M4.736 3.489l-.931.238-.014-.742 1.449-.42h.595L4.512 7.5h-.854l1.078-4.011zm3.165.315h.847l-.406 1.484h.427l1.519-1.484h1.12L9.343 5.715l1.12 1.785h-.924l-.924-1.519h-.462L7.76 7.5h-.847L7.9 3.804zm4.136 0h2.778l-.202.763H12.68L11.896 7.5h-.848l.988-3.696z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Weight
