import * as React from 'react'
import Svg, { Path, Mask } from 'react-native-svg'

function RoleOne(props) {
  return (
    <Svg
      width={74}
      height={60}
      viewBox="0 0 74 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill="#FFCE45"
        d="M7 39h17v16H7zM20 18h4v20h-4zM6 18h4v20H6zM1.5 23L6 18v19H1l.5-14zM16 8H8c0-4 2.667-6.333 4-7-.833-.167-1.2-.5 4-.5s6.833 3.667 7 5.5v2l-2.5-.5-2-1.5L16 8z"
      />
      <Path
        d="M26.5 19.5l-4-1.5.5 8h1.5l5 7h4v-6H32l-1.5-2-4-5.5z"
        fill="#FFCE45"
      />
      <Path
        d="M60 28.064V5.806H29.032v14.69a9.674 9.674 0 00-7.06-3.077h-1.025a8.695 8.695 0 003.247-6.774V7.35c0-4.053-3.297-7.35-7.35-7.35h-2.72c-4.053 0-7.35 3.297-7.35 7.35v3.295a8.695 8.695 0 003.247 6.774H8.71C3.907 17.42 0 21.326 0 26.13v9.677a5.812 5.812 0 005.806 5.807V60h19.355V28.536l2.482 3.97a2.89 2.89 0 002.462 1.365h4.734A3.875 3.875 0 0038.709 30c0-.708-.205-1.363-.537-1.936h3.44V38.71H29.034v5.806h3.87v1.936h-3.87v5.806h3.87v1.936h-3.87V60H60v-5.806h-3.871v-1.936H60v-5.806h-3.871v-1.936H60V38.71H47.419V28.064H60zm-27.097 30h-1.935V56.13h1.935v1.936zm0-7.741h-1.935v-1.936h1.935v1.936zm0-7.742h-1.935v-1.936h1.935v1.936zm3.871 15.483H34.84V40.645h1.935v17.42zM56.13 40.645h1.936v1.936h-1.936v-1.936zm0 7.742h1.936v1.936h-1.936v-1.936zm0 7.742h1.936v1.936h-1.936v-1.936zm-3.87-15.484h1.935v17.42h-1.936v-17.42zM14.123 1.935h2.72a5.421 5.421 0 015.383 4.84h-1.102a.971.971 0 01-.684-.284l-2.054-2.053-2.053 2.053a.973.973 0 01-.684.283H8.742a5.421 5.421 0 015.382-4.839zm-5.414 8.71V8.71h6.94c.775 0 1.505-.303 2.053-.851l.684-.684.684.684c.548.549 1.278.85 2.053.85h1.134v1.936a6.783 6.783 0 01-6.774 6.774 6.783 6.783 0 01-6.774-6.774zm6.774 14.13l3.87-4.838v17.805h-7.741V19.937l3.87 4.837zm-1.857-5.42h3.714l-1.857 2.322-1.857-2.322zm-7.82 20.322c-1.427 0-2.662-.783-3.333-1.935h3.332v1.935zm0-3.87H1.934v-9.678a6.783 6.783 0 016.775-6.774h.967v18.387H7.742V24.194H5.806v11.613zm8.71 22.258H7.741v-1.936h6.774v1.936zm8.709 0h-6.774v-1.936h6.774v1.936zm0-3.871h-6.774V43.548h-1.936v10.646H7.742V39.677h15.484v14.517zm9.677-22.259h-2.798a.963.963 0 01-.821-.455l-4.123-6.596v-.69h-1.935v13.548H21.29V19.355h.682a7.75 7.75 0 016.768 3.981l2.626 4.729h1.537v3.87zm1.936 0v-3.87c1.066 0 1.935.868 1.935 1.935a1.938 1.938 0 01-1.935 1.936zm15.484 26.13H38.71v-1.936h11.613v1.936zm0-3.871H38.71v-1.936h11.613v1.936zm0-3.871H38.71v-1.936h11.613v1.936zm0-3.871H38.71v-1.936h11.613v1.936zm0-5.807v1.936H38.71v-1.936h11.613zm-6.775-1.935V28.064h1.936V38.71h-1.936zM58.065 7.742v18.387h-25.56l-1.612-2.903h.075V7.742h27.097zm-18.323 3.87h-1.935v3.041c-1.666.433-2.904 1.935-2.904 3.734a3.875 3.875 0 003.871 3.871 3.875 3.875 0 003.871-3.87 3.876 3.876 0 00-2.353-3.561c.509-.16 1.262-.31 2.353-.31V12.58c-1.267 0-2.205.17-2.903.386v-1.354zm-.968 4.84c1.067 0 1.936.868 1.936 1.935 0 1.067-.87 1.936-1.936 1.936a1.937 1.937 0 01-1.935-1.936c0-1.067.868-1.935 1.935-1.935z"
        fill="#323232"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={44}
        y={8}
        width={30}
        height={18}
        fill="#000"
      >
        <Path fill="#fff" d="M44 8h30v18H44z" />
        <Path d="M65.707 10.293a1 1 0 10-1.414 1.414L68.586 16H47a1 1 0 100 2h21.586l-4.293 4.293a1 1 0 001.414 1.414l6-6A.997.997 0 0072 17M71.924 16.617a.997.997 0 00-.217-.324l-6-6M71.924 16.617a.996.996 0 01.076.374l-.076-.374z" />
      </Mask>
      <Path
        d="M65.707 10.293a1 1 0 10-1.414 1.414L68.586 16H47a1 1 0 100 2h21.586l-4.293 4.293a1 1 0 001.414 1.414l6-6A.997.997 0 0072 17M71.924 16.617a.997.997 0 00-.217-.324l-6-6M71.924 16.617a.996.996 0 01.076.374l-.076-.374z"
        fill="#323232"
      />
      <Path
        d="M65.707 10.293l.713-.701a1 1 0 00-1.442 1.385l.73-.684zm5.564 7.391a1 1 0 101.458-1.368l-1.458 1.368zm.653-1.067l.98-.199a1 1 0 00-.267-.502l-.713.701zm-.904.573a1 1 0 001.96-.398l-1.96.398zm1.71-.874l-6.294-6.707-1.458 1.368 6.293 6.707 1.458-1.368zm-7.736-5.322l6.217 6.324 1.426-1.402-6.217-6.324-1.426 1.402zm5.95 5.822l.076.374 1.96-.398-.076-.374-1.96.398zm-6.651-6.523l-1.414-1.414 1.414 1.414zm1.414 0l1.414-1.414-1.414 1.414zm-1.414 1.414l-1.414 1.414 1.414-1.414zM68.586 16v2A2 2 0 0070 14.586L68.586 16zm0 2L70 19.414A2 2 0 0068.586 16v2zm-4.293 4.293l-1.414-1.414 1.414 1.414zm0 1.414l-1.414 1.414 1.414-1.414zm1.414 0l1.414 1.414-1.414-1.414zm6-6l1.414 1.414-1.414-1.414zm.292-.659L70 16.953l1.998.095zM74 17a2 2 0 10-4 0h4zm-2.293-.707l-1.414 1.414 1.414-1.414zm.217.324l-1.848.765v.001l1.848-.766zM70 17.01a2 2 0 004-.036l-4 .036zm-4.293-5.302a1 1 0 01-1.414 0L67.12 8.88a3 3 0 00-4.242 0l2.828 2.828zm0-1.414a1 1 0 010 1.414L62.88 8.88a3 3 0 000 4.242l2.828-2.828zM70 14.586l-4.293-4.293-2.828 2.828 4.293 4.293L70 14.586zM47 18h21.586v-4H47v4zm1-1a1 1 0 01-1 1v-4a3 3 0 00-3 3h4zm-1-1a1 1 0 011 1h-4a3 3 0 003 3v-4zm21.586 0H47v4h21.586v-4zm-2.879 7.707L70 19.414l-2.828-2.828-4.293 4.293 2.828 2.828zm0-1.414a1 1 0 010 1.414L62.88 20.88a3 3 0 000 4.242l2.828-2.828zm-1.414 0a1 1 0 011.414 0L62.88 25.12a3 3 0 004.242 0l-2.828-2.828zm6-6l-6 6 2.828 2.828 6-6-2.828-2.828zm-.292.66c.011-.238.11-.478.292-.66l2.828 2.828c.549-.548.841-1.26.876-1.978L70 16.953zM70 17l.001-.047 3.996.19c.002-.047.003-.095.003-.143h-4zm.293.707a1.001 1.001 0 01-.217-.325l3.696-1.53a2.998 2.998 0 00-.65-.973l-2.83 2.828zm-6-6l6 6 2.828-2.828-6-6-2.828 2.828zm5.784 5.676A1.004 1.004 0 0170 17.01l4-.036a2.999 2.999 0 00-.228-1.122l-3.695 1.532z"
        fill="#fff"
        mask="url(#prefix__a)"
      />
    </Svg>
  )
}

export default RoleOne