import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableOpacity, StyleSheet } from "react-native"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

export default function Body(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 46.2 103"
      xmlSpace="preserve"
      stroke="black"
      strokeWidth="1"
      fill="green"
      {...props}
    >
      
      
      {/* Head inner color */}
      <Path style={styles.body}
        d="M23.1 16.1c.4 0 .8.1 1.1.2 3.2-.6 5.7-3.5 5.7-6.9 0-3.9-3.1-7-7-7s-7 3.1-7 7c0 3.5 2.6 6.4 6 6.9.4-.1.8-.2 1.2-.2z"
        fill="#7f006b"
      />

      {/* Heart outline */}
      {/* <Path
        className="prefix__st1"
        d="M23.1 45.4c-.2 0-.4 0-.5.1h.7c-.1-.1-.1-.1-.2-.1zM19.9 48.7c0-.1 0 0 0 0zM19.9 40.3c0-1.8 1.5-3.3 3.3-3.3-1.9 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3-1.9-.1-3.3-1.5-3.3-3.3z"
      /> */}
      
      
      {/* Body inner color */}
      <Path
        className="prefix__st1"
        d="M43.6 45.4L32.5 25.9c-.7-1.5-2.3-2.5-4-2.5h-2.3c-.8.8-1.9 1.3-3 1.3s-2.3-.5-3-1.3h-2.4c-1.7 0-3.3 1-4 2.5L2.6 45.4c-.5 1.1 0 2.4 1.1 2.9s2.4 0 2.9-1.1l5.9-11.8c.2-.4.6-.7 1.1-.7.7 0 1.2.5 1.2 1.2v41.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V54.4c0-.7.7-.8 1.4-.8l5.9-.1c.7 0 .8.3.8.9v23.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V36.3c0-.5.3-.9.7-1.1.6-.3 1.3-.1 1.6.5l5.8 11.5c.3.5.7.9 1.3 1.1 1.2.4 2.4-.2 2.8-1.4h-.1c.1-.4 0-1-.2-1.5zm-16.2 3.3c0 1.8-1.1 3.3-2.6 3.9-.5.2-1.1.3-1.7.3-.6 0-1.2-.1-1.7-.3-1.5-.7-2.6-2.2-2.6-3.9 0-2.2 1.6-3.9 3.7-4.2-2.1-.3-3.7-2-3.7-4.2s1.7-4 3.8-4.2h1c2.1.2 3.8 2 3.8 4.2s-1.6 3.9-3.7 4.2c2 .2 3.7 2 3.7 4.2zm.1-17.3c-.8.9-1.8 1.9-3.2 3.1l-1.1 1.1-1.2-1.1c-1.4-1.2-2.5-2.2-3.2-3.1-.9-1.1-1.3-2.1-1.3-3.1 0-1.9 1.5-3.4 3.4-3.4.8 0 1.6.3 2.3.8.6-.5 1.5-.8 2.3-.8 1.9 0 3.4 1.5 3.4 3.4-.1 1-.5 2-1.4 3.1zM23.1 51.9s.1 0 0 0zM26.4 48.7v-.1V48.7z"

        fill="green"
      />
      {/* Body outline */}
      <Path d="M45.7 44.3L34.6 24.8c-1.1-2.4-3.5-3.8-6.2-3.8h-1.2c0-.2.1-.4.1-.6 0-.9-.3-1.7-.7-2.3 3.3-1.5 5.6-4.8 5.6-8.6 0-5.2-4.2-9.4-9.4-9.4s-9.4 4.2-9.4 9.4c0 4 2.5 7.4 6 8.8-.4.6-.6 1.4-.6 2.2 0 .2 0 .4.1.6h-1.2c-2.6 0-5 1.4-6.1 3.8L.5 44.3c-1.1 2.3-.2 5 2.1 6.2s5 .2 6.2-2.1l3.6-7.3v36.7c0 2.5 2.1 4.6 4.6 4.6 2.5 0 4.6-2.1 4.6-4.6V55h3.3v22.8c0 2.5 2.1 4.6 4.6 4.6 2.5 0 4.6-2.1 4.6-4.6V41.4l3.5 6.9c1.2 2.3 3.9 3.2 6.2 2 2.1-1.1 3-3.8 1.9-6zM15.9 9.4c0-3.9 3.1-7 7-7s7 3.1 7 7c0 3.4-2.4 6.2-5.7 6.9-.4-.1-.7-.2-1.1-.2-.4 0-.9.1-1.3.2-3.3-.5-5.9-3.4-5.9-6.9zm10.5 11c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3zM43.7 47c-.4 1.2-1.6 1.8-2.8 1.4-.6-.2-1-.6-1.3-1.1l-5.8-11.5c-.3-.6-1-.8-1.6-.5-.4.2-.7.6-.7 1.1v41.5c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V54.5c0-.7-.2-.9-.8-.9l-5.9.1c-.7 0-1.4.1-1.4.8v23.4c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V36c0-.7-.5-1.2-1.2-1.2-.5 0-.9.3-1.1.7L6.6 47.3c-.5 1.1-1.8 1.6-2.9 1.1s-1.6-1.8-1.1-2.9l11.1-19.6c.7-1.5 2.3-2.5 4-2.5h2.4c.8.8 1.9 1.3 3 1.3s2.3-.5 3-1.3h2.3c1.7 0 3.3 1 4 2.5l11.1 19.5c.3.5.4 1.1.2 1.6z" fill="black" strokeWidth="0.1"/>
      

      {/* Solar plexus inner */}
      <Path
        d="M23.1 37c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z"
        fill="#f4ff0a"
      />
      
      
      {/* Root chakra outer & Solar plexus outer*/}
      <Path d="M27.4 40.3c0-2.2-1.7-4-3.8-4.2h-1c-2.1.2-3.8 2-3.8 4.2s1.6 3.9 3.7 4.2c-2.1.3-3.7 2-3.7 4.2 0 1.8 1.1 3.3 2.6 3.9.5.2 1.1.3 1.7.3.6 0 1.2-.1 1.7-.3 1.5-.7 2.6-2.2 2.6-3.9 0-2.2-1.6-3.9-3.7-4.2 2-.3 3.7-2.1 3.7-4.2zM24 45.6c.1 0 .2 0 .2.1.2.1.3.1.5.2.1 0 .1.1.2.1.2.1.4.3.6.4.2.2.3.4.4.6 0 .1.1.1.1.2.1.1.2.3.2.5 0 .1.1.2.1.2 0 .2.1.3.1.5v.4c0 .2 0 .4-.1.5v.1c0 .2-.1.4-.2.6v.1c-.1.2-.1.3-.2.4 0 0 0 .1-.1.1-.2.3-.5.6-.8.8 0 0-.1 0-.1.1-.1.1-.3.2-.4.2h-.1c-.2.1-.4.1-.6.2-.2 0-.4.1-.6.1h-.1-.1c-.2 0-.4 0-.6-.1h-.1c-.2 0-.3-.1-.5-.2h-.1c-.2-.1-.3-.2-.5-.3 0 0-.1 0-.1-.1-.2-.1-.3-.2-.4-.4-.1-.1-.2-.3-.4-.4 0 0 0-.1-.1-.1-.1-.2-.2-.3-.3-.5v-.1c-.1-.2-.1-.3-.2-.5v-.1c0-.2-.1-.4-.1-.6v-.1-.1c0-.2 0-.4.1-.6 0-.2.1-.4.2-.6v-.1c.1-.2.1-.3.2-.4 0 0 0-.1.1-.1.2-.3.5-.6.8-.8 0 0 .1 0 .1-.1.1-.1.3-.2.4-.2h.1c.2-.1.4-.1.6-.2h.1c.2 0 .4-.1.5-.1h.4c.5.3.6.3.8.4zm-.9-2.1c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3z" strokeWidth="0.5" stroke="none"/>
      
      {/* Root chakra inner */}
      <Path
        d="M23.2 45.4h-.7-.1c-.2 0-.4.1-.6.2h-.1c-.2.1-.3.1-.4.2 0 0-.1 0-.1.1-.3.2-.6.5-.8.8 0 0 0 .1-.1.1-.1.1-.2.3-.2.4v.1c-.1.3-.1.5-.2.7 0 .2-.1.4-.1.6v.1c0 .2 0 .4.1.6v.1c0 .2.1.3.2.5v.1c.1.2.2.3.3.5 0 0 0 .1.1.1.1.2.2.3.4.4.1.1.3.2.4.4 0 0 .1 0 .1.1.2.1.3.2.5.3h.1c.2.1.3.1.5.2h.1c.2 0 .4.1.6.1h.1c.2 0 .4 0 .6-.1.2 0 .4-.1.6-.2h.1c.2-.1.3-.1.4-.2 0 0 .1 0 .1-.1.3-.2.6-.5.8-.8 0 0 0-.1.1-.1.1-.1.2-.3.2-.4v-.1c.1-.2.1-.4.2-.6v-.1c0-.2.1-.4 0-.7v-.3c0-.2 0-.3-.1-.5 0-.1 0-.2-.1-.2-.1-.2-.1-.3-.2-.5 0-.1-.1-.1-.1-.2-.1-.2-.3-.4-.4-.6-.2-.2-.4-.3-.6-.4-.1 0-.1-.1-.2-.1-.1-.1-.3-.2-.5-.2-.1 0-.2-.1-.2-.1-.2 0-.3-.1-.5-.1-.1 0-.2-.1-.3-.1z"
        fill="#aa0004"
      />
    </Svg>
  )
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: "black" 
  },
});