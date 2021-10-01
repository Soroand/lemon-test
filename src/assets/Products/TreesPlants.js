import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function TreesPlants(props) {
  return (
    <Svg
      width={45}
      height={47}
      viewBox="0 0 45 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.963 45.436c0 .338-.232.564-.578.564-.347 0-.578-.282-.694-.62v-7.955c-3.757-.395-7.052-4.513-8.613-10.774-1.56.959-3.352 1.58-5.26 1.692v17.036c0 .339-.23.565-.578.565-.346 0-.578-.226-.578-.565V28.343c-6.127-.17-11.04-5.077-11.04-11.113 0-6.15 5.144-11.17 11.445-11.17 2.717 0 5.144.903 7.11 2.426 1.907-4.739 4.913-7.56 8.208-7.56C39.049.927 43.5 8.938 43.5 19.205c0 9.929-4.162 17.77-9.537 18.278v7.954zM23.789 19.26l-4.913 4.795h.058v3.215c5.26-.395 9.48-4.739 9.48-9.985 0-5.528-4.625-10.041-10.29-10.041-5.664 0-10.288 4.513-10.288 10.041 0 5.36 4.393 9.816 9.884 9.985v-3.215l-4.913-4.795a.536.536 0 010-.79.568.568 0 01.81 0l4.103 4.005v-7.164c0-.339.231-.564.578-.564s.578.225.578.564v7.164l4.104-4.005a.568.568 0 01.81 0 .536.536 0 010 .79zm5.723-2.031c0 3.554-1.677 6.713-4.335 8.744 1.329 5.98 4.277 9.985 7.63 10.38V22.87c0-.338.23-.564.578-.564.346 0 .578.226.578.564v13.482c4.682-.62 8.38-8.066 8.38-17.149 0-9.42-4.045-17.149-8.959-17.149-2.89 0-5.606 2.708-7.283 7.22 2.081 2.032 3.41 4.852 3.41 7.955zM9.382 45.419c0 .348-.237.58-.593.58-.296 0-.592-.29-.533-.58v-1.744C4.463 43.443 1.5 40.362 1.5 36.642c0-3.894 3.2-7.032 7.17-7.032 3.971 0 7.171 3.138 7.171 7.032 0 3.662-2.844 6.684-6.46 7.033v1.744zm-.77-14.647c-3.26 0-5.986 2.616-5.986 5.87 0 3.08 2.489 5.638 5.57 5.929v-1.628l-2.903-2.848a.554.554 0 010-.813.58.58 0 01.83 0l2.074 2.034v-3.778c0-.349.237-.581.592-.581.356 0 .593.232.593.581v3.778l2.074-2.034a.58.58 0 01.83 0 .554.554 0 010 .813l-2.904 2.848v1.57c2.963-.35 5.274-2.848 5.274-5.87 0-3.255-2.785-5.87-6.045-5.87z"
        fill="#138B00"
      />
      <Path
        d="M32.69 45.38h-.55v.09l.03.087.52-.178zm0-7.955h.55v-.495l-.492-.052-.057.547zm-8.612-10.774l.534-.133-.182-.73-.64.394.288.469zm-5.26 1.692l-.032-.55-.518.032v.518h.55zm-1.156 0h.55v-.535l-.535-.015-.015.55zm7.515-19.857l-.337.435.575.446.272-.676-.51-.205zm8.786 28.996l-.052-.548-.498.047v.5h.55zM18.876 24.056l-.384-.394-.967.944h1.351v-.55zm4.913-4.795l.384.393-.384-.393zm-4.855 4.795h.55v-.55h-.55v.55zm0 3.215h-.55v.593l.591-.044-.041-.549zm-1.214 0l-.017.55.567.017v-.567h-.55zm0-3.215h.55v-.232l-.166-.162-.384.394zm-4.913-4.795l-.384.393.384-.393zm0-.79l-.384-.394.384.394zm.81 0l.383-.394-.384.394zm4.103 4.005l-.384.394.934.911v-1.305h-.55zm1.156 0h-.55v1.305l.934-.911-.384-.394zm4.104-4.005l-.384-.394.384.394zm.81 0l.384-.394-.385.394zm1.387 7.503l-.334-.437-.28.213.077.343.537-.12zm7.63 10.38l-.065.546.614.072v-.619h-.55zm1.156 0h-.55v.627l.622-.082-.072-.546zM26.1 9.275l-.515-.192-.125.336.256.25.384-.394zM8.256 45.419l.539.11.01-.055v-.055h-.55zm0-1.744h.55v-.517l-.516-.032-.034.55zm1.126 0l-.053-.547-.497.048v.5h.55zm-1.185-1.104l-.052.547.602.057v-.604h-.55zm0-1.628h.55v-.23l-.165-.162-.385.392zm-2.904-2.848l-.385.393.385-.393zm.83-.813l-.386.392.385-.392zm2.074 2.034l-.385.393.935.917v-1.31h-.55zm1.185 0h-.55v1.31l.935-.917-.385-.393zm2.074-2.034l.385.392-.385-.392zm.83.813l.385.393-.385-.393zm-2.904 2.848l-.385-.392-.165.161v.231h.55zm0 1.57h-.55v.618l.614-.072-.064-.546zm24.003 4.037c.294 0 .584-.098.803-.312.22-.214.325-.504.325-.802h-1.1c0 .022-.004.03-.004.03 0-.002.004-.008.01-.015l.009-.007a.132.132 0 01-.043.006v1.1zm-1.215-.993c.143.418.51.993 1.215.993v-1.1c-.01 0-.021.001-.05-.027a.576.576 0 01-.124-.221l-1.04.355zm-.03-8.132v7.954h1.1v-7.954h-1.1zm-8.595-10.641c.794 3.186 2.036 5.86 3.586 7.797 1.55 1.938 3.434 3.174 5.502 3.391l.115-1.094c-1.689-.177-3.33-1.198-4.757-2.983-1.427-1.785-2.613-4.302-3.379-7.377l-1.067.266zm-4.694 2.108c2.007-.119 3.885-.771 5.515-1.773l-.576-.937c-1.49.916-3.196 1.505-5.004 1.612l.065 1.098zm.517 16.487V28.343h-1.1v17.036h1.1zm-1.128 1.114c.295 0 .585-.097.804-.311.22-.215.324-.504.324-.803h-1.1c0 .022-.003.03-.003.03 0-.002.004-.008.01-.014.007-.007.011-.008.009-.007a.126.126 0 01-.044.006v1.1zm-1.128-1.114c0 .299.105.588.325.803.219.214.509.311.803.311v-1.1a.127.127 0 01-.043-.005c-.002 0 .002 0 .008.007.007.006.01.012.01.014 0 0-.003-.008-.003-.03h-1.1zm0-17.036v17.036h1.1V28.343h-1.1zM6.072 17.23c0 6.346 5.162 11.486 11.575 11.663l.03-1.1c-5.84-.161-10.505-4.837-10.505-10.563h-1.1zM18.067 5.51c-6.592 0-11.995 5.255-11.995 11.72h1.1c0-5.833 4.885-10.62 10.895-10.62v-1.1zm7.447 2.541a12.03 12.03 0 00-7.447-2.54v1.1c2.59 0 4.9.858 6.773 2.31l.674-.87zm7.87-7.674c-3.638 0-6.782 3.096-8.718 7.904l1.02.41c1.88-4.67 4.748-7.214 7.699-7.214v-1.1zM44.05 19.204c0-5.205-1.127-9.871-3.002-13.255C39.18 2.579 36.503.377 33.385.377v1.1c2.546 0 4.926 1.803 6.7 5.005 1.767 3.188 2.865 7.66 2.865 12.722h1.1zM34.014 38.03c2.953-.279 5.467-2.555 7.22-5.898 1.762-3.358 2.816-7.892 2.816-12.927h-1.1c0 4.894-1.027 9.245-2.69 12.416-1.671 3.187-3.926 5.085-6.35 5.314l.104 1.095zm.499 7.407v-7.954h-1.1v7.954h1.1zM19.26 24.449l4.913-4.795-.768-.787-4.913 4.795.768.787zm-.326-.943h-.058v1.1h.058v-1.1zm.55 3.765v-3.215h-1.1v3.215h1.1zm8.38-9.985c0 4.944-3.983 9.062-8.971 9.437l.082 1.097c5.532-.416 9.988-4.985 9.988-10.534h-1.1zm-9.74-9.491c5.374 0 9.74 4.28 9.74 9.491h1.1c0-5.844-4.884-10.591-10.84-10.591v1.1zm-9.738 9.491c0-5.212 4.365-9.491 9.739-9.491v-1.1c-5.956 0-10.84 4.747-10.84 10.591h1.1zm9.351 9.435c-5.204-.16-9.351-4.383-9.351-9.435h-1.1c0 5.666 4.639 10.357 10.417 10.535l.034-1.1zm-.567-2.665v3.215h1.1v-3.215h-1.1zm-4.747-4.402l4.913 4.795.768-.787-4.913-4.795-.768.787zm0-1.577a1.086 1.086 0 000 1.577l.768-.787-.01-.011.002.01a.027.027 0 01-.001.01s0-.003.009-.012l-.768-.787zm1.577 0a1.118 1.118 0 00-1.577 0l.768.787a.052.052 0 01.016-.011.012.012 0 01.004-.001h.005c.002.002.008.004.016.012l.768-.787zm4.104 4.005L14 18.078l-.768.787 4.104 4.006.768-.788zm-.934-6.77v7.164h1.1v-7.164h-1.1zm1.128-1.114c-.294 0-.584.098-.803.311-.22.215-.325.505-.325.803h1.1c0-.022.004-.03.003-.03a.046.046 0 01-.01.014c-.006.007-.01.008-.008.007a.13.13 0 01.043-.005v-1.1zm1.128 1.114c0-.298-.105-.588-.325-.803a1.135 1.135 0 00-.803-.311v1.1a.13.13 0 01.043.005c.003.001-.002 0-.008-.007a.043.043 0 01-.01-.013c0-.002.003.007.003.029h1.1zm0 7.164v-7.164h-1.1v7.164h1.1zm3.17-4.399l-4.104 4.005.768.788 4.104-4.006-.768-.787zm1.578 0a1.118 1.118 0 00-1.578 0l.768.787a.052.052 0 01.017-.011.012.012 0 01.004-.001h.004c.002.002.008.004.016.012l.768-.787zm0 1.577a1.086 1.086 0 000-1.577l-.769.787.01.012a.026.026 0 01-.002-.01l.001-.01c0-.001 0 .003-.009.011l.768.787zm1.336 6.757c2.79-2.13 4.552-5.449 4.552-9.181h-1.1c0 3.375-1.591 6.376-4.12 8.307l.668.874zm7.36 9.396c-1.472-.173-2.925-1.15-4.194-2.875-1.266-1.721-2.31-4.141-2.962-7.078l-1.074.239c.676 3.043 1.771 5.616 3.15 7.49 1.376 1.872 3.072 3.095 4.952 3.317l.129-1.093zm-.613-12.936v13.482h1.1V22.871h-1.1zm1.128-1.114c-.295 0-.585.098-.804.311-.22.215-.325.505-.325.803h1.1c0-.022.004-.03.004-.03a.046.046 0 01-.01.015c-.007.006-.011.007-.009.006a.13.13 0 01.044-.005v-1.1zm1.128 1.114c0-.298-.105-.588-.325-.803a1.135 1.135 0 00-.803-.311v1.1a.13.13 0 01.043.005c.002.001-.002 0-.008-.006a.046.046 0 01-.01-.014c-.001-.001.003.007.003.029h1.1zm0 13.482V22.871h-1.1v13.482h1.1zm7.28-17.149c0 4.473-.91 8.52-2.378 11.506-1.478 3.01-3.455 4.824-5.525 5.098l.145 1.09c2.612-.346 4.826-2.565 6.368-5.704 1.553-3.162 2.49-7.38 2.49-11.99h-1.1zM33.386 2.605c2.146 0 4.242 1.701 5.834 4.747 1.578 3.017 2.575 7.213 2.575 11.852h1.1c0-4.782-1.026-9.16-2.7-12.362-1.66-3.174-4.043-5.337-6.81-5.337v1.1zm-6.768 6.862c1.657-4.46 4.243-6.862 6.768-6.862v-1.1c-3.256 0-6.103 3.014-7.8 7.58l1.032.382zm3.445 7.763c0-3.263-1.399-6.222-3.576-8.348l-.769.787c1.984 1.936 3.245 4.619 3.245 7.56h1.1zM8.789 46.55c.3 0 .594-.1.815-.317.222-.218.328-.512.328-.814h-1.1a.108.108 0 01-.005.037l.007-.009c.005-.005.008-.005.004-.004a.142.142 0 01-.049.007v1.1zm-1.072-1.241c-.075.367.082.687.274.889.19.2.477.352.798.352v-1.1c.016 0 .02.003.015.001a.056.056 0 01-.016-.012c-.005-.005-.002-.004.003.01a.154.154 0 01.004.08l-1.078-.22zm-.011-1.634v1.744h1.1v-1.744h-1.1zM.95 36.642c0 4.022 3.2 7.332 7.272 7.582l.068-1.098c-3.514-.215-6.24-3.065-6.24-6.484H.95zm7.72-7.582c-4.263 0-7.72 3.375-7.72 7.582h1.1c0-3.58 2.944-6.482 6.62-6.482v-1.1zm7.722 7.582c0-4.208-3.457-7.582-7.721-7.582v1.1c3.677 0 6.62 2.902 6.62 6.482h1.1zm-6.957 7.58c3.887-.375 6.957-3.626 6.957-7.58h-1.1c0 3.37-2.62 6.163-5.963 6.486l.106 1.094zm.497 1.197v-1.744h-1.1v1.744h1.1zm-6.756-8.777c0-2.937 2.466-5.32 5.435-5.32v-1.1c-3.549 0-6.535 2.848-6.535 6.42h1.1zm5.072 5.381c-2.82-.266-5.072-2.605-5.072-5.38h-1.1c0 3.384 2.726 6.16 6.069 6.475l.103-1.095zm-.601-1.08v1.628h1.1v-1.628h-1.1zm-2.74-2.455l2.905 2.848.77-.785-2.904-2.848-.77.785zm0-1.599a1.104 1.104 0 000 1.6l.77-.786a.057.057 0 01-.012-.017v.005s.003-.007.013-.017l-.77-.785zm1.6 0a1.13 1.13 0 00-1.6 0l.77.785a.067.067 0 01.022-.015.023.023 0 01.009-.002l.008.002a.067.067 0 01.021.015l.77-.785zm2.075 2.034L6.508 36.89l-.77.785 2.074 2.035.77-.786zm-.935-3.385v3.778h1.1v-3.778h-1.1zm1.142-1.131c-.3 0-.593.1-.815.317a1.124 1.124 0 00-.327.814h1.1a.11.11 0 01.004-.037l-.006.008c-.005.005-.008.006-.004.004a.144.144 0 01.048-.006v-1.1zm1.143 1.131c0-.302-.106-.596-.328-.814a1.148 1.148 0 00-.815-.317v1.1c.03 0 .044.005.049.006.004.002 0 .001-.004-.004l-.007-.008a.11.11 0 01.005.037h1.1zm0 3.778v-3.778h-1.1v3.778h1.1zm1.139-2.427l-2.074 2.034.77.786 2.074-2.035-.77-.785zm1.6 0a1.13 1.13 0 00-1.6 0l.77.785a.07.07 0 01.021-.015.023.023 0 01.009-.002c.002 0 .005 0 .008.002a.07.07 0 01.022.015l.77-.785zm0 1.6a1.104 1.104 0 000-1.6l-.77.785c.01.01.012.016.013.017v-.002-.003s-.004.007-.013.017l.77.785zm-2.904 2.847l2.904-2.848-.77-.785-2.904 2.848.77.785zm.165 1.177v-1.57h-1.1v1.57h1.1zm4.174-5.87c0 2.733-2.093 5.006-4.788 5.323l.128 1.093c3.231-.38 5.76-3.106 5.76-6.417h-1.1zm-5.495-5.32c2.977 0 5.495 2.389 5.495 5.32h1.1c0-3.58-3.052-6.42-6.595-6.42v1.1z"
        fill="#138B00"
      />
    </Svg>
  )
}

export default TreesPlants
