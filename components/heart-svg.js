import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableWithoutFeedback, StyleSheet } from "react-native"
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

export default function Heart(props) {
  return (
    <Svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 46.2 103"
      xmlSpace="preserve"
      // fill="green"
      style={styles.heart}
      {...props}
    >
      {/* Heart inner */}
      <TouchableWithoutFeedback onPress={() => console.log("heart")}>
        <Path style={styles.body}
          d="M25.4 26c-.7 0-1.4.3-1.8.9l-.5.5-.5-.5c-.4-.5-1.1-.9-1.8-.9-1.3 0-2.2.9-2.2 2.2 0 1.6 1.5 3 4.2 5.4l.3.3.3-.3c2.7-2.4 4.2-3.8 4.2-5.4 0-1.2-.9-2.2-2.2-2.2z"
          fill="#ff15cd"
        />
      </TouchableWithoutFeedback>

      {/* Heart Outer */}
      <TouchableWithoutFeedback onPress={()=>console.log("heart")}>
        <Path
          d="M25.4 24.8c-.8 0-1.6.3-2.3.8-.6-.5-1.5-.8-2.3-.8-1.9 0-3.4 1.5-3.4 3.4 0 1 .4 2 1.3 3.1.8.9 1.8 1.9 3.2 3.1l1.1 1.1 1.1-1.1c1.4-1.2 2.5-2.2 3.2-3.1.9-1.1 1.3-2.1 1.3-3.1.2-1.9-1.3-3.4-3.2-3.4zm-2 8.8l-.3.3-.3-.3c-2.7-2.4-4.2-3.8-4.2-5.4 0-1.3.9-2.2 2.2-2.2.7 0 1.4.3 1.8.9l.5.5.5-.5c.4-.5 1.1-.9 1.8-.9 1.3 0 2.2.9 2.2 2.2 0 1.6-1.5 3.1-4.2 5.4z"
          fill="#ff94df"
        />
      </TouchableWithoutFeedback>

    </Svg>
  )
}


const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    top: "1.5%"
    
  },
});