import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableWithoutFeedback, StyleSheet } from "react-native"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

export default function Throat(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 46.2 103"
      xmlSpace="preserve"
      // fill="green"
      style={styles.throat}
      {...props}
    >
      {/* Throat */}
      <TouchableWithoutFeedback onPress={()=> console.log("throat")}>
        <Path
          d="M19.9 20.4c0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3-3.3 1.5-3.3 3.3z"
          fill="#0047aa"
        />
      </TouchableWithoutFeedback>
    </Svg>
  )
}


const styles = StyleSheet.create({
  throat: {
    position: "absolute",
    top: "1.5%",
    left:"-0.1%",
    borderStyle: "dotted",
    borderColor: "black"

  },
});