import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Favorite(props) {
  return (
    <Svg
      width={29}
      height={37}
      viewBox="0 0 21 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 0v21.97a2.64 2.64 0 001.35 2.304l7.874 4.394a2.613 2.613 0 002.55 0l7.875-4.394A2.637 2.637 0 0021 21.97V0H0z"
        fill={props.bannerFill || '#EAEAEA'}
      />
      <Path
        d="M12.76 11c1.938 0 3.24 1.675 3.24 3.237C16 17.405 10.599 20 10.5 20c-.099 0-5.5-2.595-5.5-5.763C5 12.677 6.301 11 8.24 11c1.11 0 1.838.509 2.26.963.42-.454 1.15-.963 2.26-.963v0z"
        stroke={props.heartStroke || '#FF6161'}
        fill={props.heartFill || 'none'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Favorite
